webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"sidebar\" data-background-color=\"white\" data-active-color=\"danger\">\r\n        <sidebar-cmp></sidebar-cmp>\r\n    </div>\r\n    <div class=\"main-panel\">\r\n        <navbar-cmp></navbar-cmp>\r\n        <div class=\"content\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n        <!-- <footer-mome></footer-mome> -->\r\n    </div>\r\n</div>\r\n<!-- <fixedplugin-cmp></fixedplugin-cmp> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_module__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_footer_footer_module__ = __webpack_require__("../../../../../src/app/shared/footer/footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_navbar_navbar_module__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_fixedplugin_fixedplugin_module__ = __webpack_require__("../../../../../src/app/shared/fixedplugin/fixedplugin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngui_map__ = __webpack_require__("../../../../@ngui/map/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__blockly_blockly_component__ = __webpack_require__("../../../../../src/app/blockly/blockly.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__table_table_component__ = __webpack_require__("../../../../../src/app/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__typography_typography_component__ = __webpack_require__("../../../../../src/app/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__icons_icons_component__ = __webpack_require__("../../../../../src/app/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__maps_maps_component__ = __webpack_require__("../../../../../src/app/maps/maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__notifications_notifications_component__ = __webpack_require__("../../../../../src/app/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__upgrade_upgrade_component__ = __webpack_require__("../../../../../src/app/upgrade/upgrade.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__blockly_blockly_component__["a" /* BlocklyComponent */],
            __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_13__table_table_component__["a" /* TableComponent */],
            __WEBPACK_IMPORTED_MODULE_14__typography_typography_component__["a" /* TypographyComponent */],
            __WEBPACK_IMPORTED_MODULE_15__icons_icons_component__["a" /* IconsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__maps_maps_component__["a" /* MapsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__notifications_notifications_component__["a" /* NotificationsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__upgrade_upgrade_component__["a" /* UpgradeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* AppRoutes */]),
            __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_module__["a" /* SidebarModule */],
            __WEBPACK_IMPORTED_MODULE_7__shared_navbar_navbar_module__["a" /* NavbarModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_footer_footer_module__["a" /* FooterModule */],
            __WEBPACK_IMPORTED_MODULE_8__shared_fixedplugin_fixedplugin_module__["a" /* FixedPluginModule */],
            __WEBPACK_IMPORTED_MODULE_9__ngui_map__["a" /* NguiMapModule */].forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBr-tgUtpm8cyjYVQDrjs8YpZH7zBNWPuY' })
        ],
        schemas: [
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* NO_ERRORS_SCHEMA */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blockly_blockly_component__ = __webpack_require__("../../../../../src/app/blockly/blockly.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__table_table_component__ = __webpack_require__("../../../../../src/app/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__typography_typography_component__ = __webpack_require__("../../../../../src/app/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__icons_icons_component__ = __webpack_require__("../../../../../src/app/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__maps_maps_component__ = __webpack_require__("../../../../../src/app/maps/maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__notifications_notifications_component__ = __webpack_require__("../../../../../src/app/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__upgrade_upgrade_component__ = __webpack_require__("../../../../../src/app/upgrade/upgrade.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });









var AppRoutes = [
    {
        path: '',
        redirectTo: 'blockly',
        pathMatch: 'full',
    },
    {
        path: 'blockly',
        component: __WEBPACK_IMPORTED_MODULE_0__blockly_blockly_component__["a" /* BlocklyComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'user',
        component: __WEBPACK_IMPORTED_MODULE_2__user_user_component__["a" /* UserComponent */]
    },
    {
        path: 'table',
        component: __WEBPACK_IMPORTED_MODULE_3__table_table_component__["a" /* TableComponent */]
    },
    {
        path: 'typography',
        component: __WEBPACK_IMPORTED_MODULE_4__typography_typography_component__["a" /* TypographyComponent */]
    },
    {
        path: 'icons',
        component: __WEBPACK_IMPORTED_MODULE_5__icons_icons_component__["a" /* IconsComponent */]
    },
    {
        path: 'maps',
        component: __WEBPACK_IMPORTED_MODULE_6__maps_maps_component__["a" /* MapsComponent */]
    },
    {
        path: 'notifications',
        component: __WEBPACK_IMPORTED_MODULE_7__notifications_notifications_component__["a" /* NotificationsComponent */]
    },
    {
        path: 'upgrade',
        component: __WEBPACK_IMPORTED_MODULE_8__upgrade_upgrade_component__["a" /* UpgradeComponent */]
    }
];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/blockly/blockly.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#blocklyArea {\r\n  height: 100%;\r\n  width: 100%;\r\n  min-height:100%;\r\n  background-color: cornflowerblue;\r\n}\r\n\r\n#blocklyDiv {\r\n  height: 800px;\r\n  width: 100%;\r\n  min-height: 100%;\r\n}\r\n\r\n.full-size {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.dirty {\r\n  background-color: #ffebe6;\r\n}\r\n\r\n\r\nno-display {\r\n  display: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blockly/blockly.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <xml id=\"toolbox\" style=\"display: none\">\r\n    <category id=\"catLogic\" colour=\"#ff5252\" name=\"Logic\">\r\n      <block type=\"controls_if\"></block>\r\n      <block type=\"logic_ifstate\"></block>\r\n      <block type=\"logic_compare\"></block>\r\n      <block type=\"logic_operation\"></block>\r\n      <block type=\"logic_negate\"></block>\r\n      <block type=\"logic_boolean\"></block>\r\n      <block type=\"logic_null\"></block>\r\n      <block type=\"logic_ternary\"></block>\r\n    </category>\r\n    <category id=\"catLoops\" colour=\"#ee1b05\" name=\"Loops\">\r\n      <block type=\"controls_time_forever_wait\">\r\n        <value name=\"time\">\r\n          <shadow type=\"math_number\">\r\n            <field name=\"NUM\">1</field>\r\n          </shadow>\r\n        </value>\r\n      </block>\r\n      <block type=\"controls_forever\"></block>\r\n      <block type=\"controls_repeat_ext\">\r\n        <value name=\"TIMES\">\r\n          <shadow type=\"math_number\">\r\n            <field name=\"NUM\">10</field>\r\n          </shadow>\r\n        </value>\r\n      </block>\r\n      <block type=\"controls_whileUntil\">\r\n        <value name=\"BOOL\">\r\n          <shadow type=\"logic_boolean\">\r\n            <field name=\"BOOL\">TRUE</field>\r\n          </shadow>\r\n        </value>\r\n      </block>\r\n      <block type=\"controls_for\">\r\n        <value name=\"FROM\">\r\n          <shadow type=\"math_number\">\r\n            <field name=\"NUM\">1</field>\r\n          </shadow>\r\n        </value>\r\n        <value name=\"TO\">\r\n          <shadow type=\"math_number\">\r\n            <field name=\"NUM\">10</field>\r\n          </shadow>\r\n        </value>\r\n        <value name=\"BY\">\r\n          <shadow type=\"math_number\">\r\n            <field name=\"NUM\">1</field>\r\n          </shadow>\r\n        </value>\r\n      </block>\r\n      <block type=\"controls_forEach\"></block>\r\n      <block type=\"controls_flow_statements\"></block>\r\n    </category>\r\n    <category id=\"catMath\" colour=\"#e91e63\" name=\"Math\">\r\n      <block type=\"math_number\"></block>\r\n      <block type=\"math_arithmetic\">\r\n        <value name=\"A\">\r\n          <shadow type=\"math_number\">\r\n            <field name=\"NUM\">1</field>\r\n          </shadow>\r\n        </value>\r\n        <value name=\"B\">\r\n          <shadow type=\"math_number\">\r\n            <field name=\"NUM\">1</field>\r\n          </shadow>\r\n        </value>\r\n      </block>\r\n      <block type=\"math_between\"></block>\r\n      <block type=\"math_single\">\r\n        <value name=\"NUM\">\r\n          <shadow type=\"math_number\">\r\n            <field name=\"NUM\">9</field>\r\n          </shadow>\r\n        </value>\r\n      </block>\r\n      <block type=\"math_trig\">\r\n        <value name=\"NUM\">\r\n          <shadow type=\"math_number\">\r\n            <field name=\"NUM\">45</field>\r\n          </shadow>\r\n        </value>\r\n      </block>\r\n      <block type=\"math_constant\"></block>\r\n      <block type=\"math_number_property\">\r\n        <value name=\"NUMBER_TO_CHECK\">\r\n          <shadow type=\"math_number\">\r\n            <field name=\"NUM\">0</field>\r\n          </shadow>\r\n        </value>\r\n      </block>\r\n      <block type=\"math_change\">\r\n        <value name=\"DELTA\">\r\n          <shadow type=\"math_number\">\r\n            <field name=\"NUM\">1</field>\r\n          </shadow>\r\n        </value>\r\n      </block>\r\n      <block type=\"math_round\">\r\n        <value name=\"NUM\">\r\n          <shadow type=\"math_number\">\r\n            <field name=\"NUM\">3.1</field>\r\n          </shadow>\r\n        </value>\r\n      </block>\r\n      <block type=\"math_on_list\"></block>\r\n      <block type=\"math_modulo\">\r\n        <value name=\"DIVIDEND\">\r\n          <shadow type=\"math_number\">\r\n            <field name=\"NUM\">64</field>\r\n          </shadow>\r\n        </value>\r\n        <value name=\"DIVISOR\">\r\n          <shadow type=\"math_number\">\r\n            <field name=\"NUM\">10</field>\r\n          </shadow>\r\n        </value>\r\n      </block>\r\n      <block type=\"math_constrain\">\r\n        <value name=\"VALUE\">\r\n          <shadow type=\"math_number\">\r\n            <field name=\"NUM\">50</field>\r\n          </shadow>\r\n        </value>\r\n        <value name=\"LOW\">\r\n          <shadow type=\"math_number\">\r\n            <field name=\"NUM\">1</field>\r\n          </shadow>\r\n        </value>\r\n        <value name=\"HIGH\">\r\n          <shadow type=\"math_number\">\r\n            <field name=\"NUM\">100</field>\r\n          </shadow>\r\n        </value>\r\n      </block>\r\n      <block type=\"math_random_int\">\r\n        <value name=\"FROM\">\r\n          <shadow type=\"math_number\">\r\n            <field name=\"NUM\">1</field>\r\n          </shadow>\r\n        </value>\r\n        <value name=\"TO\">\r\n          <shadow type=\"math_number\">\r\n            <field name=\"NUM\">100</field>\r\n          </shadow>\r\n        </value>\r\n      </block>\r\n      <block type=\"math_random_float\"></block>\r\n    </category>\r\n    <category id=\"catText\" colour=\"#ad50d4\" name=\"Text\">\r\n      <block type=\"text\">\r\n        <field name=\"TEXT\">String</field>\r\n      </block>\r\n      <block type=\"text_join\"></block>\r\n      <block type=\"text_binary\"></block>\r\n      <block type=\"text_append\">\r\n        <value name=\"TEXT\">\r\n          <shadow type=\"text\"></shadow>\r\n        </value>\r\n      </block>\r\n      <block type=\"text_length\">\r\n        <value name=\"VALUE\">\r\n          <shadow type=\"text\">\r\n            <field name=\"TEXT\">abc</field>\r\n          </shadow>\r\n        </value>\r\n      </block>\r\n      <block type=\"text_isEmpty\">\r\n        <value name=\"VALUE\">\r\n          <shadow type=\"text\">\r\n            <field name=\"TEXT\"></field>\r\n          </shadow>\r\n        </value>\r\n      </block>\r\n      <block type=\"text_indexOf\">\r\n        <value name=\"VALUE\">\r\n          <block type=\"variables_get\">\r\n            <field name=\"VAR\">text</field>\r\n          </block>\r\n        </value>\r\n        <value name=\"FIND\">\r\n          <shadow type=\"text\">\r\n            <field name=\"TEXT\">abc</field>\r\n          </shadow>\r\n        </value>\r\n      </block>\r\n      <block type=\"text_charAt\">\r\n        <value name=\"VALUE\">\r\n          <block type=\"variables_get\">\r\n            <field name=\"VAR\">text</field>\r\n          </block>\r\n        </value>\r\n      </block>\r\n      <block type=\"text_getSubstring\">\r\n        <value name=\"STRING\">\r\n          <block type=\"variables_get\">\r\n            <field name=\"VAR\">text</field>\r\n          </block>\r\n        </value>\r\n      </block>\r\n      <block type=\"text_changeCase\">\r\n        <value name=\"TEXT\">\r\n          <shadow type=\"text\">\r\n            <field name=\"TEXT\">abc</field>\r\n          </shadow>\r\n        </value>\r\n      </block>\r\n      <block type=\"text_trim\">\r\n        <value name=\"TEXT\">\r\n          <shadow type=\"text\">\r\n            <field name=\"TEXT\">abc</field>\r\n          </shadow>\r\n        </value>\r\n      </block>\r\n      <block type=\"text_print\">\r\n        <value name=\"TEXT\">\r\n          <shadow type=\"text\">\r\n            <field name=\"TEXT\">abc</field>\r\n          </shadow>\r\n        </value>\r\n      </block>\r\n      <block type=\"text_prompt_ext\">\r\n        <value name=\"TEXT\">\r\n          <shadow type=\"text\">\r\n            <field name=\"TEXT\">abc</field>\r\n          </shadow>\r\n        </value>\r\n      </block>\r\n      <block type=\"ujson_json\"></block>\r\n    </category>\r\n    <category id=\"catLists\" colour=\"#295fb9\" name=\"Lists\">\r\n      <block type=\"lists_create_with\">\r\n        <mutation items=\"0\"></mutation>\r\n      </block>\r\n      <block type=\"lists_create_with\"></block>\r\n      <block type=\"lists_repeat\">\r\n        <value name=\"NUM\">\r\n          <shadow type=\"math_number\">\r\n            <field name=\"NUM\">5</field>\r\n          </shadow>\r\n        </value>\r\n      </block>\r\n      <block type=\"lists_length\"></block>\r\n      <block type=\"lists_isEmpty\"></block>\r\n      <block type=\"lists_indexOf\">\r\n        <value name=\"VALUE\">\r\n          <block type=\"variables_get\">\r\n            <field name=\"VAR\">list</field>\r\n          </block>\r\n        </value>\r\n      </block>\r\n      <block type=\"lists_getIndex\">\r\n        <value name=\"VALUE\">\r\n          <block type=\"variables_get\">\r\n            <field name=\"VAR\">list</field>\r\n          </block>\r\n        </value>\r\n      </block>\r\n      <block type=\"lists_setIndex\">\r\n        <value name=\"LIST\">\r\n          <block type=\"variables_get\">\r\n            <field name=\"VAR\">list</field>\r\n          </block>\r\n        </value>\r\n      </block>\r\n      <block type=\"lists_getSublist\">\r\n        <value name=\"LIST\">\r\n          <block type=\"variables_get\">\r\n            <field name=\"VAR\">list</field>\r\n          </block>\r\n        </value>\r\n      </block>\r\n      <block type=\"lists_split\">\r\n        <value name=\"DELIM\">\r\n          <shadow type=\"text\">\r\n            <field name=\"TEXT\">,</field>\r\n          </shadow>\r\n        </value>\r\n      </block>\r\n      <block type=\"lists_sort\"></block>\r\n    </category>\r\n    <sep></sep>\r\n    <category id=\"Display\" colour=\"#3498db\" name=\"Display\">\r\n      <block type=\"oled_text\">\r\n        <value name=\"text\">\r\n          <shadow type=\"text\">\r\n            <field name=\"TEXT\">MicroPython!</field>\r\n          </shadow>\r\n        </value>\r\n      </block>\r\n      <block type=\"oled_clear\"></block>\r\n    </category>\r\n    <category id=\"catWifi\" colour=\"#31ddbc\" name=\"Wifi\">\r\n      <block type=\"WLAN_setting\"></block>\r\n      <block type=\"WLAN_connectwifi\"></block>\r\n      <block type=\"WLAN_checknetwork\"></block>\r\n    </category>\r\n    <category id=\"catio\" colour=\"#1abc9c\" name=\"Input Output\">\r\n      <block type=\"ADC_input\"></block>\r\n      <block type=\"Pin_motor\"></block>\r\n      <block type=\"Pin_motor_turn\"></block>\r\n      <block type=\"Pin_motor_onoff\"></block>\r\n      <block type=\"Pin_PWM_output\"></block>\r\n      <block type=\"Pin_PWM_servo_heading\"></block>\r\n      <block type=\"Pin_PWM_servo_left\"></block>\r\n      <block type=\"Pin_PWM_servo_right\"></block>\r\n      <block type=\"Pin_PWM_servo_stop\"></block>\r\n    </category>\r\n    <category id=\"i2c\" colour=\"#27ae60\" name=\"I2C\">\r\n      <block type=\"Pin_I2C_read\"></block>\r\n      <block type=\"Pin_I2C_write\">\r\n        <value name=\"i2c\">\r\n          <shadow type=\"text\">\r\n            <field name=\"TEXT\">Message</field>\r\n          </shadow>\r\n        </value>\r\n      </block>\r\n      <block type=\"Pin_I2C_scan\"></block>\r\n    </category>\r\n    <category id=\"catTime\" colour=\"#b7d82c\" name=\"Time\">\r\n      <block type=\"time_delay\">\r\n        <value name=\"in_value\">\r\n          <block type=\"math_number\">\r\n            <field name=\"NUM\">1</field>\r\n          </block>\r\n        </value>\r\n      </block>\r\n    </category>\r\n    <category id=\"beeper\" colour=\"#f6cb1f\" name=\"Beeper\">\r\n      <block type=\"Pin_PWM_beeper_time_beep\"></block>\r\n      <block type=\"Pin_PWM_beeper_freq\">\r\n        <value name=\"freq\">\r\n          <shadow type=\"math_number\">\r\n            <field name=\"NUM\">600</field>\r\n          </shadow>\r\n        </value>\r\n      </block>\r\n      <block type=\"Pin_PWM_beeper_time_beep_wait\">\r\n        <value name=\"time\">\r\n          <shadow type=\"math_number\">\r\n            <field name=\"NUM\">1</field>\r\n          </shadow>\r\n        </value>\r\n      </block>\r\n    </category>\r\n    <sep></sep>\r\n    <category id=\"catVariables\" colour=\"#f39c12\" custom=\"VARIABLE\" name=\"Variables\"></category>\r\n    <category id=\"catFunctions\" colour=\"#e67e22\" custom=\"PROCEDURE\" name=\"Functions\"></category>\r\n    <sep></sep>\r\n    <category id=\"catmqtt\" colour=\"#d35400\" name=\"MQTT\">\r\n      <block type=\"initmqtt_setting\"></block>\r\n      <block type=\"uniqueid_time_publish\">\r\n        <value name=\"message\">\r\n          <shadow type=\"text\">\r\n            <field name=\"TEXT\">Message</field>\r\n          </shadow>\r\n        </value>\r\n      </block>\r\n      <block type=\"uniqueid_time_onmsg_subscribe\">\r\n        <value name=\"time\">\r\n          <shadow type=\"math_number\">\r\n            <field name=\"NUM\">1</field>\r\n          </shadow>\r\n        </value>\r\n      </block>\r\n    </category>\r\n    <category id=\"catdatalog\" colour=\"#795548\" name=\"DataLogging\">\r\n      <block type=\"httplib_datalog_write_key\"></block>\r\n      <block type=\"httplib_datalog_write\">\r\n        <value name=\"logging_write\">\r\n          <shadow type=\"text\">\r\n            <field name=\"TEXT\">Message</field>\r\n          </shadow>\r\n        </value>\r\n      </block>\r\n    </category>\r\n    <category id=\"catifttt\" colour=\"#455a64\" name=\"IFTTT\">\r\n      <block type=\"httplib_IFTTT_start\"></block>\r\n      <block type=\"httplib_IFTTT_sent\">\r\n        <value name=\"ifttt_value\">\r\n          <shadow type=\"text\">\r\n            <field name=\"TEXT\">Message</field>\r\n          </shadow>\r\n        </value>\r\n      </block>\r\n    </category>\r\n    <category id=\"catnetpie\" colour=\"#7f8c8d\" name=\"NETPIE\">\r\n      <block type=\"httplib_netpie_start\"></block>\r\n      <block type=\"httplib_Netpie_put\">\r\n        <value name=\"data_put\">\r\n          <shadow type=\"text\">\r\n            <field name=\"TEXT\">Message</field>\r\n          </shadow>\r\n        </value>\r\n      </block>\r\n    </category>\r\n  </xml>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-9\">\r\n      <div id=\"blocklyDiv\"></div>\r\n    </div>\r\n    <!-- <div class=\"col-md-1\"></div> -->\r\n    <div class=\"col-md-3\">\r\n      <!-- <div class=\"row\">\r\n        <button class=\"btn btn-danger\" (click)=\"clickedNew()\">New</button>\r\n        <form (submit)=\"clickedSave()\" #saveForm=\"ngForm\">\r\n          <input type='text' [(ngModel)]=\"name\" placeholder=\"untitled\" ngControl=\"name\" required/>\r\n          <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!saveForm.form.valid\">Save</button>\r\n        </form>\r\n      </div> -->\r\n      <div class=\"row\">\r\n        <div id=\"generated\">\r\n          <pre class=\"full-size\" [class.dirty]=\"dirty\">{{generatedCode}}</pre>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/blockly/blockly.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_editor_editor_service__ = __webpack_require__("../../../../../src/app/services/editor/editor.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlocklyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlocklyComponent = (function () {
    function BlocklyComponent(_editorService) {
        var _this = this;
        this._editorService = _editorService;
        this.statements_onmessage_mqtt = "";
        this._import = "";
        this._machine = "";
        this._init_code = "";
        this.dirty = false;
        this.name = '';
        this.generatedCode = '// generated code will appear here';
        this._openFileSubscription = this._editorService.open.subscribe(function (name) { return _this.openFile(name); });
    }
    BlocklyComponent.prototype.ngOnInit = function () {
        var _this = this;
        var toolbox = {
            toolbox: document.getElementById('toolbox')
        };
        this._workspace = Blockly.inject('blocklyDiv', toolbox);
        this.autoloadBlock();
        this.autosaveblock_interval();
        this._workspace.addChangeListener(function (e) { return _this.onWorkspaceChange(e); });
    };
    BlocklyComponent.prototype.ngOnDestroy = function () {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        // TODO: cleanup blockly components
    };
    BlocklyComponent.prototype.generate = function () {
        this._import = "";
        this._machine = "";
        this._init_code = "";
        // Parse the XML into a tree.
        var code = Blockly.Python.workspaceToCode(this._workspace);
        var newcode = code.split('$');
        this.generateXML();
        var execcode = this._import + "\n" + this._machine + "\n";
        // var execcode = _import + "\n"
        if (this._init_code) {
            execcode += this._init_code;
        }
        for (var i = 1; i < newcode.length; i += 2) {
            execcode += newcode[i];
        }
        ;
        // editor.setValue(execcode);
        // console.log(workspace);
        // workspace.createVariable('hello')
        // console.log(Blockly.Variables.allVariables(workspace));
        // Blockly.Variables.createVariable('hello')
        // console.log(Blockly.Variables.allVariables(workspace));
        // console.log(execcode);
        return execcode;
    };
    BlocklyComponent.prototype.generateXML = function () {
        var arrXml = [];
        var first = true;
        var first_sublib = true;
        var xmlDom = Blockly.Xml.workspaceToDom(this._workspace);
        var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
        arrXml.push(xmlText.search("Pin"));
        arrXml.push(xmlText.search("WLAN"));
        arrXml.push(xmlText.search("mqtt"));
        arrXml.push(xmlText.search("PWM"));
        arrXml.push(xmlText.search("I2C"));
        arrXml.push(xmlText.search("ADC"));
        arrXml.push(xmlText.search("time"));
        arrXml.push(xmlText.search("httplib"));
        arrXml.push(xmlText.search("json"));
        arrXml.push(xmlText.search("oled"));
        arrXml.push(xmlText.search("beeper"));
        arrXml.push(xmlText.search("math"));
        arrXml.push(xmlText.search("uniqueid"));
        arrXml.push(xmlText.search("ujson"));
        arrXml.push(xmlText.search("motor"));
        arrXml.push(xmlText.search("initmqtt"));
        arrXml.push(xmlText.search("onmsg"));
        arrXml.push(xmlText.search("ifstate"));
        // arrXml.push(xmlText.search("initmqttsub"))
        for (var i = 0; i < arrXml.length; i++) {
            // console.log(arrXml)
            if (arrXml[i] > 0) {
                switch (i) {
                    case 0:
                        if (first_sublib) {
                            // console.log(first)
                            this._machine += "from machine import Pin";
                            first_sublib = false;
                        }
                        else if (!first_sublib) {
                            this._machine += ",";
                            this._machine += "Pin";
                        }
                        break;
                    case 1:
                        if (first) {
                            this._import += "import network";
                            first = false;
                        }
                        else if (!first) {
                            this._import += ",";
                            this._import += "network";
                        }
                        break;
                    case 2:
                        if (first) {
                            this._import += "import ubinascii,umqtt.simple as MQTTClient";
                            first = false;
                        }
                        else if (!first) {
                            this._import += ",ubinascii,";
                            this._import += "umqtt.simple as MQTTClient";
                        }
                        break;
                    case 3:
                        if (first_sublib) {
                            this._machine += "from machine import PWM";
                            first_sublib = false;
                        }
                        else if (!first_sublib) {
                            this._machine += ",";
                            this._machine += "PWM";
                        }
                        break;
                    case 4:
                        if (first_sublib) {
                            this._machine += "from machine import I2C";
                            first_sublib = false;
                        }
                        else if (!first_sublib) {
                            this._machine += ",";
                            this._machine += "I2C";
                        }
                        break;
                    case 5:
                        if (first_sublib) {
                            this._machine += "from machine import ADC";
                            first_sublib = false;
                        }
                        else if (!first_sublib) {
                            this._machine += ",";
                            this._machine += "ADC";
                        }
                        break;
                    case 6:
                        if (first) {
                            this._import += "import time";
                            first = false;
                        }
                        else if (!first) {
                            this._import += ",";
                            this._import += "time";
                        }
                        break;
                    case 7:
                        if (first) {
                            this._import += "import httplib";
                            first = false;
                        }
                        else if (!first) {
                            this._import += ",";
                            this._import += "httplib";
                        }
                        break;
                    case 8:
                        if (first) {
                            this._import += "import json";
                            first = false;
                        }
                        else if (!first) {
                            this._import += ",";
                            this._import += "json";
                        }
                        break;
                    case 9:
                        if (first) {
                            this._import += "import oled";
                            first = false;
                        }
                        else if (!first) {
                            this._import += ",";
                            this._import += "oled";
                        }
                        break;
                    case 10:
                        if (first) {
                            this._import += "import beeper";
                            first = false;
                        }
                        else if (!first) {
                            this._import += ",";
                            this._import += "beeper";
                        }
                        this._init_code += "\nbeep = PWM(Pin(2), freq=600, duty=0)\n";
                        break;
                    case 11:
                        if (first) {
                            this._import += "import math";
                            first = false;
                        }
                        else if (!first) {
                            this._import += ",";
                            this._import += "math";
                        }
                        break;
                    case 12:
                        if (first_sublib) {
                            this._machine += "from machine import unique_id";
                            first_sublib = false;
                        }
                        else if (!first_sublib) {
                            this._machine += ",";
                            this._machine += "unique_id";
                        }
                        break;
                    case 13:
                        if (first) {
                            this._import += "import ujson";
                            first = false;
                        }
                        else if (!first) {
                            this._import += ",";
                            this._import += "ujson";
                        }
                        break;
                    case 14:
                        this._init_code += "\npin1 = Pin(4, Pin.OUT)\npin2 = Pin(15, Pin.OUT)\npin3 = Pin(14, Pin.OUT)\npin4 = Pin(12, Pin.OUT)\n";
                        break;
                    case 15:
                        this._init_code += '\nCLIENT_ID = ubinascii.hexlify(unique_id())\nmqtt = MQTTClient.MQTTClient(CLIENT_ID,"' + this.text_server_name + '",user="' + this.text_mqttuser + '",password="' + this.text_mqttpassword + '")\n';
                        break;
                    case 16:
                        // console.log('system.js', statements_onmessage_mqtt)
                        this._init_code += "\ndef onmessage(topic, " + this.variable_msg_mqtt + "):\n";
                        if (this.statements_onmessage_mqtt) {
                            this._init_code += Blockly.Python.INDENT + this.variable_msg_mqtt + '=' + this.variable_msg_mqtt + '.decode("ascii")\n';
                            this._init_code += Blockly.Python.INDENT + 'try:\n';
                            this._init_code += Blockly.Python.INDENT + Blockly.Python.INDENT + this.variable_msg_mqtt + '=int(' + this.variable_msg_mqtt + ')\n';
                            this._init_code += Blockly.Python.INDENT + 'except ValueError:\n';
                            this._init_code += Blockly.Python.INDENT + Blockly.Python.INDENT + 'pass\n';
                            this._init_code += this.statements_onmessage_mqtt + "\n";
                        }
                        else {
                            this._init_code += Blockly.Python.INDENT + 'pass\n';
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
                            "return state_changed\n";
                        break;
                }
            }
        }
    };
    BlocklyComponent.prototype.autosaveblock_interval = function () {
        var _this = this;
        setInterval(function () {
            Blockly.svgResize(_this._workspace);
            _this.autosaveBlock();
        }, 100);
    };
    BlocklyComponent.prototype.autosaveBlock = function () {
        var xml = Blockly.Xml.workspaceToDom(this._workspace);
        var data = Blockly.Xml.domToText(xml);
        // Store data in blob.
        window.localStorage.setItem('autoSaveBlock', data);
    };
    BlocklyComponent.prototype.autoloadBlock = function () {
        console.log('-- Loading saved code.');
        var xml = Blockly.Xml.textToDom('<xml><block type="controls_main" x="229" y="170"></block></xml>');
        xml.editable = false;
        xml.deletable = false;
        this._workspace.clear();
        Blockly.Xml.domToWorkspace(xml, this._workspace);
        this.generate();
        var loadedBlock = window.localStorage.getItem('autoSaveBlock');
        // console.log(loadedBlock)
        if (!loadedBlock)
            return;
        if (!(loadedBlock.split('<block type="controls_main"')[1])) {
            loadedBlock = loadedBlock.split('</xml>')[0] + '<block type="controls_main" x="229" y="170"></block></xml>';
        }
        try {
            var xml = Blockly.Xml.textToDom(loadedBlock);
        }
        catch (e) {
            return;
        }
        if (xml.childElementCount == 0)
            return;
        this._workspace.clear();
        Blockly.Xml.domToWorkspace(xml, this._workspace);
    };
    BlocklyComponent.prototype.onWorkspaceChange = function (item) {
        // this.generatedCode = code;
        this.generatedCode = this.generate();
        this.dirty = true;
    };
    BlocklyComponent.prototype.clickedNew = function (event) {
        this._workspace.clear();
        this.name = "";
        this.dirty = false;
        this.generatedCode = "// generated code will appear here";
    };
    BlocklyComponent.prototype.clickedSave = function (event) {
        var xml = Blockly.Xml.workspaceToDom(this._workspace);
        var xml_text = Blockly.Xml.domToText(xml);
        var editor = {
            xml: xml_text
        };
        this._editorService.save(this.name, editor);
        this.dirty = false;
    };
    BlocklyComponent.prototype.openFile = function (file) {
        var xml_text = file[1].xml;
        this.name = file[0];
        var xml = Blockly.Xml.textToDom(xml_text);
        this._workspace.clear();
        Blockly.Xml.domToWorkspace(xml, this._workspace);
        // TODO: meh, workspace is loaded and fires off changed event after this dirty gets cleared
        this.dirty = false;
    };
    return BlocklyComponent;
}());
BlocklyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Component */])({
        selector: 'blockly-component',
        template: __webpack_require__("../../../../../src/app/blockly/blockly.component.html"),
        styles: [__webpack_require__("../../../../../src/app/blockly/blockly.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_editor_editor_service__["a" /* EditorService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_editor_editor_service__["a" /* EditorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_editor_editor_service__["a" /* EditorService */]) === "function" && _a || Object])
], BlocklyComponent);

var _a;
//# sourceMappingURL=blockly.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-3 col-sm-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"content\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-5\">\r\n                                <div class=\"icon-big icon-warning text-center\">\r\n                                    <i class=\"ti-server\"></i>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-xs-7\">\r\n                                <div class=\"numbers\">\r\n                                    <p>Capacity</p>\r\n                                    105GB\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"footer\">\r\n                            <hr />\r\n                            <div class=\"stats\">\r\n                                <i class=\"ti-reload\"></i> Updated now\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-sm-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"content\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-5\">\r\n                                <div class=\"icon-big icon-success text-center\">\r\n                                    <i class=\"ti-wallet\"></i>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-xs-7\">\r\n                                <div class=\"numbers\">\r\n                                    <p>Revenue</p>\r\n                                    $1,345\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"footer\">\r\n                            <hr />\r\n                            <div class=\"stats\">\r\n                                <i class=\"ti-calendar\"></i> Last day\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-sm-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"content\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-5\">\r\n                                <div class=\"icon-big icon-danger text-center\">\r\n                                    <i class=\"ti-pulse\"></i>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-xs-7\">\r\n                                <div class=\"numbers\">\r\n                                    <p>Errors</p>\r\n                                    23\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"footer\">\r\n                            <hr />\r\n                            <div class=\"stats\">\r\n                                <i class=\"ti-timer\"></i> In the last hour\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-sm-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"content\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-5\">\r\n                                <div class=\"icon-big icon-info text-center\">\r\n                                    <i class=\"ti-twitter-alt\"></i>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-xs-7\">\r\n                                <div class=\"numbers\">\r\n                                    <p>Followers</p>\r\n                                    +45\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"footer\">\r\n                            <hr />\r\n                            <div class=\"stats\">\r\n                                <i class=\"ti-reload\"></i> Updated now\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"header\">\r\n                        <h4 class=\"title\">Users Behavior</h4>\r\n                        <p class=\"category\">24 Hours performance</p>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <div id=\"chartHours\" class=\"ct-chart\"></div>\r\n                        <div class=\"footer\">\r\n                            <div class=\"chart-legend\">\r\n                                <i class=\"fa fa-circle text-info\"></i> Open\r\n                                <i class=\"fa fa-circle text-danger\"></i> Click\r\n                                <i class=\"fa fa-circle text-warning\"></i> Click Second Time\r\n                            </div>\r\n                            <hr>\r\n                            <div class=\"stats\">\r\n                                <i class=\"ti-reload\"></i> Updated 3 minutes ago\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"header\">\r\n                        <h4 class=\"title\">Email Statistics</h4>\r\n                        <p class=\"category\">Last Campaign Performance</p>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <div id=\"chartPreferences\" class=\"ct-chart ct-perfect-fourth\"></div>\r\n\r\n                        <div class=\"footer\">\r\n                            <div class=\"chart-legend\">\r\n                                <i class=\"fa fa-circle text-info\"></i> Open\r\n                                <i class=\"fa fa-circle text-danger\"></i> Bounce\r\n                                <i class=\"fa fa-circle text-warning\"></i> Unsubscribe\r\n                            </div>\r\n                            <hr>\r\n                            <div class=\"stats\">\r\n                                <i class=\"ti-timer\"></i> Campaign sent 2 days ago\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card \">\r\n                    <div class=\"header\">\r\n                        <h4 class=\"title\">2015 Sales</h4>\r\n                        <p class=\"category\">All products including Taxes</p>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <div id=\"chartActivity\" class=\"ct-chart\"></div>\r\n\r\n                        <div class=\"footer\">\r\n                            <div class=\"chart-legend\">\r\n                                <i class=\"fa fa-circle text-info\"></i> Tesla Model S\r\n                                <i class=\"fa fa-circle text-warning\"></i> BMW 5 Series\r\n                            </div>\r\n                            <hr>\r\n                            <div class=\"stats\">\r\n                                <i class=\"ti-check\"></i> Data information certified\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__("../../../../chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var dataSales = {
            labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
            series: [
                [287, 385, 490, 562, 594, 626, 698, 895, 952],
                [67, 152, 193, 240, 387, 435, 535, 642, 744],
                [23, 113, 67, 108, 190, 239, 307, 410, 410]
            ]
        };
        var optionsSales = {
            low: 0,
            high: 1000,
            showArea: true,
            height: "245px",
            axisX: {
                showGrid: false,
            },
            lineSmooth: __WEBPACK_IMPORTED_MODULE_1_chartist__["Interpolation"].simple({
                divisor: 3
            }),
            showLine: true,
            showPoint: false,
        };
        var responsiveSales = [
            ['screen and (max-width: 640px)', {
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartHours', dataSales, optionsSales, responsiveSales);
        var data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
                [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
            ]
        };
        var options = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: "245px"
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartActivity', data, options, responsiveOptions);
        var dataPreferences = {
            series: [
                [25, 30, 20, 25]
            ]
        };
        var optionsPreferences = {
            donut: true,
            donutWidth: 40,
            startAngle: 0,
            total: 100,
            showLabel: false,
            axisX: {
                showGrid: false
            }
        };
        __WEBPACK_IMPORTED_MODULE_1_chartist__["Pie"]('#chartPreferences', dataPreferences, optionsPreferences);
        __WEBPACK_IMPORTED_MODULE_1_chartist__["Pie"]('#chartPreferences', {
            labels: ['62%', '32%', '6%'],
            series: [62, 32, 6]
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Component */])({
        selector: 'dashboard-cmp',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html")
    })
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/icons/icons.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"header\">\r\n                        <h4 class=\"title\">320+ Themify Icons</h4>\r\n                        <p class=\"category\">Handcrafted by our friends from <a target=\"_blank\" href=\"https://themify.me/\">Themify</a>.</p>\r\n                    </div>\r\n                    <div class=\"content all-icons\">\r\n\r\n                        <div class=\"icon-section\">\r\n                            <h3>Arrows &amp; Direction Icons </h3>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-arrow-up\"></span><span class=\"icon-name\"> ti-arrow-up</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-arrow-right\"></span><span class=\"icon-name\"> ti-arrow-right</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-arrow-left\"></span><span class=\"icon-name\"> ti-arrow-left</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-arrow-down\"></span><span class=\"icon-name\"> ti-arrow-down</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-arrows-vertical\"></span><span class=\"icon-name\"> ti-arrows-vertical</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-arrows-horizontal\"></span><span class=\"icon-name\"> ti-arrows-horizontal</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-angle-up\"></span><span class=\"icon-name\"> ti-angle-up</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-angle-right\"></span><span class=\"icon-name\"> ti-angle-right</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-angle-left\"></span><span class=\"icon-name\"> ti-angle-left</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-angle-down\"></span><span class=\"icon-name\"> ti-angle-down</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-angle-double-up\"></span><span class=\"icon-name\"> ti-angle-double-up</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-angle-double-right\"></span><span class=\"icon-name\"> ti-angle-double-right</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-angle-double-left\"></span><span class=\"icon-name\"> ti-angle-double-left</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-angle-double-down\"></span><span class=\"icon-name\"> ti-angle-double-down</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-move\"></span><span class=\"icon-name\"> ti-move</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-fullscreen\"></span><span class=\"icon-name\"> ti-fullscreen</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-arrow-top-right\"></span><span class=\"icon-name\"> ti-arrow-top-right</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-arrow-top-left\"></span><span class=\"icon-name\"> ti-arrow-top-left</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-arrow-circle-up\"></span><span class=\"icon-name\"> ti-arrow-circle-up</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-arrow-circle-right\"></span><span class=\"icon-name\"> ti-arrow-circle-right</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-arrow-circle-left\"></span><span class=\"icon-name\"> ti-arrow-circle-left</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-arrow-circle-down\"></span><span class=\"icon-name\"> ti-arrow-circle-down</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-arrows-corner\"></span><span class=\"icon-name\"> ti-arrows-corner</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-split-v\"></span><span class=\"icon-name\"> ti-split-v</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-split-v-alt\"></span><span class=\"icon-name\"> ti-split-v-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-split-h\"></span><span class=\"icon-name\"> ti-split-h</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-hand-point-up\"></span><span class=\"icon-name\"> ti-hand-point-up</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-hand-point-right\"></span><span class=\"icon-name\"> ti-hand-point-right</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-hand-point-left\"></span><span class=\"icon-name\"> ti-hand-point-left</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-hand-point-down\"></span><span class=\"icon-name\"> ti-hand-point-down</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-back-right\"></span><span class=\"icon-name\"> ti-back-right</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-back-left\"></span><span class=\"icon-name\"> ti-back-left</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-exchange-vertical\"></span><span class=\"icon-name\"> ti-exchange-vertical</span>\r\n                            </div>\r\n\r\n                        </div> <!-- Arrows Icons -->\r\n\r\n\r\n\r\n                        <h3>Web App Icons</h3>\r\n\r\n                        <div class=\"icon-section\">\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-wand\"></span><span class=\"icon-name\"> ti-wand</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-save\"></span><span class=\"icon-name\"> ti-save</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-save-alt\"></span><span class=\"icon-name\"> ti-save-alt</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-direction\"></span><span class=\"icon-name\"> ti-direction</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-direction-alt\"></span><span class=\"icon-name\"> ti-direction-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-user\"></span><span class=\"icon-name\"> ti-user</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-link\"></span><span class=\"icon-name\"> ti-link</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-unlink\"></span><span class=\"icon-name\"> ti-unlink</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-trash\"></span><span class=\"icon-name\"> ti-trash</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-target\"></span><span class=\"icon-name\"> ti-target</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-tag\"></span><span class=\"icon-name\"> ti-tag</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-desktop\"></span><span class=\"icon-name\"> ti-desktop</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-tablet\"></span><span class=\"icon-name\"> ti-tablet</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-mobile\"></span><span class=\"icon-name\"> ti-mobile</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-email\"></span><span class=\"icon-name\"> ti-email</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-star\"></span><span class=\"icon-name\"> ti-star</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-spray\"></span><span class=\"icon-name\"> ti-spray</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-signal\"></span><span class=\"icon-name\"> ti-signal</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-shopping-cart\"></span><span class=\"icon-name\"> ti-shopping-cart</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-shopping-cart-full\"></span><span class=\"icon-name\"> ti-shopping-cart-full</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-settings\"></span><span class=\"icon-name\"> ti-settings</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-search\"></span><span class=\"icon-name\"> ti-search</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-zoom-in\"></span><span class=\"icon-name\"> ti-zoom-in</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-zoom-out\"></span><span class=\"icon-name\"> ti-zoom-out</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-cut\"></span><span class=\"icon-name\"> ti-cut</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-ruler\"></span><span class=\"icon-name\"> ti-ruler</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-ruler-alt-2\"></span><span class=\"icon-name\"> ti-ruler-alt-2</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-ruler-pencil\"></span><span class=\"icon-name\"> ti-ruler-pencil</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-ruler-alt\"></span><span class=\"icon-name\"> ti-ruler-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-bookmark\"></span><span class=\"icon-name\"> ti-bookmark</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-bookmark-alt\"></span><span class=\"icon-name\"> ti-bookmark-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-reload\"></span><span class=\"icon-name\"> ti-reload</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-plus\"></span><span class=\"icon-name\"> ti-plus</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-minus\"></span><span class=\"icon-name\"> ti-minus</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-close\"></span><span class=\"icon-name\"> ti-close</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-pin\"></span><span class=\"icon-name\"> ti-pin</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-pencil\"></span><span class=\"icon-name\"> ti-pencil</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-pencil-alt\"></span><span class=\"icon-name\"> ti-pencil-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-paint-roller\"></span><span class=\"icon-name\"> ti-paint-roller</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-paint-bucket\"></span><span class=\"icon-name\"> ti-paint-bucket</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-na\"></span><span class=\"icon-name\"> ti-na</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-medall\"></span><span class=\"icon-name\"> ti-medall</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-medall-alt\"></span><span class=\"icon-name\"> ti-medall-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-marker\"></span><span class=\"icon-name\"> ti-marker</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-marker-alt\"></span><span class=\"icon-name\"> ti-marker-alt</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-lock\"></span><span class=\"icon-name\"> ti-lock</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-unlock\"></span><span class=\"icon-name\"> ti-unlock</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-location-arrow\"></span><span class=\"icon-name\"> ti-location-arrow</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout\"></span><span class=\"icon-name\"> ti-layout</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layers\"></span><span class=\"icon-name\"> ti-layers</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layers-alt\"></span><span class=\"icon-name\"> ti-layers-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-key\"></span><span class=\"icon-name\"> ti-key</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-image\"></span><span class=\"icon-name\"> ti-image</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-heart\"></span><span class=\"icon-name\"> ti-heart</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-heart-broken\"></span><span class=\"icon-name\"> ti-heart-broken</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-hand-stop\"></span><span class=\"icon-name\"> ti-hand-stop</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-hand-open\"></span><span class=\"icon-name\"> ti-hand-open</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-hand-drag\"></span><span class=\"icon-name\"> ti-hand-drag</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-flag\"></span><span class=\"icon-name\"> ti-flag</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-flag-alt\"></span><span class=\"icon-name\"> ti-flag-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-flag-alt-2\"></span><span class=\"icon-name\"> ti-flag-alt-2</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-eye\"></span><span class=\"icon-name\"> ti-eye</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-import\"></span><span class=\"icon-name\"> ti-import</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-export\"></span><span class=\"icon-name\"> ti-export</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-cup\"></span><span class=\"icon-name\"> ti-cup</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-crown\"></span><span class=\"icon-name\"> ti-crown</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-comments\"></span><span class=\"icon-name\"> ti-comments</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-comment\"></span><span class=\"icon-name\"> ti-comment</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-comment-alt\"></span><span class=\"icon-name\"> ti-comment-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-thought\"></span><span class=\"icon-name\"> ti-thought</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-clip\"></span><span class=\"icon-name\"> ti-clip</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-check\"></span><span class=\"icon-name\"> ti-check</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-check-box\"></span><span class=\"icon-name\"> ti-check-box</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-camera\"></span><span class=\"icon-name\"> ti-camera</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-announcement\"></span><span class=\"icon-name\"> ti-announcement</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-brush\"></span><span class=\"icon-name\"> ti-brush</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-brush-alt\"></span><span class=\"icon-name\"> ti-brush-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-palette\"></span><span class=\"icon-name\"> ti-palette</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-briefcase\"></span><span class=\"icon-name\"> ti-briefcase</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-bolt\"></span><span class=\"icon-name\"> ti-bolt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-bolt-alt\"></span><span class=\"icon-name\"> ti-bolt-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-blackboard\"></span><span class=\"icon-name\"> ti-blackboard</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-bag\"></span><span class=\"icon-name\"> ti-bag</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-world\"></span><span class=\"icon-name\"> ti-world</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-wheelchair\"></span><span class=\"icon-name\"> ti-wheelchair</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-car\"></span><span class=\"icon-name\"> ti-car</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-truck\"></span><span class=\"icon-name\"> ti-truck</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-timer\"></span><span class=\"icon-name\"> ti-timer</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-ticket\"></span><span class=\"icon-name\"> ti-ticket</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-thumb-up\"></span><span class=\"icon-name\"> ti-thumb-up</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-thumb-down\"></span><span class=\"icon-name\"> ti-thumb-down</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-stats-up\"></span><span class=\"icon-name\"> ti-stats-up</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-stats-down\"></span><span class=\"icon-name\"> ti-stats-down</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-shine\"></span><span class=\"icon-name\"> ti-shine</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-shift-right\"></span><span class=\"icon-name\"> ti-shift-right</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-shift-left\"></span><span class=\"icon-name\"> ti-shift-left</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-shift-right-alt\"></span><span class=\"icon-name\"> ti-shift-right-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-shift-left-alt\"></span><span class=\"icon-name\"> ti-shift-left-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-shield\"></span><span class=\"icon-name\"> ti-shield</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-notepad\"></span><span class=\"icon-name\"> ti-notepad</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-server\"></span><span class=\"icon-name\"> ti-server</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-pulse\"></span><span class=\"icon-name\"> ti-pulse</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-printer\"></span><span class=\"icon-name\"> ti-printer</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-power-off\"></span><span class=\"icon-name\"> ti-power-off</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-plug\"></span><span class=\"icon-name\"> ti-plug</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-pie-chart\"></span><span class=\"icon-name\"> ti-pie-chart</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-panel\"></span><span class=\"icon-name\"> ti-panel</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-package\"></span><span class=\"icon-name\"> ti-package</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-music\"></span><span class=\"icon-name\"> ti-music</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-music-alt\"></span><span class=\"icon-name\"> ti-music-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-mouse\"></span><span class=\"icon-name\"> ti-mouse</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-mouse-alt\"></span><span class=\"icon-name\"> ti-mouse-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-money\"></span><span class=\"icon-name\"> ti-money</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-microphone\"></span><span class=\"icon-name\"> ti-microphone</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-menu\"></span><span class=\"icon-name\"> ti-menu</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-menu-alt\"></span><span class=\"icon-name\"> ti-menu-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-map\"></span><span class=\"icon-name\"> ti-map</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-map-alt\"></span><span class=\"icon-name\"> ti-map-alt</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-location-pin\"></span><span class=\"icon-name\"> ti-location-pin</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-light-bulb\"></span><span class=\"icon-name\"> ti-light-bulb</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-info\"></span><span class=\"icon-name\"> ti-info</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-infinite\"></span><span class=\"icon-name\"> ti-infinite</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-id-badge\"></span><span class=\"icon-name\"> ti-id-badge</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-hummer\"></span><span class=\"icon-name\"> ti-hummer</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-home\"></span><span class=\"icon-name\"> ti-home</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-help\"></span><span class=\"icon-name\"> ti-help</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-headphone\"></span><span class=\"icon-name\"> ti-headphone</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-harddrives\"></span><span class=\"icon-name\"> ti-harddrives</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-harddrive\"></span><span class=\"icon-name\"> ti-harddrive</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-gift\"></span><span class=\"icon-name\"> ti-gift</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-game\"></span><span class=\"icon-name\"> ti-game</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-filter\"></span><span class=\"icon-name\"> ti-filter</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-files\"></span><span class=\"icon-name\"> ti-files</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-file\"></span><span class=\"icon-name\"> ti-file</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-zip\"></span><span class=\"icon-name\"> ti-zip</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-folder\"></span><span class=\"icon-name\"> ti-folder</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-envelope\"></span><span class=\"icon-name\"> ti-envelope</span>\r\n                            </div>\r\n\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-dashboard\"></span><span class=\"icon-name\"> ti-dashboard</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-cloud\"></span><span class=\"icon-name\"> ti-cloud</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-cloud-up\"></span><span class=\"icon-name\"> ti-cloud-up</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-cloud-down\"></span><span class=\"icon-name\"> ti-cloud-down</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-clipboard\"></span><span class=\"icon-name\"> ti-clipboard</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-calendar\"></span><span class=\"icon-name\"> ti-calendar</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-book\"></span><span class=\"icon-name\"> ti-book</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-bell\"></span><span class=\"icon-name\"> ti-bell</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-basketball\"></span><span class=\"icon-name\"> ti-basketball</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-bar-chart\"></span><span class=\"icon-name\"> ti-bar-chart</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-bar-chart-alt\"></span><span class=\"icon-name\"> ti-bar-chart-alt</span>\r\n                            </div>\r\n\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-archive\"></span><span class=\"icon-name\"> ti-archive</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-anchor\"></span><span class=\"icon-name\"> ti-anchor</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-alert\"></span><span class=\"icon-name\"> ti-alert</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-alarm-clock\"></span><span class=\"icon-name\"> ti-alarm-clock</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-agenda\"></span><span class=\"icon-name\"> ti-agenda</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-write\"></span><span class=\"icon-name\"> ti-write</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-wallet\"></span><span class=\"icon-name\"> ti-wallet</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-video-clapper\"></span><span class=\"icon-name\"> ti-video-clapper</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-video-camera\"></span><span class=\"icon-name\"> ti-video-camera</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-vector\"></span><span class=\"icon-name\"> ti-vector</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-support\"></span><span class=\"icon-name\"> ti-support</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-stamp\"></span><span class=\"icon-name\"> ti-stamp</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-slice\"></span><span class=\"icon-name\"> ti-slice</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-shortcode\"></span><span class=\"icon-name\"> ti-shortcode</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-receipt\"></span><span class=\"icon-name\"> ti-receipt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-pin2\"></span><span class=\"icon-name\"> ti-pin2</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-pin-alt\"></span><span class=\"icon-name\"> ti-pin-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-pencil-alt2\"></span><span class=\"icon-name\"> ti-pencil-alt2</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-eraser\"></span><span class=\"icon-name\"> ti-eraser</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-more\"></span><span class=\"icon-name\"> ti-more</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-more-alt\"></span><span class=\"icon-name\"> ti-more-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-microphone-alt\"></span><span class=\"icon-name\"> ti-microphone-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-magnet\"></span><span class=\"icon-name\"> ti-magnet</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-line-double\"></span><span class=\"icon-name\"> ti-line-double</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-line-dotted\"></span><span class=\"icon-name\"> ti-line-dotted</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-line-dashed\"></span><span class=\"icon-name\"> ti-line-dashed</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-ink-pen\"></span><span class=\"icon-name\"> ti-ink-pen</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-info-alt\"></span><span class=\"icon-name\"> ti-info-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-help-alt\"></span><span class=\"icon-name\"> ti-help-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-headphone-alt\"></span><span class=\"icon-name\"> ti-headphone-alt</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-gallery\"></span><span class=\"icon-name\"> ti-gallery</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-face-smile\"></span><span class=\"icon-name\"> ti-face-smile</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-face-sad\"></span><span class=\"icon-name\"> ti-face-sad</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-credit-card\"></span><span class=\"icon-name\"> ti-credit-card</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-comments-smiley\"></span><span class=\"icon-name\"> ti-comments-smiley</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-time\"></span><span class=\"icon-name\"> ti-time</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-share\"></span><span class=\"icon-name\"> ti-share</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-share-alt\"></span><span class=\"icon-name\"> ti-share-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-rocket\"></span><span class=\"icon-name\"> ti-rocket</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-new-window\"></span><span class=\"icon-name\"> ti-new-window</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-rss\"></span><span class=\"icon-name\"> ti-rss</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-rss-alt\"></span><span class=\"icon-name\"> ti-rss-alt</span>\r\n                            </div>\r\n\r\n                        </div><!-- Web App Icons -->\r\n\r\n\r\n                        <div class=\"icon-section\">\r\n                            <h3>Control Icons</h3>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-control-stop\"></span><span class=\"icon-name\"> ti-control-stop</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-control-shuffle\"></span><span class=\"icon-name\"> ti-control-shuffle</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-control-play\"></span><span class=\"icon-name\"> ti-control-play</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-control-pause\"></span><span class=\"icon-name\"> ti-control-pause</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-control-forward\"></span><span class=\"icon-name\"> ti-control-forward</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-control-backward\"></span><span class=\"icon-name\"> ti-control-backward</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-volume\"></span><span class=\"icon-name\"> ti-volume</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-control-skip-forward\"></span><span class=\"icon-name\"> ti-control-skip-forward</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-control-skip-backward\"></span><span class=\"icon-name\"> ti-control-skip-backward</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-control-record\"></span><span class=\"icon-name\"> ti-control-record</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-control-eject\"></span><span class=\"icon-name\"> ti-control-eject</span>\r\n                            </div>\r\n                        </div> <!-- Control Icons -->\r\n\r\n\r\n                        <div class=\"icon-section\">\r\n                            <h3>Text Editor</h3>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-paragraph\"></span><span class=\"icon-name\"> ti-paragraph</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-uppercase\"></span><span class=\"icon-name\"> ti-uppercase</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-underline\"></span><span class=\"icon-name\"> ti-underline</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-text\"></span><span class=\"icon-name\"> ti-text</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-Italic\"></span><span class=\"icon-name\"> ti-Italic</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-smallcap\"></span><span class=\"icon-name\"> ti-smallcap</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-list\"></span><span class=\"icon-name\"> ti-list</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-list-ol\"></span><span class=\"icon-name\"> ti-list-ol</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-align-right\"></span><span class=\"icon-name\"> ti-align-right</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-align-left\"></span><span class=\"icon-name\"> ti-align-left</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-align-justify\"></span><span class=\"icon-name\"> ti-align-justify</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-align-center\"></span><span class=\"icon-name\"> ti-align-center</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-quote-right\"></span><span class=\"icon-name\"> ti-quote-right</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-quote-left\"></span><span class=\"icon-name\"> ti-quote-left</span>\r\n                            </div>\r\n\r\n                        </div> <!-- Text Editor -->\r\n\r\n\r\n\r\n                        <div class=\"icon-section\">\r\n                            <h3>Layout Icons</h3>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-width-full\"></span><span class=\"icon-name\"> ti-layout-width-full</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-width-default\"></span><span class=\"icon-name\"> ti-layout-width-default</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-width-default-alt\"></span><span class=\"icon-name\"> ti-layout-width-default-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-tab\"></span><span class=\"icon-name\"> ti-layout-tab</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-tab-window\"></span><span class=\"icon-name\"> ti-layout-tab-window</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-tab-v\"></span><span class=\"icon-name\"> ti-layout-tab-v</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-tab-min\"></span><span class=\"icon-name\"> ti-layout-tab-min</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-slider\"></span><span class=\"icon-name\"> ti-layout-slider</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-slider-alt\"></span><span class=\"icon-name\"> ti-layout-slider-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-sidebar-right\"></span><span class=\"icon-name\"> ti-layout-sidebar-right</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-sidebar-none\"></span><span class=\"icon-name\"> ti-layout-sidebar-none</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-sidebar-left\"></span><span class=\"icon-name\"> ti-layout-sidebar-left</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-placeholder\"></span><span class=\"icon-name\"> ti-layout-placeholder</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-menu\"></span><span class=\"icon-name\"> ti-layout-menu</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-menu-v\"></span><span class=\"icon-name\"> ti-layout-menu-v</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-menu-separated\"></span><span class=\"icon-name\"> ti-layout-menu-separated</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-menu-full\"></span><span class=\"icon-name\"> ti-layout-menu-full</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-media-right\"></span><span class=\"icon-name\"> ti-layout-media-right</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-media-right-alt\"></span><span class=\"icon-name\"> ti-layout-media-right-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-media-overlay\"></span><span class=\"icon-name\"> ti-layout-media-overlay</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-media-overlay-alt\"></span><span class=\"icon-name\"> ti-layout-media-overlay-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-media-overlay-alt-2\"></span><span class=\"icon-name\"> ti-layout-media-overlay-alt-2</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-media-left\"></span><span class=\"icon-name\"> ti-layout-media-left</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-media-left-alt\"></span><span class=\"icon-name\"> ti-layout-media-left-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-media-center\"></span><span class=\"icon-name\"> ti-layout-media-center</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-media-center-alt\"></span><span class=\"icon-name\"> ti-layout-media-center-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-list-thumb\"></span><span class=\"icon-name\"> ti-layout-list-thumb</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-list-thumb-alt\"></span><span class=\"icon-name\"> ti-layout-list-thumb-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-list-post\"></span><span class=\"icon-name\"> ti-layout-list-post</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-list-large-image\"></span><span class=\"icon-name\"> ti-layout-list-large-image</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-line-solid\"></span><span class=\"icon-name\"> ti-layout-line-solid</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-grid4\"></span><span class=\"icon-name\"> ti-layout-grid4</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-grid3\"></span><span class=\"icon-name\"> ti-layout-grid3</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-grid2\"></span><span class=\"icon-name\"> ti-layout-grid2</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-grid2-thumb\"></span><span class=\"icon-name\"> ti-layout-grid2-thumb</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-cta-right\"></span><span class=\"icon-name\"> ti-layout-cta-right</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-cta-left\"></span><span class=\"icon-name\"> ti-layout-cta-left</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-cta-center\"></span><span class=\"icon-name\"> ti-layout-cta-center</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-cta-btn-right\"></span><span class=\"icon-name\"> ti-layout-cta-btn-right</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-cta-btn-left\"></span><span class=\"icon-name\"> ti-layout-cta-btn-left</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-column4\"></span><span class=\"icon-name\"> ti-layout-column4</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-column3\"></span><span class=\"icon-name\"> ti-layout-column3</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-column2\"></span><span class=\"icon-name\"> ti-layout-column2</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-accordion-separated\"></span><span class=\"icon-name\"> ti-layout-accordion-separated</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-accordion-merged\"></span><span class=\"icon-name\"> ti-layout-accordion-merged</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-accordion-list\"></span><span class=\"icon-name\"> ti-layout-accordion-list</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-widgetized\"></span><span class=\"icon-name\"> ti-widgetized</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-widget\"></span><span class=\"icon-name\"> ti-widget</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-widget-alt\"></span><span class=\"icon-name\"> ti-widget-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-view-list\"></span><span class=\"icon-name\"> ti-view-list</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-view-list-alt\"></span><span class=\"icon-name\"> ti-view-list-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-view-grid\"></span><span class=\"icon-name\"> ti-view-grid</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-upload\"></span><span class=\"icon-name\"> ti-upload</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-download\"></span><span class=\"icon-name\"> ti-download</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-loop\"></span><span class=\"icon-name\"> ti-loop</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-sidebar-2\"></span><span class=\"icon-name\"> ti-layout-sidebar-2</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-grid4-alt\"></span><span class=\"icon-name\"> ti-layout-grid4-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-grid3-alt\"></span><span class=\"icon-name\"> ti-layout-grid3-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-grid2-alt\"></span><span class=\"icon-name\"> ti-layout-grid2-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-column4-alt\"></span><span class=\"icon-name\"> ti-layout-column4-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-column3-alt\"></span><span class=\"icon-name\"> ti-layout-column3-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-column2-alt\"></span><span class=\"icon-name\"> ti-layout-column2-alt</span>\r\n                            </div>\r\n\r\n\r\n                        </div> <!-- Layout Icons -->\r\n\r\n\r\n                        <div class=\"icon-section\">\r\n                            <h3>Brand Icons</h3>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-flickr\"></span><span class=\"icon-name\"> ti-flickr</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-flickr-alt\"></span><span class=\"icon-name\"> ti-flickr-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-instagram\"></span><span class=\"icon-name\"> ti-instagram</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-google\"></span><span class=\"icon-name\"> ti-google</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-github\"></span><span class=\"icon-name\"> ti-github</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-facebook\"></span><span class=\"icon-name\"> ti-facebook</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-dropbox\"></span><span class=\"icon-name\"> ti-dropbox</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-dropbox-alt\"></span><span class=\"icon-name\"> ti-dropbox-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-dribbble\"></span><span class=\"icon-name\"> ti-dribbble</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-apple\"></span><span class=\"icon-name\"> ti-apple</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-android\"></span><span class=\"icon-name\"> ti-android</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-yahoo\"></span><span class=\"icon-name\"> ti-yahoo</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-trello\"></span><span class=\"icon-name\"> ti-trello</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-stack-overflow\"></span><span class=\"icon-name\"> ti-stack-overflow</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-soundcloud\"></span><span class=\"icon-name\"> ti-soundcloud</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-sharethis\"></span><span class=\"icon-name\"> ti-sharethis</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-sharethis-alt\"></span><span class=\"icon-name\"> ti-sharethis-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-reddit\"></span><span class=\"icon-name\"> ti-reddit</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-microsoft\"></span><span class=\"icon-name\"> ti-microsoft</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-microsoft-alt\"></span><span class=\"icon-name\"> ti-microsoft-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-linux\"></span><span class=\"icon-name\"> ti-linux</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-jsfiddle\"></span><span class=\"icon-name\"> ti-jsfiddle</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-joomla\"></span><span class=\"icon-name\"> ti-joomla</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-html5\"></span><span class=\"icon-name\"> ti-html5</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-css3\"></span><span class=\"icon-name\"> ti-css3</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-drupal\"></span><span class=\"icon-name\"> ti-drupal</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-wordpress\"></span><span class=\"icon-name\"> ti-wordpress</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-tumblr\"></span><span class=\"icon-name\"> ti-tumblr</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-tumblr-alt\"></span><span class=\"icon-name\"> ti-tumblr-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-skype\"></span><span class=\"icon-name\"> ti-skype</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-youtube\"></span><span class=\"icon-name\"> ti-youtube</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-vimeo\"></span><span class=\"icon-name\"> ti-vimeo</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-vimeo-alt\"></span><span class=\"icon-name\"> ti-vimeo-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-twitter\"></span><span class=\"icon-name\"> ti-twitter</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-twitter-alt\"></span><span class=\"icon-name\"> ti-twitter-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-linkedin\"></span><span class=\"icon-name\"> ti-linkedin</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-pinterest\"></span><span class=\"icon-name\"> ti-pinterest</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-pinterest-alt\"></span><span class=\"icon-name\"> ti-pinterest-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-themify-logo\"></span><span class=\"icon-name\"> ti-themify-logo</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-themify-favicon\"></span><span class=\"icon-name\"> ti-themify-favicon</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-themify-favicon-alt\"></span><span class=\"icon-name\"> ti-themify-favicon-alt</span>\r\n                            </div>\r\n\r\n                        </div> <!-- brand Icons -->\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/icons/icons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IconsComponent = (function () {
    function IconsComponent() {
    }
    return IconsComponent;
}());
IconsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Component */])({
        selector: 'icons-cmp',
        template: __webpack_require__("../../../../../src/app/icons/icons.component.html")
    })
], IconsComponent);

//# sourceMappingURL=icons.component.js.map

/***/ }),

