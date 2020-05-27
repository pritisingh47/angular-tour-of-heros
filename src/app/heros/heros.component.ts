import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero'

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hero: Hero[] = [{
    id: 1,
    name: 'Windstorm'
  },
  {
    id: 2,
    name: 'Narco'
  },
  {
    id: 3,
    name: 'Bombasto'
  }];
}
