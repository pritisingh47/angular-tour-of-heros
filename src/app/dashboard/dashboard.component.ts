import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
import {Hero} from '../hero';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private heroServics:HeroService) { }

  ngOnInit() {
    this.getHeros();
  }

  heros: Hero[];

  getHeros() {
    this.heroServics.getHeroes().subscribe(heros=> this.heros=heros.slice(1,5))
  }

  selectedHero: Hero;
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

}