/***/ "../../../../../src/app/maps/maps.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"card card-map\">\r\n        <div class=\"header\">\r\n            <h4 class=\"title\">Google Maps</h4>\r\n        </div>\r\n        <ngui-map zoom=\"13\" center=\"40.748817,-73.985428\" >\r\n         <marker [position]=\"[40.748817,-73.985428]\"></marker>\r\n           <map-circle\r\n               [center]=\"{lat: 40.748817, lng: -73.985428}\">\r\n           </map-circle>\r\n       </ngui-map>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/maps/maps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MapsComponent = (function () {
    function MapsComponent() {
    }
    MapsComponent.prototype.ngOnInit = function () {
        // var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        // var mapOptions = {
        //   zoom: 13,
        //   center: myLatlng,
        //   scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
        //   styles: [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}]
        //
        // }
        // var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        //
        // var marker = new google.maps.Marker({
        //     position: myLatlng,
        //     title:"Hello World!"
        // });
        //
        // // To add the marker to the map, call setMap();
        // marker.setMap(map);
    };
    return MapsComponent;
}());
MapsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Component */])({
        selector: 'maps-cmp',
        template: __webpack_require__("../../../../../src/app/maps/maps.component.html")
    })
], MapsComponent);

//# sourceMappingURL=maps.component.js.map

