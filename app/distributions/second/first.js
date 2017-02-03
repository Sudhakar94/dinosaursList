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
        this.mode = 'Observable';
        this.currentProd = [];
        this.dummyName = [];
        this.overDummy = [];
        this.router = router;
        this.ItemService = ItemService;
    }
    firstComponent.prototype.ngOnInit = function () {
        this.getFoods();
    };
    firstComponent.prototype.getFoods = function () {
        var _this = this;
        this.ItemService.getFoods().subscribe(function (data) {
            _this.foods = data;
            console.log(data[0]);
            Object.entries(data[0]).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                _this.dummyName.push(key);
                console.log(key);
                console.log(value);
            });
        }, function (err) { return console.error(err); }, function () { return console.log('done loading foods'); });
    };
    firstComponent.prototype.ngAfterViewInit = function () {
        $(document).foundation();
    };
    firstComponent.prototype.getValues = function (mp) {
        var _this = this;
        var oookkk = mp.innerText;
        this.overDummy = [];
        console.log(oookkk);
        console.log(this.foods);
        var moas = this.foods;
        Object.entries(moas[0]).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            if (oookkk == key) {
                console.log(key);
                _this.overDummy.push(value);
            }
            console.log(value);
        });
        console.log(this.overDummy);
        var div1 = document.getElementsByClassName("list");
        document.getElementsByClassName("details").
        ;
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
    __metadata("design:paramtypes", [typeof (_a = typeof service_1.itemService !== "undefined" && service_1.itemService) === "function" && _a || Object, router_1.Router])
], firstComponent);
exports.firstComponent = firstComponent;
var _a;
//# sourceMappingURL=first.js.map