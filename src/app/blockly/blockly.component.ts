import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Subject, Subscription } from 'rxjs/Rx';
import { EditorService } from '../services/editor/editor.service';
import { IBlocklyEditor } from '../models/blockly-editor.model';
// import { Blockly } from '../../vendor/blockly/blockly_compressed.js';

declare var Blockly: any;

@Component({
  selector: 'blockly-component',
  templateUrl: '../blockly/blockly.component.html',
  styleUrls: ['../blockly/blockly.component.css'],
  providers: [ EditorService ]
})
export class BlocklyComponent implements OnInit, OnDestroy {
  private _workspace: any;
  private _subject: Subject<any>;
  private _subscription: Subscription;
  private _openFileSubscription: Subscription;

  variable_msg_mqtt
  text_server_name
  text_server_publish
  text_server_subscribe
  check_mqtt_server
  text_mqttuser
  text_mqttpassword
  
  statements_onmessage_mqtt = ""
  _import: string = "";
  _machine: string = "";
  _init_code: string = "";
  
  dirty: boolean = false;
  name: string = '';  
  generatedCode: string = '// generated code will appear here';
  
  constructor(private _editorService: EditorService) {
    this._openFileSubscription = this._editorService.open.subscribe(name => this.openFile(name));
  }
  
  ngOnInit(): void {
    let toolbox: any = {toolbox: document.getElementById('toolbox')};
    
    this._workspace = Blockly.inject('blocklyDiv', toolbox);
    this.autoloadBlock();
    this._workspace.addChangeListener(e => this.onWorkspaceChange(e));
  }
  
  ngOnDestroy() : void{
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
    // TODO: cleanup blockly components
  }

  generate(): string {
    this._import = ""
    this._machine = ""
    this._init_code = ""

    // Parse the XML into a tree.
    var code = Blockly.Python.workspaceToCode(this._workspace);
    var newcode = code.split('$')

    this.generateXML()
    var execcode = this._import + "\n" + this._machine + "\n"
    // var execcode = _import + "\n"
    if (this._init_code) {
        execcode += this._init_code
    }

    for (var i = 1; i < newcode.length; i += 2) {
        execcode += newcode[i]
    };

    // editor.setValue(execcode);
    // console.log(workspace);
    // workspace.createVariable('hello')
    // console.log(Blockly.Variables.allVariables(workspace));
    // Blockly.Variables.createVariable('hello')
    // console.log(Blockly.Variables.allVariables(workspace));

    // console.log(execcode);
    return execcode
}