/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"container-fluid\">\r\n        <div class=\"card\">\r\n            <div class=\"header\">\r\n                <h4 class=\"title\">Notifications</h4>\r\n                <p class=\"category\">Handcrafted by our friend <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a></p>\r\n\r\n            </div>\r\n            <div class=\"content\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <h5>Notifications Style</h5>\r\n                        <div class=\"alert alert-info\">\r\n                            <span>This is a plain notification</span>\r\n                        </div>\r\n                        <div class=\"alert alert-info\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span>This is a notification with close button.</span>\r\n                        </div>\r\n                        <div class=\"alert alert-info\" data-notify=\"container\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span data-notify=\"icon\" class=\"ti-bell\"></span>\r\n                            <span data-notify=\"message\">This is a notification with close button and icon.</span>\r\n                        </div>\r\n                        <div class=\"alert alert-info\" data-notify=\"container\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span data-notify=\"icon\" class=\"ti-pie-chart\"></span>\r\n                            <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <h5>Notification states</h5>\r\n                        <div class=\"alert alert-info\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span><b> Info - </b> This is a regular notification made with \".alert-info\"</span>\r\n                        </div>\r\n                        <div class=\"alert alert-success\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span><b> Success - </b> This is a regular notification made with \".alert-success\"</span>\r\n                        </div>\r\n                        <div class=\"alert alert-warning\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span><b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\r\n                        </div>\r\n                        <div class=\"alert alert-danger\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span><b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <br>\r\n                <br>\r\n                <div class=\"places-buttons\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-9\">\r\n                            <h5>Notifications Places\r\n                                <p class=\"category\">Click to view notifications</p>\r\n                            </h5>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-3\">\r\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('top','left')\">Top Left</button>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('top','center')\">Top Center</button>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('top','right')\">Top Right</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-3\">\r\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('bottom','left')\">Bottom Left</button>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('bottom','center')\">Bottom Center</button>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('bottom','right')\">Bottom Right</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotificationsComponent = (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.showNotification = function (from, align) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "ti-gift",
            message: "Welcome to <b>Paper Dashboard</b> - a beautiful freebie for every web developer."
        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
    };
    return NotificationsComponent;
}());
NotificationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Component */])({
        selector: 'notifications-cmp',
        template: __webpack_require__("../../../../../src/app/notifications/notifications.component.html")
    })
], NotificationsComponent);

