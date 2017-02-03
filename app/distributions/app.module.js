"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var first_1 = require("./first/first");
var container_1 = require("./container/container");
var service_1 = require("./first/service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            http_1.HttpModule,
            forms_1.FormsModule,
            platform_browser_1.BrowserModule, router_1.RouterModule.forRoot([
                { path: '', component: first_1.firstComponent },
                { path: 'first', component: first_1.firstComponent },
            ])
        ],
        declarations: [container_1.containerComponent, first_1.firstComponent],
        providers: [service_1.itemService],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
        bootstrap: [container_1.containerComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map