  generateXML() : void {
    var arrXml = [];
    var first = true;
    var first_sublib = true;
    var xmlDom = Blockly.Xml.workspaceToDom(this._workspace);
    var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
    
    arrXml.push(xmlText.search("Pin"))
    arrXml.push(xmlText.search("WLAN"))
    arrXml.push(xmlText.search("mqtt"))
    arrXml.push(xmlText.search("PWM"))
    arrXml.push(xmlText.search("I2C"))
    arrXml.push(xmlText.search("ADC"))
    arrXml.push(xmlText.search("time"))
    arrXml.push(xmlText.search("httplib"))
    arrXml.push(xmlText.search("json"))
    arrXml.push(xmlText.search("oled"))
    arrXml.push(xmlText.search("beeper"))
    arrXml.push(xmlText.search("math"))
    arrXml.push(xmlText.search("uniqueid"))
    arrXml.push(xmlText.search("ujson"))
    arrXml.push(xmlText.search("motor"))
    arrXml.push(xmlText.search("initmqtt"))
    arrXml.push(xmlText.search("onmsg"))
    arrXml.push(xmlText.search("ifstate"))
    // arrXml.push(xmlText.search("initmqttsub"))

    for (var i = 0; i < arrXml.length; i++) {
        // console.log(arrXml)
        if (arrXml[i] > 0) {

            switch (i) {
                case 0:
                    if (first_sublib) {
                        // console.log(first)
                        this._machine += "from machine import Pin"
                        first_sublib = false;
                    } else if (!first_sublib) {
                      this._machine += ","
                      this._machine += "Pin"
                    }
                    break;
                case 1:
                    if (first) {
                      this._import += "import network"
                        first = false;
                    } else if (!first) {
                      this._import += ","
                      this._import += "network"
                    }
                    break;
                case 2:
                    if (first) {
                      this._import += "import ubinascii,umqtt.simple as MQTTClient"
                        first = false;
                    } else if (!first) {
                      this._import += ",ubinascii,"
                      this._import += "umqtt.simple as MQTTClient"
                    }
                    break;
                case 3:
                    if (first_sublib) {
                      this._machine += "from machine import PWM"
                        first_sublib = false;
                    } else if (!first_sublib) {
                      this._machine += ","
                      this._machine += "PWM"
                    }
                    break;
                case 4:
                    if (first_sublib) {
                      this._machine += "from machine import I2C"
                        first_sublib = false;
                    } else if (!first_sublib) {
                      this._machine += ","
                      this._machine += "I2C"
                    }
                    break;
                case 5:
                    if (first_sublib) {
                      this._machine += "from machine import ADC"
                        first_sublib = false;
                    } else if (!first_sublib) {
                      this._machine += ","
                      this._machine += "ADC"
                    }
                    break;
                case 6:
                    if (first) {
                      this._import += "import time"
                        first = false;
                    } else if (!first) {
                      this._import += ","
                      this._import += "time"
                    }
                    break;
                case 7:
                    if (first) {
                      this._import += "import httplib"
                        first = false;
                    } else if (!first) {
                      this._import += ","
                      this._import += "httplib"
                    }
                    break;
                case 8:
                    if (first) {
                      this._import += "import json"
                        first = false;
                    } else if (!first) {
                      this._import += ","
                      this._import += "json"
                    }
                    break;
                case 9:
                    if (first) {
                      this._import += "import oled"
                        first = false;
                    } else if (!first) {
                      this._import += ","
                      this._import += "oled"
                    }
                    break;
                case 10:
                    if (first) {
                      this._import += "import beeper"
                        first = false;
                    } else if (!first) {
                      this._import += ","
                      this._import += "beeper"
                    }
                    this._init_code += "\nbeep = PWM(Pin(2), freq=600, duty=0)\n"
                    break;
                case 11:
                    if (first) {
                      this._import += "import math"
                        first = false;
                    } else if (!first) {
                      this._import += ","
                      this._import += "math"
                    }
                    break;
                case 12:
                    if (first_sublib) {
                      this._machine += "from machine import unique_id"
                        first_sublib = false;
                    } else if (!first_sublib) {
                      this._machine += ","
                      this._machine += "unique_id"
                    }
                    break;
                case 13:
                    if (first) {
                      this._import += "import ujson"
                        first = false;
                    } else if (!first) {
                      this._import += ","
                      this._import += "ujson"
                    }
                    break;
                case 14:
                    this._init_code += "\npin1 = Pin(4, Pin.OUT)\npin2 = Pin(15, Pin.OUT)\npin3 = Pin(14, Pin.OUT)\npin4 = Pin(12, Pin.OUT)\n"
                    break;
                case 15:
                    this._init_code += '\nCLIENT_ID = ubinascii.hexlify(unique_id())\nmqtt = MQTTClient.MQTTClient(CLIENT_ID,"' + this.text_server_name + '",user="'+ this.text_mqttuser +'",password="'+ this.text_mqttpassword +'")\n'
                    break;
                case 16:
                    // console.log('system.js', statements_onmessage_mqtt)
                    this._init_code += "\ndef onmessage(topic, " + this.variable_msg_mqtt + "):\n"
                    if (this.statements_onmessage_mqtt) {
                      this._init_code += Blockly.Python.INDENT + this.variable_msg_mqtt + '=' + this.variable_msg_mqtt + '.decode("ascii")\n'
                      this._init_code += Blockly.Python.INDENT + 'try:\n'
                      this._init_code += Blockly.Python.INDENT + Blockly.Python.INDENT + this.variable_msg_mqtt + '=int(' + this.variable_msg_mqtt + ')\n'
                      this._init_code += Blockly.Python.INDENT + 'except ValueError:\n'
                      this._init_code += Blockly.Python.INDENT + Blockly.Python.INDENT + 'pass\n'
                      this._init_code += this.statements_onmessage_mqtt + "\n"
                    } else {
                      this._init_code += Blockly.Python.INDENT + 'pass\n'
                    }
                    break;
                case 17:
                this._init_code += "\nifstate = {}\n" +
                        "def state_has_changed(text, boolean):\n" + Blockly.Python.INDENT +
                        "current_state = boolean\n" + Blockly.Python.INDENT +
                        "global ifstate\n" + Blockly.Python.INDENT +
                        "if text not in ifstate:\n" + Blockly.Python.INDENT + Blockly.Python.INDENT +
                        "ifstate[text] = False\n" + Blockly.Python.INDENT +
                        "prev_state = ifstate[text]\n" + Blockly.Python.INDENT +
                        "ifstate[text] = current_state\n" + Blockly.Python.INDENT +
                        "state_changed = current_state and (current_state != prev_state)\n" + Blockly.Python.INDENT +
                        "return state_changed\n"
                    break;
            }
        }
    }
  }

  autoloadBlock() : void {
    console.log('-- Loading saved code.')
    var xml = Blockly.Xml.textToDom('<xml><block type="controls_main" x="229" y="170"></block></xml>');
    xml.editable = false;
    xml.deletable = false;
    this._workspace.clear();
    Blockly.Xml.domToWorkspace(this._workspace, xml);

    this.generate()

    var loadedBlock = window.localStorage.getItem('autoSaveBlock');
    // console.log(loadedBlock)

    if (!loadedBlock) return;
    if (!(loadedBlock.split('<block type="controls_main"')[1])) {
        loadedBlock = loadedBlock.split('</xml>')[0] + '<block type="controls_main" x="229" y="170"></block></xml>';
    }
    try {
        var xml = Blockly.Xml.textToDom(loadedBlock);
    } catch (e) {

        return;
    }
    if (xml.childElementCount == 0) return;
    this._workspace.clear();
    Blockly.Xml.domToWorkspace(this._workspace, xml);
}
  
  onWorkspaceChange(item) : void {
    // this.generatedCode = code;
    this.generatedCode = this.generate();
    this.dirty = true;
  }
  
  clickedNew(event) : void {
    this._workspace.clear();
    this.name = "";
    this.dirty = false;
    this.generatedCode = "// generated code will appear here";
  }
  
  clickedSave(event) : void {
    let xml = Blockly.Xml.workspaceToDom(this._workspace);
    let xml_text = Blockly.Xml.domToText(xml);
    let editor: IBlocklyEditor = <IBlocklyEditor>{ xml: xml_text };
    this._editorService.save(this.name, editor);
    this.dirty = false;
  }
  
  openFile(file: [string, IBlocklyEditor]) : void {
    let xml_text: string = file[1].xml;
    this.name = file[0];
    var xml = Blockly.Xml.textToDom(xml_text);
    this._workspace.clear();
    Blockly.Xml.domToWorkspace(xml, this._workspace);
    // TODO: meh, workspace is loaded and fires off changed event after this dirty gets cleared
    this.dirty = false;
  }
}