//# sourceMappingURL=notifications.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/editor/editor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditorService = (function () {
    function EditorService() {
        this._editors = {};
        this._updatesSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        this._openSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        this.updates = this._updatesSubject.asObservable();
        this.open = this._openSubject.asObservable();
    }
    EditorService.prototype.save = function (name, editor) {
        this._editors[name] = editor;
        this._updatesSubject.next([name, editor]);
    };
    EditorService.prototype.load = function (name) {
        return this._editors[name];
    };
    EditorService.prototype.remove = function (name) {
        this._editors[name] = null;
    };
    EditorService.prototype.all = function () {
        return Object.keys(this._editors);
    };
    EditorService.prototype.fireOpen = function (name) {
        var editor = this._editors[name];
        this._openSubject.next([name, editor]);
    };
    return EditorService;
}());
EditorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], EditorService);

//# sourceMappingURL=editor.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/fixedplugin/fixedplugin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fixed-plugin\">\r\n    <div class=\"dropdown show-dropdown\">\r\n        <a href=\"#\" data-toggle=\"dropdown\">\r\n        <i class=\"fa fa-cog fa-2x\"> </i>\r\n        </a>\r\n        <ul class=\"dropdown-menu\">\r\n            <li class=\"header-title\">Sidebar Background</li>\r\n            <li class=\"adjustments-line text-center\">\r\n                <a href=\"javascript:void(0)\" class=\"switch-trigger background-color\">\r\n                        <span class=\"badge filter badge-white active\" data-color=\"white\"></span>\r\n                        <span class=\"badge filter badge-black\" data-color=\"black\"></span>\r\n                </a>\r\n            </li>\r\n\r\n\t\t\t<li class=\"header-title\">Sidebar Active Color</li>\r\n            <li class=\"adjustments-line text-center\">\r\n                <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\r\n                        <span class=\"badge filter badge-primary\" data-color=\"primary\"></span>\r\n                        <span class=\"badge filter badge-info\" data-color=\"info\"></span>\r\n                        <span class=\"badge filter badge-success\" data-color=\"success\"></span>\r\n                        <span class=\"badge filter badge-warning\" data-color=\"warning\"></span>\r\n                        <span class=\"badge filter badge-danger active\" data-color=\"danger\"></span>\r\n                </a>\r\n            </li>\r\n\r\n        </ul>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/fixedplugin/fixedplugin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixedPluginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FixedPluginComponent = (function () {
    function FixedPluginComponent() {
    }
    FixedPluginComponent.prototype.ngOnInit = function () {
        var $sidebar = $('.sidebar');
        var $off_canvas_sidebar = $('.off-canvas-sidebar');
        var window_width = $(window).width();
        if (window_width > 767) {
            if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                $('.fixed-plugin .dropdown').addClass('open');
            }
        }
        $('.fixed-plugin a').click(function (event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if ($(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        $('.fixed-plugin .background-color span').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length != 0) {
                $sidebar.attr('data-background-color', new_color);
            }
            if ($off_canvas_sidebar.length != 0) {
                $off_canvas_sidebar.attr('data-background-color', new_color);
            }
        });
        $('.fixed-plugin .active-color span').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length != 0) {
                $sidebar.attr('data-active-color', new_color);
            }
            if ($off_canvas_sidebar.length != 0) {
                $off_canvas_sidebar.attr('data-active-color', new_color);
            }
        });
    };
    return FixedPluginComponent;
}());
FixedPluginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Component */])({
        selector: 'fixedplugin-cmp',
        template: __webpack_require__("../../../../../src/app/shared/fixedplugin/fixedplugin.component.html")
    })
], FixedPluginComponent);

