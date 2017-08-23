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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var hero_service_1 = require("../services/hero.service");
var HeroesComponent = (function () {
    function HeroesComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        this.newHeroForm = false;
        this.newHero = {
            id: 0,
            name: ''
        };
    }
    ;
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    ;
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    ;
    HeroesComponent.prototype.addHeroe = function (newHero) {
        if (this.newHero.name) {
            this.heroes.push(this.newHero);
        }
    };
    HeroesComponent.prototype.removeHero = function (hero) {
        this.heroes.splice(this.heroes.indexOf(hero), 1);
    };
    HeroesComponent.prototype.add = function () {
        this.newHero.id = this.heroes[this.heroes.length - 1].id;
        this.newHero.id++;
        this.newHeroForm = true;
    };
    ;
    HeroesComponent.prototype.cancelAdd = function () {
        this.newHeroForm = false;
    };
    HeroesComponent.prototype.saveAdd = function (newHero) {
        this.addHeroe(newHero);
    };
    HeroesComponent = __decorate([
        core_1.Component({
            selector: 'heroes',
            templateUrl: './heroes.component.html',
            styleUrls: ['./heroes.component.css'],
            providers: [hero_service_1.HeroService]
        }),
        __metadata("design:paramtypes", [hero_service_1.HeroService,
            router_1.Router])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map