import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // Create a method to retrieve the heroes from the service:
    getHeroes(): void {
      this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes)
    }

  //Add a private heroService parameter of type HeroService to the constructor:
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }
}