//# sourceMappingURL=fixedplugin.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/fixedplugin/fixedplugin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fixedplugin_component__ = __webpack_require__("../../../../../src/app/shared/fixedplugin/fixedplugin.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixedPluginModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FixedPluginModule = (function () {
    function FixedPluginModule() {
    }
    return FixedPluginModule;
}());
FixedPluginModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__fixedplugin_component__["a" /* FixedPluginComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__fixedplugin_component__["a" /* FixedPluginComponent */]]
    })
], FixedPluginModule);

//# sourceMappingURL=fixedplugin.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n    <div class=\"container-fluid\">\r\n        <nav class=\"pull-left\">\r\n            <ul>\r\n\r\n                <li>\r\n                    <a href=\"https://www.creative-tim.com\">\r\n                        Creative Tim\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"http://blog.creative-tim.com\">\r\n                       Blog\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"https://www.creative-tim.com/license\">\r\n                        Licenses\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n        <div class=\"copyright pull-right\">\r\n            &copy; {{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by <a href=\"https://www.creative-tim.com\">Creative Tim</a>\r\n            <!-- &copy; {{test }}, made with <i class=\"fa fa-heart heart\"></i> by <a href=\"https://www.creative-tim.com\">Creative Tim</a> -->\r\n        </div>\r\n    </div>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Component */])({
        selector: 'footer-mome',
        template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html")
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = (function () {
    function FooterModule() {
    }
    return FooterModule;
}());
FooterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]]
    })
], FooterModule);

//# sourceMappingURL=footer.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar bar1\"></span>\r\n                <span class=\"icon-bar bar2\"></span>\r\n                <span class=\"icon-bar bar3\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li>\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"ti-panel\"></i>\r\n                        <p>Stats</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"dropdown\">\r\n                      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                            <i class=\"ti-bell\"></i>\r\n                            <p class=\"notification\">5</p>\r\n                            <p>Notifications</p>\r\n                            <b class=\"caret\"></b>\r\n                      </a>\r\n                      <ul class=\"dropdown-menu\">\r\n                        <li><a href=\"#\">Notification 1</a></li>\r\n                        <li><a href=\"#\">Notification 2</a></li>\r\n                        <li><a href=\"#\">Notification 3</a></li>\r\n                        <li><a href=\"#\">Notification 4</a></li>\r\n                        <li><a href=\"#\">Another notification</a></li>\r\n                      </ul>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        <i class=\"ti-settings\"></i>\r\n                        <p>Settings</p>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n\r\n        </div>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(location, renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = window.location.pathname;
        titlee = titlee.substring(1);
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.sidebarToggle = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    return NavbarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* ViewChild */])("navbar-cmp"),
    __metadata("design:type", Object)
], NavbarComponent.prototype, "button", void 0);
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Component */])({
        selector: 'navbar-cmp',
        template: __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Renderer */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavbarModule = (function () {
    function NavbarModule() {
    }
    return NavbarModule;
}());
NavbarModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]]
    })
], NavbarModule);

