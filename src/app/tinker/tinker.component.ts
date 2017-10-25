import { element } from "protractor";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subject, Subscription } from "rxjs/Rx";
import { EditorService } from "../services/editor/editor.service";
import { IBlocklyEditor } from "../models/blockly-editor.model";
// import { Blockly } from '../../vendor/blockly/blockly_compressed.js';

declare var Blockly: any;
declare global {
  interface Array<T> {
    inArray(comparer): boolean;
    pushIfNotExist(element);
    erase(item);
    clean(): Array<T>;
  }
}

// check if an element exists in array using a comparer function
// comparer : function(currentElement)
Array.prototype.inArray = function(comparer) {
  for (var i = 0; i < this.length; i++) {
    if (this[i]==comparer) return true;
  } return false;
};

// adds an element to the array if it does not already exist using a comparer
// function
Array.prototype.pushIfNotExist = function(element) {
  if (!this.inArray(element)) {
    this.push(element);
  }
};

Array.prototype.erase = function(item) {
  for (var i = 0; i < this.length; i++) {
    if(this[i]==item) this.splice(i,1)
  }
};

Array.prototype.clean = function() {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == undefined || this[i] == null){
      this.splice(i, 1);
      i--;
    }
  }
  return this;
}

// declare var variable_msg_mqtt: any;
// declare var text_server_name: any;
// declare var check_mqtt_server: any;
// declare var text_mqttuser: any;
// declare var text_mqttpassword: any;
// declare var statements_onmessage_mqtt: any;

@Component({
  selector: "tinker-component",
  templateUrl: "../tinker/tinker.component.html",
  styleUrls: ["../tinker/tinker.component.css"],
  providers: [EditorService]
})
export class TinkerComponent implements OnInit, OnDestroy {
  private _workspace: any;
  private _subject: Subject<any>;
  private _subscription: Subscription;
  private _openFileSubscription: Subscription;

  // console.log(statements_onmessage_mqtt);

  // _import: string = "";
  // _machine: string = "";
  // _init_code: string = "";

  dirty: boolean = false;
  name: string = "";
  generatedCode: string = "// generated code will appear here";

  constructor(private _editorService: EditorService) {
    this._openFileSubscription = this._editorService.open.subscribe(name =>
      this.openFile(name)
    );
  }

  ngOnInit(): void {
    let toolbox: any = {
      comments: false,
      disable: false,
      collapse: false,
      media: "../../vendor/tinker/media/",
      readOnly: false,
      scrollbars: true,
      trashcan: true,
      toolbox: document.getElementById("toolbox-tinker"),
      sounds: 1,
      zoom: {
        controls: true,
        wheel: true,
        startScale: 0.75,
        maxScale: 4,
        minScale: 0.25,
        scaleSpeed: 1.1
      },
      colours: {
        fieldShadow: "rgba(255, 255, 255, 0.3)",
        dragShadowOpacity: 0.6
      }
    };

    this._workspace = Blockly.inject("blocklyDiv", toolbox);
    this.autoloadBlock();
    this.autosaveblock_interval();
    this._workspace.addChangeListener(e => this.onWorkspaceChange(e));
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
    // TODO: cleanup blockly components
  }

  filterCode(code) {
    var codeArr;
    codeArr = code.split("[p]");
    codeArr.shift();

    var proc = [];

    codeArr.forEach(function(item) {
      var str = item.split("[/p]")[0];

      var strTmp = str.split("@@");
      str = strTmp[0] + (strTmp[2] ? strTmp[2] : "");

      var varArr0 = strTmp[1] ? strTmp[1].split(",") : [];
      var varArr = [];
      var variables = str.split("[:]");
      variables.shift();
      variables.forEach(function(item2) {
        varArr.pushIfNotExist(item2.split("[;]")[0].split(":")[0]);
      }, this);

      varArr0.forEach(function(item4) {
        varArr.erase(item4);
      }, this);

      var newVar = "";

      varArr.forEach(function(item3) {
        newVar += '  <span class="c330">set ' + item3 + " 0</span>\n";
      }, this);
      var str2 = str
        .replace("[SS]", newVar)
        .replace(/\[:\]/g, "")
        .replace(/\[;\]/g, "");
      proc.push(str2);
    }, this);

    code = proc.pop() + "@@";
    code += proc.join("@@");

    codeArr = code.split("\n");
    console.log(codeArr);
    codeArr.clean();
    // codeArr = codeArr.filter(function (item, index) {
    //   console.log(item);
    //   return (item.clean() != '');
    // });
    return codeArr.join("\n").replace(/@@/g, "\n\n");
  }

  generate(): string {
    var code = this.filterCode(Blockly.GogoCode.workspaceToCode(this._workspace));
    // var code = Blockly.GogoCode.workspaceToCode(this._workspace);

    return code;
  }

  autosaveblock_interval(): void {
    setInterval(() => {
      Blockly.svgResize(this._workspace);
      this.autosaveBlock();
    }, 100);
  }

  autosaveBlock(): void {
    var xml = Blockly.Xml.workspaceToDom(this._workspace);
    var data = Blockly.Xml.domToText(xml);
    // Store data in blob.
    window.localStorage.setItem("autoSaveBlock", data);
  }

  autoloadBlock(): void {
    console.log("-- Loading saved code.");
    var xml = Blockly.Xml.textToDom(
      '<xml><block type="procedure_procedure" x="250" y="50"><title name="pname">main</title></block></xml>'
    );
    xml.editable = false;
    xml.deletable = false;
    this._workspace.clear();
    Blockly.Xml.domToWorkspace(xml, this._workspace);

    // this.generate();

    var loadedBlock = window.localStorage.getItem("autoSaveBlock");
    // console.log(loadedBlock)

    if (!loadedBlock) return;
    if (!loadedBlock.split('procedure_procedure')[1]) {
      loadedBlock =
        loadedBlock.split("</xml>")[0] +
        '<block type="procedure_procedure" x="100" y="50"><title name="pname">main</title></block></xml>';
    }
    try {
      var xml = Blockly.Xml.textToDom(loadedBlock);
    } catch (e) {
      return;
    }
    if (xml.childElementCount == 0) return;
    this._workspace.clear();
    Blockly.Xml.domToWorkspace(xml, this._workspace);
  }

  onWorkspaceChange(item): void {
    // this.generatedCode = code;
    this.generatedCode = this.generate();
    this.dirty = true;
  }

  clickedNew(event): void {
    this._workspace.clear();
    this.name = "";
    this.dirty = false;
    this.generatedCode = "// generated code will appear here";
  }

  clickedSave(event): void {
    let xml = Blockly.Xml.workspaceToDom(this._workspace);
    let xml_text = Blockly.Xml.domToText(xml);
    let editor: IBlocklyEditor = <IBlocklyEditor>{
      xml: xml_text
    };
    this._editorService.save(this.name, editor);
    this.dirty = false;
  }

  openFile(file: [string, IBlocklyEditor]): void {
    let xml_text: string = file[1].xml;
    this.name = file[0];
    var xml = Blockly.Xml.textToDom(xml_text);
    this._workspace.clear();
    Blockly.Xml.domToWorkspace(xml, this._workspace);
    // TODO: meh, workspace is loaded and fires off changed event after this dirty gets cleared
    this.dirty = false;
  }
}
