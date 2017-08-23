import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { HeroService } from '../services/hero.service';

import { Hero } from '../model/hero';

@Component({
    selector: 'heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css'],
    providers: [ HeroService ]
})
export class HeroesComponent implements OnInit {

    constructor(
      private heroService: HeroService,
      private router: Router
    ) {};

    ngOnInit(): void {
        this.getHeroes();
    }

    public heroes: Hero[];
  
    getHeroes(): void {
       this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
  
    public selectedHero: Hero;
  
    newHeroForm: Boolean = false;
    newHero: Hero = {
      id: 0,
      name: ''
    };
  
    onSelect(hero: Hero): void {
      this.selectedHero = hero;
    };

    gotoDetail(): void {
      this.router.navigate(['/detail', this.selectedHero.id]);
    };
  
    addHeroe(newHero: Hero): void {
      if (this.newHero.name) {  
        this.heroes.push(this.newHero)
      }
    }
  
    removeHero(hero: Hero): void {
      this.heroes.splice(this.heroes.indexOf(hero), 1);
    }
  
    add(): void {
      this.newHero.id = this.heroes[this.heroes.length - 1].id;
      this.newHero.id++;
      this.newHeroForm = true;
    };
  
    cancelAdd(): void {
      this.newHeroForm = false;
    }
  
    saveAdd(newHero: Hero): void {
      this.addHeroe(newHero);
    }
}