//# sourceMappingURL=navbar.module.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-wrapper\">\r\n    <div class=\"logo\">\r\n        <!-- <a href=\"https://www.creative-tim.com\" class=\"simple-text\"> -->\r\n        <div class=\"logo-img\">\r\n            <img src=\"../../assets/img/WA_logo_2.png\" alt=\"\">\r\n        </div>\r\n        <!-- Creative Tim -->\r\n        <!-- </a> -->\r\n    </div>\r\n    <ul class=\"nav\">\r\n        <div class=\"wa-status\">\r\n            <svg version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\" width=\"150.000000pt\" height=\"150.000000pt\" viewBox=\"0 0 300.000000 300.000000\"\r\n                preserveAspectRatio=\"xMidYMid meet\">\r\n                <g id=\"status-svg\" transform=\"translate(0.000000,300.000000) scale(0.100000,-0.100000)\" fill=\"#000000\" stroke=\"none\">\r\n                    <path d=\"M859 2527 c-96 -36 -140 -101 -140 -209 -1 -45 5 -69 25 -103 l26\r\n                -44 -2 -338 -3 -338 -100 -6 c-55 -3 -95 -6 -88 -7 15 -3 35 -60 22 -67 -5 -4\r\n                -9 -17 -9 -31 0 -14 -4 -22 -10 -19 -6 3 -7 -1 -4 -9 3 -9 7 -16 8 -16 8 1 79\r\n                29 74 30 -5 0 2 10 13 21 12 12 17 24 13 28 -5 3 -9 13 -10 22 -1 12 9 16 42\r\n                16 l44 1 0 -174 c0 -109 -4 -174 -10 -174 -5 0 -10 -4 -10 -10 0 -5 7 -7 15\r\n                -4 12 5 14 -7 14 -70 0 -42 -5 -76 -10 -76 -5 0 -9 -36 -9 -80 0 -51 4 -80 11\r\n                -80 7 0 10 23 7 64 -2 52 0 62 11 58 10 -4 12 -1 6 7 -6 10 -3 11 12 3 14 -8\r\n                26 -7 43 1 21 11 27 10 43 -6 15 -15 16 -21 5 -35 -11 -13 -11 -15 5 -9 14 5\r\n                17 0 19 -31 0 -20 0 -45 -1 -56 -1 -16 1 -17 14 -6 17 15 19 7 5 -21 -7 -13\r\n                -7 -19 0 -19 5 0 10 -5 10 -10 0 -17 -33 -7 -52 15 -20 24 -15 33 8 14 16 -13\r\n                16 -12 3 9 -8 13 -20 20 -29 17 -8 -3 -6 3 6 13 17 14 18 20 8 30 -18 17 -29\r\n                15 -15 -2 9 -11 8 -17 -8 -28 -12 -8 -18 -18 -13 -23 4 -4 -3 -3 -15 4 -33 17\r\n                -53 13 -62 -11 -15 -40 2 -63 40 -60 19 2 40 9 47 15 10 8 12 7 10 -2 -4 -15\r\n                18 -18 163 -24 59 -3 111 -7 116 -10 6 -4 25 -2 43 3 20 6 39 6 50 0 10 -5 20\r\n                -6 24 -3 3 4 36 9 74 12 l67 6 3 133 c2 124 4 132 22 132 16 0 20 -7 20 -34 0\r\n                -43 13 -47 118 -37 7 1 12 15 12 36 0 35 22 50 33 23 4 -10 8 -10 15 1 13 19\r\n                32 5 32 -24 0 -13 3 -30 6 -39 7 -19 40 -21 47 -3 3 9 9 9 24 1 27 -17 53 5\r\n                53 45 0 33 8 39 28 19 8 -8 12 -53 12 -134 l0 -123 43 -6 c23 -4 47 -5 52 -4\r\n                6 1 17 0 25 -4 33 -12 60 -15 60 -6 0 12 73 0 81 -14 4 -5 10 -3 15 6 8 13 17\r\n                14 49 7 22 -5 41 -7 44 -5 2 3 5 93 6 202 2 109 4 228 4 266 l1 67 64 0 c55 0\r\n                64 3 69 20 3 12 -1 24 -11 30 -13 7 -5 9 30 10 l46 0 7 103 c3 56 5 179 3 272\r\n                l-3 170 -80 3 c-43 2 -85 8 -93 14 -10 9 -16 8 -23 -3 -7 -9 -9 52 -6 184 3\r\n                176 2 197 -13 197 -12 0 -15 8 -13 33 5 41 -11 67 -29 49 -14 -14 -52 -16 -43\r\n                -2 11 17 -27 11 -40 -7 -12 -16 -40 -9 -30 8 4 5 -3 9 -14 9 -11 0 -23 -4 -26\r\n                -10 -3 -5 -13 -10 -21 -10 -8 0 -12 5 -9 10 10 16 -31 12 -45 -5 -7 -8 -10\r\n                -24 -7 -35 6 -24 -7 -34 -53 -37 -36 -2 -36 -2 -32 34 3 25 1 34 -7 29 -6 -4\r\n                -11 -2 -11 3 0 22 -30 10 -31 -11 -1 -19 -2 -19 -6 -5 -3 11 -11 16 -19 13 -9\r\n                -3 -12 -1 -9 4 3 6 -3 10 -14 10 -12 0 -21 -4 -21 -8 0 -4 -9 -8 -19 -8 -11 0\r\n                -17 4 -15 8 3 4 -4 8 -15 8 -12 0 -21 -4 -21 -8 0 -4 -9 -8 -19 -8 -11 0 -17\r\n                4 -15 8 6 9 -18 11 -40 2 -10 -4 -16 -18 -16 -40 0 -52 -28 -45 -33 9 l-4 42\r\n                -1 -42 c-1 -31 -6 -43 -17 -43 -10 0 -15 10 -15 26 0 15 -8 33 -17 40 -24 18\r\n                -33 17 -33 -2 0 -14 -3 -14 -15 -4 -8 7 -15 9 -15 4 0 -5 -4 -2 -10 6 -8 12\r\n                -12 12 -36 0 -21 -12 -28 -12 -31 -2 -3 6 -12 12 -22 12 -9 0 -23 -6 -30 -12\r\n                -11 -10 -14 -10 -18 -1 -3 8 -18 11 -46 7 l-42 -6 -3 99 c-2 54 -5 99 -6 101\r\n                -2 1 -25 4 -52 6 -27 2 -65 13 -85 25 -46 27 -123 35 -170 18z m-82 -213 c-3\r\n                -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m20 -30 c-3 -3 -12 -4 -19\r\n                -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m23 -18 c0 -2 -9 -6 -20 -9 -11 -3 -18 -1\r\n                -14 4 5 9 34 13 34 5z m390 -43 c0 -7 -7 -13 -15 -13 -15 0 -21 31 -8 43 8 8\r\n                23 -12 23 -30z m130 16 c0 -6 -4 -7 -10 -4 -5 3 -10 11 -10 16 0 6 5 7 10 4 6\r\n                -3 10 -11 10 -16z m620 6 c0 -8 -4 -15 -10 -15 -5 0 -7 7 -4 15 4 8 8 15 10\r\n                15 2 0 4 -7 4 -15z m40 5 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11\r\n                10 2 0 4 -4 4 -10z m64 -5 c-4 -8 -8 -15 -10 -15 -2 0 -4 7 -4 15 0 8 4 15 10\r\n                15 5 0 7 -7 4 -15z m-449 -5 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4\r\n                10 3 0 8 -4 11 -10z m70 0 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4\r\n                10 3 0 8 -4 11 -10z m415 0 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11\r\n                10 2 0 4 -4 4 -10z m-1259 -43 c-10 -9 -11 -8 -5 6 3 10 9 15 12 12 3 -3 0\r\n                -11 -7 -18z m883 -12 c-16 -11 -16 -13 2 -23 17 -10 18 -11 1 -12 -10 0 -20 7\r\n                -23 15 -4 8 -10 12 -15 9 -5 -3 -7 -10 -4 -15 4 -5 -2 -9 -11 -9 -16 0 -16 1\r\n                1 20 13 14 14 20 5 20 -7 0 -10 3 -7 6 4 4 13 2 21 -5 11 -9 15 -8 20 4 3 9\r\n                11 13 17 10 6 -5 4 -11 -7 -20z m356 -9 c0 -19 -5 -22 -30 -21 -37 2 -42 7\r\n                -34 30 7 16 8 16 17 -6 7 -17 11 -20 14 -9 2 8 6 21 9 28 6 20 24 4 24 -22z\r\n                m36 18 c-3 -9 -6 -23 -6 -31 0 -22 -6 -14 -14 20 -5 21 -3 27 10 27 11 0 14\r\n                -5 10 -16z m-846 -25 c0 -3 -6 -6 -14 -6 -8 0 -11 8 -8 20 4 14 7 16 13 5 5\r\n                -7 9 -16 9 -19z m377 -6 c-3 -10 -5 -4 -5 12 0 17 2 24 5 18 2 -7 2 -21 0 -30z\r\n                m333 -3 c5 0 11 9 14 20 5 17 6 17 4 -2 -4 -28 -33 -31 -34 -3 -1 15 0 16 3 3\r\n                3 -10 8 -18 13 -18z m-635 1 c-9 -16 -25 -3 -18 15 4 10 9 12 15 6 6 -6 7 -15\r\n                3 -21z m55 19 c-13 -9 -13 -11 0 -20 9 -6 10 -10 3 -10 -15 0 -26 17 -18 30 3\r\n                6 12 10 18 10 7 0 6 -4 -3 -10z m50 -15 c0 -14 -4 -25 -9 -25 -5 0 -8 11 -7\r\n                25 1 33 16 33 16 0z m673 -45 c-13 -5 -23 -15 -23 -21 0 -7 -3 -9 -6 -6 -10\r\n                10 16 37 35 36 11 0 9 -3 -6 -9z m-952 -28 c0 -10 3 -12 5 -5 3 7 12 9 20 6 9\r\n                -3 14 1 14 13 0 9 2 15 5 12 3 -3 2 -19 -1 -37 -5 -25 -9 -29 -20 -20 -11 9\r\n                -14 8 -14 -1 0 -20 -10 -6 -20 29 -5 19 -5 29 1 26 5 -4 9 -14 10 -23z m106\r\n                -29 c-4 -15 -5 -14 -6 5 0 12 -5 22 -10 22 -5 0 -12 -10 -14 -22 -3 -14 -5 -8\r\n                -6 15 l-1 38 21 -20 c12 -11 19 -27 16 -38z m77 13 c1 -22 -2 -32 -8 -26 -12\r\n                12 -17 41 -11 59 8 22 17 6 19 -33z m203 11 c10 -33 9 -34 -17 -33 -25 1 -26\r\n                3 -17 34 13 41 21 41 34 -1z m610 11 c6 -7 13 -25 17 -40 5 -23 3 -28 -18 -34\r\n                -14 -3 -31 -4 -38 -1 -7 3 -1 6 14 6 15 1 29 5 32 10 4 5 -3 7 -14 4 -15 -4\r\n                -20 0 -21 13 0 11 -2 27 -4 37 -4 20 18 23 32 5z m-860 -35 c-3 -10 -5 -4 -5\r\n                12 0 17 2 24 5 18 2 -7 2 -21 0 -30z m108 26 c4 -6 -2 -13 -14 -16 -11 -3 -18\r\n                -9 -15 -14 3 -5 11 -6 17 -3 9 5 9 4 0 -6 -14 -15 -33 -5 -33 19 0 30 31 44\r\n                45 20z m188 -1 c-6 -7 -13 -20 -16 -28 -3 -9 -6 -3 -6 13 -1 19 4 27 15 27 12\r\n                0 14 -4 7 -12z m37 -3 c-6 -8 -9 -19 -5 -25 3 -5 1 -10 -4 -10 -12 0 -15 33\r\n                -4 43 13 14 25 7 13 -8z m68 -9 c5 -24 -10 -38 -31 -30 -17 6 -23 35 -10 48\r\n                12 12 38 1 41 -18z m47 9 c6 -1 16 4 24 9 12 9 13 7 8 -7 -4 -10 -7 -22 -7\r\n                -27 0 -4 -11 -7 -25 -7 -14 0 -25 3 -25 7 0 5 -3 16 -7 26 -5 13 -3 15 8 8 8\r\n                -5 19 -9 24 -9z m158 -15 c-4 -4 -19 -11 -33 -14 -21 -6 -23 -5 -8 6 15 11 15\r\n                13 0 25 -14 11 -11 11 16 2 19 -6 30 -15 25 -19z m67 19 l33 -12 -24 -13 c-13\r\n                -7 -31 -13 -39 -13 -9 0 -4 6 10 14 18 10 20 14 8 15 -9 0 -20 5 -23 10 -8 13\r\n                -5 13 35 -1z m-492 -16 c-10 -2 -26 -2 -35 0 -10 3 -2 5 17 5 19 0 27 -2 18\r\n                -5z m-499 -57 c-3 -3 -11 5 -18 17 -13 21 -12 21 5 5 10 -10 16 -20 13 -22z\r\n                m-67 -26 c3 -32 0 -40 -12 -38 -9 2 -15 14 -15 30 1 15 -3 24 -7 22 -10 -6\r\n                -11 10 -1 19 17 18 31 4 35 -33z m184 9 c-30 -24 -33 -45 -9 -71 24 -26 123\r\n                -26 147 1 23 25 13 56 -22 76 -15 8 -21 14 -14 15 17 0 62 -45 62 -62 0 -8 -7\r\n                -24 -16 -36 -13 -19 -24 -22 -84 -22 -60 0 -71 3 -84 22 -9 12 -16 30 -16 40\r\n                0 20 34 58 51 58 7 0 0 -9 -15 -21z m715 -15 c-26 -32 -26 -42 -3 -67 13 -16\r\n                14 -19 2 -15 -26 8 -35 53 -16 82 9 14 21 26 27 26 6 0 1 -12 -10 -26z m139\r\n                16 c10 -5 22 -24 25 -42 11 -47 -20 -68 -94 -67 l-56 2 55 6 c63 7 76 13 83\r\n                40 9 35 -19 60 -71 64 l-47 3 43 2 c24 1 52 -2 62 -8z m194 -1 c-2 -4 -22 -7\r\n                -44 -7 -22 -1 -38 3 -35 8 3 5 23 8 44 7 22 -1 37 -5 35 -8z m-477 -5 c-3 -3\r\n                -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-701 -32 c-17 -16 -18 -16 -5\r\n                5 7 12 15 20 18 17 3 -2 -3 -12 -13 -22z m1051 -24 c-2 -13 -4 -5 -4 17 -1 22\r\n                1 32 4 23 2 -10 2 -28 0 -40z m163 1 c0 -16 -4 -28 -8 -25 -5 3 -8 15 -6 28 3\r\n                28 3 28 9 28 3 0 5 -14 5 -31z m-1280 -28 c45 -4 53 -11 12 -11 -18 0 -32 -4\r\n                -32 -10 0 -5 16 -10 35 -10 24 0 35 5 35 15 0 8 5 15 10 15 6 0 10 -9 10 -19\r\n                0 -16 -9 -20 -58 -23 l-59 -3 -1 35 c-1 19 2 30 6 25 4 -6 23 -12 42 -14z\r\n                m480 -5 c-7 -7 -14 -6 -21 1 -9 9 -7 12 9 10 14 -1 18 -5 12 -11z m60 4 c0 -5\r\n                -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m47 -12 c2\r\n                -18 0 -20 -7 -8 -12 18 -13 30 -2 30 4 0 9 -10 9 -22z m63 12 c0 -5 -4 -10 -9\r\n                -10 -6 0 -13 5 -16 10 -3 6 1 10 9 10 9 0 16 -4 16 -10z m97 4 c-3 -3 -12 -4\r\n                -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-3 -22 c3 -5 -1 -9 -9 -9 -8 0 -12 4\r\n                -9 9 3 4 7 8 9 8 2 0 6 -4 9 -8z m383 -8 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6\r\n                11 1 17 -2 13 -5z m153 -14 c0 -13 -5 -18 -15 -14 -12 5 -15 -4 -15 -51 0 -53\r\n                -1 -55 -17 -40 -11 12 -29 16 -60 13 -44 -3 -48 1 -33 37 7 17 9 17 9 3 1 -14\r\n                10 -18 36 -18 21 0 35 -5 36 -12 1 -20 18 24 18 48 1 19 -4 22 -41 20 -24 0\r\n                -44 4 -44 9 -1 6 3 8 10 6 6 -2 16 -3 21 -2 6 0 27 2 48 3 20 2 37 6 37 10 0\r\n                5 2 8 5 8 3 0 5 -9 5 -20z m-163 -80 c-3 -66 -1 -80 12 -83 9 -3 -1 -5 -23 -6\r\n                -31 -1 -36 1 -27 13 6 7 9 22 5 32 -5 16 -4 16 5 4 12 -17 13 -14 11 63 -1 36\r\n                3 57 10 57 8 0 10 -25 7 -80z m-970 -17 c-2 -16 -4 -3 -4 27 0 30 2 43 4 28 2\r\n                -16 2 -40 0 -55z m1140 -35 c-2 -13 -4 -5 -4 17 -1 22 1 32 4 23 2 -10 2 -28\r\n                0 -40z m116 15 c-7 -2 -21 -2 -30 0 -10 3 -4 5 12 5 17 0 24 -2 18 -5z m-162\r\n                -46 c-10 -9 -11 -8 -5 6 3 10 9 15 12 12 3 -3 0 -11 -7 -18z m226 3 c1 -11 -2\r\n                -18 -8 -15 -11 7 -12 35 -1 35 4 0 8 -9 9 -20z m-184 -202 c-3 -112 -7 -205\r\n                -9 -207 -2 -3 -10 1 -17 8 -9 11 -9 14 1 18 9 4 12 50 12 187 0 157 3 196 16\r\n                196 1 0 0 -91 -3 -202z m-1302 184 c11 -5 13 -14 8 -32 l-6 -25 -12 25 -11 25\r\n                5 -28 c4 -19 2 -26 -5 -22 -11 7 -14 65 -2 64 4 0 14 -3 23 -7z m86 -39 c-3\r\n                -10 -5 -2 -5 17 0 19 2 27 5 18 2 -10 2 -26 0 -35z m-24 30 c-7 -2 -19 -2 -25\r\n                0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m104 -90 c-3 -10 -5 -4 -5 12 0 17 2 24 5\r\n                18 2 -7 2 -21 0 -30z m991 20 c-10 -2 -26 -2 -35 0 -10 3 -2 5 17 5 19 0 27\r\n                -2 18 -5z m289 -15 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z\r\n                m-1472 -21 c28 0 59 4 70 8 18 8 19 7 6 -8 -7 -9 -19 -17 -26 -17 -16 0 -50\r\n                -38 -42 -47 4 -3 7 -2 7 4 0 8 41 33 56 33 16 0 -13 -22 -58 -44 -62 -31 -78\r\n                -32 -78 -7 0 11 -4 23 -10 26 -5 3 -10 20 -10 37 0 25 3 29 18 23 9 -4 40 -7\r\n                67 -8z m1402 -9 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m53 6\r\n                c0 -8 -5 -12 -10 -9 -6 4 -8 11 -5 16 9 14 15 11 15 -7z m-277 -1 c-7 -2 -21\r\n                -2 -30 0 -10 3 -4 5 12 5 17 0 24 -2 18 -5z m294 -45 c-3 -7 -5 -2 -5 12 0 14\r\n                2 19 5 13 2 -7 2 -19 0 -25z m-287 14 c0 -4 -9 -8 -20 -9 -11 -1 -20 2 -20 5\r\n                0 4 9 8 20 9 11 1 20 -2 20 -5z m250 -32 c0 -5 -9 -10 -20 -10 -11 0 -20 5\r\n                -20 10 0 6 9 10 20 10 11 0 20 -4 20 -10z m-252 -7 c-10 -2 -26 -2 -35 0 -10\r\n                3 -2 5 17 5 19 0 27 -2 18 -5z m305 -47 c-3 -4 -9 -2 -14 5 -13 22 -11 31 5\r\n                17 8 -7 12 -17 9 -22z m-305 7 c-10 -2 -26 -2 -35 0 -10 3 -2 5 17 5 19 0 27\r\n                -2 18 -5z m-1111 -43 c2 -21 -11 -27 -22 -10 -7 11 2 30 13 30 4 0 8 -9 9 -20z\r\n                m1399 -86 c-3 -8 -18 -13 -33 -13 l-28 2 28 4 c26 4 27 7 29 61 l2 57 3 -49\r\n                c2 -27 2 -55 -1 -62z m-288 89 c-10 -2 -26 -2 -35 0 -10 3 -2 5 17 5 19 0 27\r\n                -2 18 -5z m-18 -33 c0 -5 -4 -10 -9 -10 -6 0 -13 5 -16 10 -3 6 1 10 9 10 9 0\r\n                16 -4 16 -10z m350 -14 c0 -2 -7 -7 -16 -10 -8 -3 -12 -2 -9 4 6 10 25 14 25\r\n                6z m-1436 -38 c-9 -31 -12 -34 -26 -20 -8 8 -8 15 2 27 19 22 32 18 24 -7z\r\n                m1099 15 c-7 -2 -21 -2 -30 0 -10 3 -4 5 12 5 17 0 24 -2 18 -5z m-16 -39 c-3\r\n                -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-1089 -49 c-11 -25 -28\r\n                -25 -28 0 0 12 13 22 32 24 4 1 3 -10 -4 -24z m1208 -12 c-2 -22 -9 -29 -30\r\n                -31 -29 -4 -66 21 -66 45 0 9 15 13 49 13 48 0 50 -1 47 -27z m-1084 -170 c8\r\n                -10 7 -12 -6 -7 -13 5 -16 20 -14 93 l2 86 3 -80 c2 -43 9 -85 15 -92z m-172\r\n                122 c-14 -17 -36 -20 -44 -6 -4 5 3 7 14 4 13 -3 22 1 26 11 4 9 9 15 12 12 3\r\n                -3 -1 -12 -8 -21z m1240 -17 c0 -18 -2 -20 -9 -8 -6 8 -7 18 -5 22 9 14 14 9\r\n                14 -14z m-1197 -21 c-3 -5 -10 -4 -15 1 -6 6 -7 16 -3 22 6 9 9 9 16 -1 4 -7\r\n                5 -17 2 -22z m165 21 c-23 -19 -13 -74 16 -82 93 -25 168 22 119 76 -20 22\r\n                -11 24 11 2 23 -23 20 -61 -6 -78 -26 -16 -131 -29 -122 -15 3 5 -4 9 -16 9\r\n                -30 0 -45 45 -25 76 8 13 21 24 27 24 7 0 5 -5 -4 -12z m747 5 c-27 -7 -55\r\n                -33 -55 -51 0 -9 7 -24 17 -34 20 -22 11 -24 -11 -2 -34 34 -6 95 43 93 21 -1\r\n                22 -2 6 -6z m120 -27 c19 -34 19 -36 0 -55 -10 -12 -23 -21 -28 -21 -6 0 -3 6\r\n                7 13 26 19 18 68 -14 84 -23 12 -23 13 -4 13 14 0 27 -12 39 -34z m143 -13\r\n                c-10 -2 -26 -2 -35 0 -10 3 -2 5 17 5 19 0 27 -2 18 -5z m72 -24 c0 -16 -4\r\n                -28 -9 -25 -8 5 -3 56 5 56 2 0 4 -14 4 -31z m-1020 11 c-20 -13 -50 -13 -50\r\n                0 0 6 15 10 33 10 24 0 28 -3 17 -10z m-319 -31 c11 -5 17 -14 14 -20 -4 -5\r\n                -1 -9 5 -9 22 0 5 -21 -37 -46 l-42 -25 1 35 c1 19 5 33 10 30 4 -3 8 6 8 20\r\n                0 28 10 32 41 15z m61 -21 c-9 -9 -15 -9 -24 1 -11 10 -10 11 5 5 14 -5 16 -2\r\n                11 12 -6 16 -5 17 7 7 10 -10 10 -16 1 -25z m953 -8 c3 -6 -4 -10 -17 -10 -18\r\n                0 -20 2 -8 10 19 12 18 12 25 0z m42 4 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11\r\n                1 17 -2 13 -5z m-972 -24 c14 -5 24 -14 20 -20 -7 -11 -55 8 -55 22 0 10 3 10\r\n                35 -2z m170 -20 c17 -7 14 -9 -13 -9 -20 -1 -31 3 -27 9 7 12 13 12 40 0z\r\n                m258 -19 c-4 -15 3 -14 22 5 14 15 16 10 14 -55 -2 -66 -10 -88 -22 -58 -4 9\r\n                -8 8 -17 -3 -10 -13 -11 -13 -6 3 3 9 1 17 -4 17 -6 0 -10 25 -10 56 0 40 3\r\n                54 13 51 6 -2 11 -10 10 -16z m520 8 c12 -7 25 -17 29 -23 12 -18 8 -60 -7\r\n                -80 -23 -30 -43 -5 -47 59 -1 30 -2 55 0 55 2 0 13 -5 25 -11z m122 1 c3 -5 1\r\n                -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m-531 -22 c-5\r\n                -8 -2 -9 12 -3 10 4 28 7 39 7 11 -1 29 -2 40 -2 18 -1 19 -2 3 -14 -9 -7 -32\r\n                -11 -50 -10 -18 1 -43 3 -55 3 -29 1 -31 31 -2 31 13 0 18 -4 13 -12z m130 -3\r\n                c3 -8 1 -15 -4 -15 -6 0 -10 7 -10 15 0 8 2 15 4 15 2 0 6 -7 10 -15z m56 -2\r\n                c0 -7 -7 -13 -15 -13 -8 0 -15 6 -15 13 0 8 7 14 15 14 8 0 15 -6 15 -14z\r\n                m105 8 c31 12 35 11 35 -11 0 -21 -16 -28 -22 -9 -3 9 -9 9 -25 0 -27 -14 -46\r\n                -14 -38 -1 3 6 2 10 -4 10 -5 0 -13 -5 -16 -10 -4 -6 -11 -7 -17 -4 -19 12 21\r\n                34 46 25 11 -5 30 -5 41 0z m-645 -23 c0 -6 -7 -7 -16 -4 -9 3 -20 6 -25 6 -5\r\n                0 -9 4 -9 9 0 4 11 6 25 3 14 -2 25 -9 25 -14z m150 8 c0 -3 -4 -8 -10 -11 -5\r\n                -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m710 -6 c0 -5 -4 -10 -10\r\n                -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m30 -4 c0 -3 -4 -8\r\n                -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m-1152 -18 c-5\r\n                -15 -33 -22 -54 -14 -24 9 -6 26 27 26 20 0 29 -4 27 -12z m232 -12 c0 -3 -4\r\n                -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m210 0 c0 -3\r\n                -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m210 -15\r\n                c0 -5 -9 -7 -20 -4 -11 3 -20 7 -20 9 0 2 9 4 20 4 11 0 20 -4 20 -9z m70 -8\r\n                c0 -14 -2 -15 -9 -4 -5 7 -14 10 -20 7 -6 -4 -11 -2 -11 3 0 6 9 11 20 11 12\r\n                0 20 -7 20 -17z m140 7 c0 -5 -6 -10 -14 -10 -8 0 -18 5 -21 10 -3 6 3 10 14\r\n                10 12 0 21 -4 21 -10z m68 -10 c4 -13 3 -13 -10 -2 -13 10 -17 10 -21 0 -2 -7\r\n                -8 -10 -12 -6 -11 10 5 29 23 26 8 -2 18 -10 20 -18z m217 10 c3 -5 1 -10 -4\r\n                -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m-900 -30 c16 -7 14 -9\r\n                -12 -7 -17 0 -29 5 -27 9 6 10 13 9 39 -2z m1085 -10 c0 -5 -4 -10 -10 -10 -5\r\n                0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m-1215 -30 c0 -8 6 -19 14\r\n                -24 11 -7 11 -10 0 -17 -23 -14 -30 -10 -25 16 5 26 -9 44 -17 23 -2 -7 -8\r\n                -10 -12 -6 -11 11 5 29 23 26 10 -2 17 -10 17 -18z m245 3 c0 -5 -23 -9 -50\r\n                -10 -28 -1 -50 3 -50 8 0 5 23 9 50 9 28 0 50 -3 50 -7z m180 -1 c0 -5 -10\r\n                -14 -22 -21 l-23 -11 23 6 c20 5 22 2 22 -40 0 -30 -4 -46 -12 -46 -9 0 -8 -4\r\n                2 -10 21 -13 6 -12 -25 2 -21 9 -25 18 -25 52 0 48 7 62 35 69 11 2 21 5 23 6\r\n                1 0 2 -3 2 -7z m703 -9 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z\r\n                m-1010 -27 c12 4 17 1 17 -10 0 -11 9 -16 29 -16 17 0 32 -3 35 -8 2 -4 -21\r\n                -7 -52 -6 -32 1 -61 -4 -65 -10 -6 -7 -7 -6 -4 4 2 8 11 15 20 15 8 0 19 4 23\r\n                8 4 4 -2 7 -14 7 -14 0 -22 6 -22 18 0 12 2 14 8 4 5 -7 16 -10 25 -6z m217 1\r\n                c0 -8 -14 -14 -35 -15 -19 -2 -35 1 -35 6 0 5 11 8 25 7 14 -2 27 1 31 6 8 13\r\n                14 11 14 -4z m-150 -7 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2\r\n                0 4 -4 4 -10z m50 1 c0 -10 -26 -9 -36 2 -4 4 2 7 14 7 12 0 22 -4 22 -9z\r\n                m674 -12 c-3 -5 -1 -9 5 -9 5 0 12 8 14 18 3 9 5 -5 6 -31 1 -30 -3 -46 -9\r\n                -42 -6 4 -8 11 -5 16 4 5 3 14 -1 21 -5 7 -12 -3 -20 -28 l-12 -39 -1 57 c-1\r\n                47 2 56 14 52 8 -4 12 -10 9 -15z m103 -11 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13\r\n                3 -3 4 -12 1 -19z m179 9 c4 -4 -5 -7 -19 -7 -15 0 -27 4 -27 8 0 10 36 9 46\r\n                -1z m21 -9 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m-947 -2 c0\r\n                -2 -9 -6 -20 -9 -11 -3 -18 -1 -14 4 5 9 34 13 34 5z m-259 -25 c-8 -5 -11\r\n                -16 -8 -26 4 -9 3 -14 -3 -10 -17 11 -11 45 8 45 14 0 14 -2 3 -9z m-130 -36\r\n                c0 -5 -7 -12 -16 -13 -23 -5 -47 6 -40 19 8 13 56 8 56 -6z\" />\r\n                    <path d=\"M1530 2079 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10\r\n                -5 -10 -11z\" />\r\n                    <path d=\"M1675 2080 c-4 -6 -3 -16 3 -22 6 -6 12 -6 17 2 4 6 3 16 -3 22 -6 6\r\n                -12 6 -17 -2z\" />\r\n                    <path d=\"M850 1560 c-8 -5 -12 -12 -9 -15 4 -3 12 1 19 10 14 17 11 19 -10 5z\" />\r\n                    <path d=\"M820 1506 c0 -9 5 -16 10 -16 6 0 10 4 10 9 0 6 -4 13 -10 16 -5 3\r\n                -10 -1 -10 -9z\" />\r\n                    <path d=\"M1870 1010 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0\r\n                -4 -4 -4 -10z\" />\r\n                    <path d=\"M1274 2479 c-3 -5 26 -9 65 -9 39 0 71 3 71 8 0 10 -129 12 -136 1z\" />\r\n                    <path d=\"M1640 2480 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0\r\n                -4 -4 -4 -10z\" />\r\n                    <path d=\"M2020 2422 c0 -29 4 -52 10 -52 10 0 7 87 -4 97 -3 4 -6 -17 -6 -45z\" />\r\n                    <path d=\"M1301 2408 c-1 -33 3 -58 9 -58 12 0 12 67 0 95 -6 14 -9 4 -9 -37z\" />\r\n                    <path d=\"M1375 2404 c0 -30 3 -54 8 -54 4 0 7 22 7 49 0 28 -3 52 -7 54 -5 3\r\n                -8 -19 -8 -49z\" />\r\n                    <path d=\"M1663 2410 c0 -30 2 -43 4 -27 2 15 2 39 0 55 -2 15 -4 2 -4 -28z\" />\r\n                    <path d=\"M430 1405 c0 -45 0 -45 35 -45 35 0 35 0 35 45 0 45 0 45 -35 45 -35\r\n                0 -35 0 -35 -45z\" />\r\n                    <path d=\"M635 1341 c-3 -5 -1 -12 5 -16 5 -3 10 1 10 9 0 18 -6 21 -15 7z\" />\r\n                    <path d=\"M595 1330 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0\r\n                -8 -4 -11 -10z\" />\r\n                    <path d=\"M670 1289 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10\r\n                -5 -10 -11z\" />\r\n                    <path d=\"M565 1280 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0\r\n                -8 -4 -11 -10z\" />\r\n                    <path d=\"M590 1266 c0 -2 7 -7 16 -10 8 -3 12 -2 9 4 -6 10 -25 14 -25 6z\" />\r\n                    <path d=\"M576 1251 c5 -10 3 -13 -9 -8 -11 4 -14 2 -11 -7 3 -8 1 -17 -5 -21\r\n                -6 -3 -11 -15 -11 -26 0 -10 -4 -19 -9 -19 -5 0 -12 -13 -16 -30 l-6 -29 -127\r\n                -4 c-70 -1 -33 -3 83 -3 120 0 184 2 150 6 l-60 7 55 1 c37 2 50 5 41 11 -8 5\r\n                -19 7 -26 5 -6 -3 -20 4 -30 16 -14 15 -21 17 -32 9 -25 -21 -13 2 14 27 15\r\n                14 28 32 29 40 1 9 0 13 -3 10 -3 -3 -12 2 -20 12 -8 9 -11 11 -7 3z\" />\r\n                    <path d=\"M437 1243 c-5 -8 -10 -58 -8 -80 1 -8 15 -13 36 -13 l35 0 0 50 c0\r\n                49 -1 50 -29 50 -17 0 -32 -3 -34 -7z\" />\r\n                    <path d=\"M680 1103 c0 -5 11 -9 25 -9 14 -1 22 2 19 7 -6 11 -44 12 -44 2z\" />\r\n                    <path d=\"M788 892 c-3 -10 1 -23 8 -30 19 -18 21 -15 16 18 -5 33 -17 40 -24\r\n                12z\" />\r\n                    <path d=\"M1501 783 c0 -16 3 -22 6 -13 3 8 10 21 16 28 7 8 5 12 -7 12 -11 0\r\n                -16 -8 -15 -27z\" />\r\n                    <path d=\"M1714 788 c3 -13 6 -29 6 -35 0 -7 5 -13 10 -13 6 0 10 16 10 35 0\r\n                26 -4 35 -16 35 -12 0 -15 -6 -10 -22z\" />\r\n                    <path d=\"M1452 770 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z\" />\r\n                    <path d=\"M1650 760 c0 -11 7 -20 15 -20 8 0 15 9 15 20 0 11 -7 20 -15 20 -8\r\n                0 -15 -9 -15 -20z\" />\r\n                </g>\r\n                <text id=\"status-text\" x=\"112\" y=\"154\" fill=\"#f00\" font-size=\"2em\">Offline</text>\r\n            </svg>\r\n        </div>\r\n        <li *ngIf=\"isNotMobileMenu()\">\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                    <i class=\"ti-panel\"></i>\r\n\t\t\t\t\t<p>Stats</p>\r\n                </a>\r\n        </li>\r\n        <li class=\"dropdown\" *ngIf=\"isNotMobileMenu()\">\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"ti-bell\"></i>\r\n                        <p class=\"notification\">5</p>\r\n    \t\t\t\t\t<p>Notifications</p>\r\n    \t\t\t\t\t<b class=\"caret\"></b>\r\n                  </a>\r\n            <ul class=\"dropdown-menu\">\r\n                <li><a href=\"#\">Notification 1</a></li>\r\n                <li><a href=\"#\">Notification 2</a></li>\r\n                <li><a href=\"#\">Notification 3</a></li>\r\n                <li><a href=\"#\">Notification 4</a></li>\r\n                <li><a href=\"#\">Another notification</a></li>\r\n            </ul>\r\n        </li>\r\n        <li *ngIf=\"isNotMobileMenu()\">\r\n            <a href=\"#\">\r\n\t\t\t\t\t<i class=\"ti-settings\"></i>\r\n\t\t\t\t\t<p>Settings</p>\r\n                </a>\r\n        </li>\r\n        <li class=\"divider\" *ngIf=\"isNotMobileMenu()\"></li>\r\n        <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\" class=\"{{menuItem.class}}\">\r\n            <a [routerLink]=\"[menuItem.path]\">\r\n                <i class=\"{{menuItem.icon}}\"></i>\r\n                <p>{{menuItem.title}}</p>\r\n            </a>\r\n        </li>\r\n        \r\n    </ul>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ROUTES = [
    { path: 'blockly', title: 'Blockly', icon: 'ti-thought', class: '' },
    { path: 'dashboard', title: 'Dashboard', icon: 'ti-panel', class: '' },
    { path: 'user', title: 'User Profile', icon: 'ti-user', class: '' },
    { path: 'table', title: 'Table List', icon: 'ti-view-list-alt', class: '' },
    { path: 'typography', title: 'Typography', icon: 'ti-text', class: '' },
    { path: 'icons', title: 'Icons', icon: 'ti-pencil-alt2', class: '' },
    { path: 'maps', title: 'Maps', icon: 'ti-map', class: '' },
    { path: 'notifications', title: 'Notifications', icon: 'ti-bell', class: '' },
];
var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isNotMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Component */])({
        selector: 'sidebar-cmp',
        template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html"),
    })
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SidebarModule = (function () {
    function SidebarModule() {
    }
    return SidebarModule;
}());
SidebarModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["b" /* SidebarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["b" /* SidebarComponent */]]
    })
], SidebarModule);

