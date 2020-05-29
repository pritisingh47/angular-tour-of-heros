import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero'
import {HeroService} from '../hero.service'
import {MessageService} from '../message.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }

  heroes: Hero[];

  getHeroes (){
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
