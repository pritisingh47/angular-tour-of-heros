import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero'
import {HEROES} from 'src/app/mock-heros'

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  heroes = HEROES;

  selectedHero: Hero;
  onSelect (hero: Hero) {
    this.selectedHero = hero;
  }
}