//# sourceMappingURL=sidebar.module.js.map

/***/ }),

/***/ "../../../../../src/app/table/table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"header\">\r\n                    <h4 class=\"title\">Striped Table</h4>\r\n                    <p class=\"category\">Here is a subtitle for this table</p>\r\n                </div>\r\n                <div class=\"content table-responsive table-full-width\">\r\n                    <table class=\"table table-striped\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th *ngFor=\"let cell of tableData1.headerRow\">{{ cell }}</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let row of tableData1.dataRows\">\r\n                                <td *ngFor=\"let cell of row\">{{cell}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card card-plain\">\r\n                <div class=\"header\">\r\n                    <h4 class=\"title\">Table on Plain Background</h4>\r\n                    <p class=\"category\">Here is a subtitle for this table</p>\r\n                </div>\r\n                <div class=\"content table-responsive table-full-width\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th *ngFor=\"let cell of tableData2.headerRow\">{{ cell }}</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let row of tableData2.dataRows\">\r\n                                <td *ngFor=\"let cell of row\">{{cell}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/table/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TableComponent = (function () {
    function TableComponent() {
    }
    TableComponent.prototype.ngOnInit = function () {
        this.tableData1 = {
            headerRow: ['ID', 'Name', 'Country', 'City', 'Salary'],
            dataRows: [
                ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
                ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
                ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
                ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
                ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
                ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
            ]
        };
        this.tableData2 = {
            headerRow: ['ID', 'Name', 'Salary', 'Country', 'City'],
            dataRows: [
                ['1', 'Dakota Rice', '$36,738', 'Niger', 'Oud-Turnhout'],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux'],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park'],
                ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten',],
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester']
            ]
        };
    };
    return TableComponent;
}());
TableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Component */])({
        selector: 'table-cmp',
        template: __webpack_require__("../../../../../src/app/table/table.component.html")
    })
], TableComponent);

