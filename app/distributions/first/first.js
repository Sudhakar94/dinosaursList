"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_1 = require("@angular/router");
var service_1 = require("./service");
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var firstComponent = (function () {
    function firstComponent(ItemService, router) {
        this.dynName1 = [];
        this.dynName2 = [];
        this.router = router;
        this.ItemService = ItemService;
    }
    //Function for onload
    firstComponent.prototype.ngOnInit = function () { this.getList(); };
    //Function for foundation
    firstComponent.prototype.ngAfterViewInit = function () { $(document).foundation(); };
    //Function for fetching JSON
    firstComponent.prototype.getList = function () {
        var _this = this;
        this.ItemService.getList().subscribe(function (data) {
            _this.allDyno = data;
            Object.entries(data[0]).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                _this.dynName1.push(key);
            });
        }, function (err) { return console.error(err); }, function () { return console.log('done loading allDyno'); });
    };
    //Function for prevoius page
    firstComponent.prototype.backMov = function () {
        var myButtonClasses = document.getElementById("toggDiv").classList;
        if (myButtonClasses.contains("showDiv")) {
            myButtonClasses.remove("showDiv");
        }
        else {
            myButtonClasses.add("closeDiv");
        }
        var myClasses = document.getElementById("goingHide").classList;
        if (myClasses.contains("closeDiv")) {
            myClasses.remove("closeDiv");
        }
        else {
            myClasses.add("showDiv");
        }
    };
    //Function for Desktop and Tab 
    firstComponent.prototype.getValues = function (listName1) {
        var _this = this;
        var getDynName = listName1.innerText;
        this.dynName2 = [];
        var getDyno = this.allDyno;
        Object.entries(getDyno[0]).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            if (getDynName == key) {
                _this.dynName2.push(value);
            }
        });
    };
    //Function for mobile
    firstComponent.prototype.getValuesSmal = function (listName2) {
        var _this = this;
        var myButtonClasses = document.getElementById("toggDiv").classList;
        if (myButtonClasses.contains("closeDiv")) {
            myButtonClasses.remove("closeDiv");
        }
        else {
            myButtonClasses.add("showDiv");
        }
        var myClasses = document.getElementById("goingHide").classList;
        if (myClasses.contains("showDiv")) {
            myClasses.remove("showDiv");
        }
        else {
            myClasses.add("closeDiv");
        }
        var getDynName = listName2.innerText;
        this.dynName2 = [];
        var getDyno = this.allDyno;
        Object.entries(getDyno[0]).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            if (getDynName == key) {
                _this.dynName2.push(value);
            }
        });
    };
    return firstComponent;
}());
firstComponent = __decorate([
    core_1.Component({
        selector: 'first',
        templateUrl: './app/first/first.html',
        styleUrls: ['./app/first/style.css'],
        providers: [service_1.itemService]
    }),
    __metadata("design:paramtypes", [service_1.itemService, router_1.Router])
], firstComponent);
exports.firstComponent = firstComponent;
//# sourceMappingURL=first.js.map