import { Component, OnInit } from '@angular/core';
import { Location }          from '@angular/common';

import { HeroService } from '../services/hero.service';

import { Hero } from '../model/hero';

@Component({
    selector: 'dashboard',  
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ],
    providers: [ HeroService ]
})
export class DashboardComponent {
    
    constructor(
        private heroService: HeroService,
        private location: Location
    ) {};
    
    title: string = 'Top Heroes';
    heroes: Hero[];

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(0, 4));
    }
}