//# sourceMappingURL=table.component.js.map

/***/ }),

/***/ "../../../../../src/app/typography/typography.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"header\">\r\n                        <h4 class=\"title\">Paper Dashboard Headings</h4>\r\n                        <p class=\"category\">Created using <a href=\"https://www.google.com/fonts/specimen/Muli\">Muli</a> Font Family</p>\r\n                    </div>\r\n                    <div class=\"content\">\r\n\r\n                        <div class=\"typo-line\">\r\n                            <h1><p class=\"category\">Header 1</p>Paper Dashboard Heading </h1>\r\n                        </div>\r\n\r\n                            <div class=\"typo-line\">\r\n                            <h2><p class=\"category\">Header 2</p>Paper Dashboard Heading </h2>\r\n                        </div>\r\n                        <div class=\"typo-line\">\r\n                            <h3><p class=\"category\">Header 3</p>Paper Dashboard Heading </h3>\r\n                        </div>\r\n                        <div class=\"typo-line\">\r\n                            <h4><p class=\"category\">Header 4</p>Paper Dashboard Heading </h4>\r\n                        </div>\r\n                        <div class=\"typo-line\">\r\n                            <h5><p class=\"category\">Header 5</p>Paper Dashboard Heading </h5>\r\n                        </div>\r\n                         <div class=\"typo-line\">\r\n                            <h6><p class=\"category\">Header 6</p>Paper Dashboard Heading </h6>\r\n                        </div>\r\n                        <div class=\"typo-line\">\r\n                            <p><span class=\"category\">Paragraph</span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>\r\n                        </div>\r\n                        <div class=\"typo-line\">\r\n                            <p class=\"category\">Quote</p>\r\n                            <blockquote>\r\n                             <p>\r\n                             Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.\r\n                             </p>\r\n                             <small>\r\n                             Steve Jobs, CEO Apple\r\n                             </small>\r\n                            </blockquote>\r\n                        </div>\r\n\r\n                        <div class=\"typo-line\">\r\n                            <p class=\"category\">Muted Text</p>\r\n                            <p class=\"text-muted\">\r\n                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.\r\n                            </p>\r\n                        </div>\r\n                        <div class=\"typo-line\">\r\n                            <!--\r\n                             there are also \"text-info\", \"text-success\", \"text-warning\", \"text-danger\" clases for the text\r\n                             -->\r\n                            <p class=\"category\">Coloured Text</p>\r\n                            <p class=\"text-primary\">\r\n                                Text Primary - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\r\n                            </p>\r\n                            <p class=\"text-info\">\r\n                                Text Info - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\r\n                            </p>\r\n                            <p class=\"text-success\">\r\n                                Text Success - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\r\n                            </p>\r\n                            <p class=\"text-warning\">\r\n                                Text Warning - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\r\n                            </p>\r\n                            <p class=\"text-danger\">\r\n                                Text Danger - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\r\n                            </p>\r\n                        </div>\r\n\r\n                        <div class=\"typo-line\">\r\n                            <h2><p class=\"category\">Small Tag</p>Header with small subtitle <br><small>\".small\" is a tag for the headers</small> </h2>\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/typography/typography.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypographyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TypographyComponent = (function () {
    function TypographyComponent() {
    }
    return TypographyComponent;
}());
TypographyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Component */])({
        selector: 'typography-cmp',
        template: __webpack_require__("../../../../../src/app/typography/typography.component.html")
    })
], TypographyComponent);

//# sourceMappingURL=typography.component.js.map

/***/ }),

/***/ "../../../../../src/app/upgrade/upgrade.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8 col-md-offset-2\">\r\n                <div class=\"card\">\r\n                    <div class=\"header text-center\">\r\n                        <h3 class=\"title\">Paper Dashboard</h3>\r\n                        <p class=\"category\">Are you looking for more components? Please check our Premium Version of Paper Dashboard Pro.</p>\r\n                        <br>\r\n                    </div>\r\n                    <div class=\"content table-responsive table-full-width table-upgrade\">\r\n                        <table class=\"table\">\r\n                            <thead>\r\n                                <th></th>\r\n                                <th class=\"text-center\">Free</th>\r\n                                <th class=\"text-center\">PRO</th>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>Components</td>\r\n                                    <td>16</td>\r\n                                    <td>160</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Plugins</td>\r\n                                    <td>4</td>\r\n                                    <td>15</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Example Pages</td>\r\n                                    <td>4</td>\r\n                                    <td>25</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Documentation</td>\r\n                                    <td><i class=\"fa fa-times text-danger\"></i></td>\r\n                                    <td><i class=\"fa fa-check text-success\"></i></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>SASS Files</td>\r\n                                    <td><i class=\"fa fa-check text-success\"></i></td>\r\n                                    <td><i class=\"fa fa-check text-success\"></i></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Login/Register/Lock Pages</td>\r\n                                    <td><i class=\"fa fa-times text-danger\"></i></td>\r\n                                    <td><i class=\"fa fa-check text-success\"></i></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Premium Support</td>\r\n                                    <td><i class=\"fa fa-times text-danger\"></i></td>\r\n                                    <td><i class=\"fa fa-check text-success\"></i></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td></td>\r\n                                    <td>Free</td>\r\n                                    <td>Just $49</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td></td>\r\n                                    <td>\r\n                                        <a href=\"#\" class=\"btn btn-round btn-fill btn-default disabled\">Current Version</a>\r\n                                    </td>\r\n                                    <td>\r\n                                        <a target=\"_blank\" href=\"https://www.creative-tim.com/product/paper-dashboard-pro-angular/?ref=pd-free-upgrade-live\" class=\"btn btn-round btn-fill btn-info\">Upgrade to PRO</a>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/upgrade/upgrade.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpgradeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UpgradeComponent = (function () {
    function UpgradeComponent() {
    }
    UpgradeComponent.prototype.ngOnInit = function () {
    };
    return UpgradeComponent;
}());
UpgradeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Component */])({
        selector: 'upgrade-cmp',
        template: __webpack_require__("../../../../../src/app/upgrade/upgrade.component.html")
    })
], UpgradeComponent);

//# sourceMappingURL=upgrade.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-5\">\r\n                <div class=\"card card-user\">\r\n                    <div class=\"image\">\r\n                        <img src=\"assets/img/background.jpg\" alt=\"...\"/>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <div class=\"author\">\r\n                          <img class=\"avatar border-white\" src=\"assets/img/faces/face-2.jpg\" alt=\"...\"/>\r\n                          <h4 class=\"title\">Chet Faker<br />\r\n                             <a href=\"#\"><small>@chetfaker</small></a>\r\n                          </h4>\r\n                        </div>\r\n                        <p class=\"description text-center\">\r\n                            \"I like the way you work it <br>\r\n                            No diggity <br>\r\n                            I wanna bag it up\"\r\n                        </p>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"text-center\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-3 col-md-offset-1\">\r\n                                <h5>12<br /><small>Files</small></h5>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <h5>2GB<br /><small>Used</small></h5>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <h5>24,6$<br /><small>Spent</small></h5>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                    <div class=\"header\">\r\n                        <h4 class=\"title\">Team Members</h4>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <ul class=\"list-unstyled team-members\">\r\n                                    <li>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-3\">\r\n                                                <div class=\"avatar\">\r\n                                                    <img src=\"assets/img/faces/face-0.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                DJ Khaled\r\n                                                <br />\r\n                                                <span class=\"text-muted\"><small>Offline</small></span>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-xs-3 text-right\">\r\n                                                <button class=\"btn btn-sm btn-success btn-icon\"><i class=\"fa fa-envelope\"></i></button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </li>\r\n                                    <li>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-3\">\r\n                                                <div class=\"avatar\">\r\n                                                    <img src=\"assets/img/faces/face-1.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                Creative Tim\r\n                                                <br />\r\n                                                <span class=\"text-success\"><small>Available</small></span>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-xs-3 text-right\">\r\n                                                <button class=\"btn btn-sm btn-success btn-icon\"><i class=\"fa fa-envelope\"></i></button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </li>\r\n                                    <li>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-3\">\r\n                                                <div class=\"avatar\">\r\n                                                    <img src=\"assets/img/faces/face-3.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                Flume\r\n                                                <br />\r\n                                                <span class=\"text-danger\"><small>Busy</small></span>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-xs-3 text-right\">\r\n                                                <button class=\"btn btn-sm btn-success btn-icon\"><i class=\"fa fa-envelope\"></i></button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </li>\r\n                                </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-8 col-md-7\">\r\n                <div class=\"card\">\r\n                    <div class=\"header\">\r\n                        <h4 class=\"title\">Edit Profile</h4>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <form>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-5\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Company</label>\r\n                                        <input type=\"text\" class=\"form-control border-input\" disabled placeholder=\"Company\" value=\"Creative Code Inc.\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-3\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Username</label>\r\n                                        <input type=\"text\" class=\"form-control border-input\" placeholder=\"Username\" value=\"michael23\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"exampleInputEmail1\">Email address</label>\r\n                                        <input type=\"email\" class=\"form-control border-input\" placeholder=\"Email\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>First Name</label>\r\n                                        <input type=\"text\" class=\"form-control border-input\" placeholder=\"Company\" value=\"Chet\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Last Name</label>\r\n                                        <input type=\"text\" class=\"form-control border-input\" placeholder=\"Last Name\" value=\"Faker\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Address</label>\r\n                                        <input type=\"text\" class=\"form-control border-input\" placeholder=\"Home Address\" value=\"Melbourne, Australia\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>City</label>\r\n                                        <input type=\"text\" class=\"form-control border-input\" placeholder=\"City\" value=\"Melbourne\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Country</label>\r\n                                        <input type=\"text\" class=\"form-control border-input\" placeholder=\"Country\" value=\"Australia\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Postal Code</label>\r\n                                        <input type=\"number\" class=\"form-control border-input\" placeholder=\"ZIP Code\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>About Me</label>\r\n                                        <textarea rows=\"5\" class=\"form-control border-input\" placeholder=\"Here can be your description\" value=\"Mike\">\r\nOh so, your weak rhyme\r\nYou doubt I'll bother, reading into it\r\nI'll probably won't, left to my own devices\r\nBut that's the difference in our opinions.</textarea>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"text-center\">\r\n                                <button type=\"submit\" class=\"btn btn-info btn-fill btn-wd\">Update Profile</button>\r\n                            </div>\r\n                            <div class=\"clearfix\"></div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserComponent = (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Component */])({
        selector: 'user-cmp',
        template: __webpack_require__("../../../../../src/app/user/user.component.html")
    })
], UserComponent);

//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map