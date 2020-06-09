import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from './../hero.service';
import { MessageService } from './../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void { // This creates a Hero-like object from the name property (id is missing) and passes it to addHero() method in Hero Service
    name = name.trim();
    if(!name) {
      return;
    }

    this.heroService.addHero({ name } as Hero) // When addHero() saves in DB successfully, the subscribe() callback receives the new hero and we push it into the heroes array
      .subscribe(hero => {
        this.heroes.push(hero);
      })
  }



  // delete(hero: Hero): void {
  //   this.heroes = this.heroes.filter(h => h !== hero);
  //   this.heroService.deleteHero(hero).subscribe();
  // }
}