import { Component } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
/* import { HEROES } from '../mock-heroes'; */
import {NgFor, NgIf, UpperCasePipe,} from '@angular/common';
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
    standalone: true,
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrl: './heroes.component.css',
    imports: [FormsModule, NgIf, NgFor, UpperCasePipe, HeroDetailComponent]
})
export class HeroesComponent {

  heroes : Hero[] = [];
  selectedHero?:Hero;

  constructor(private heroService: HeroService,private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes():void{
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes)
  }

 onSelected(hero: Hero): void {

  this.messageService.add(`You Selected ${ hero.name } with Id:${ hero.id }`) 
  this.selectedHero = hero;

  }

};

