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

  addHeroes (name: string):void{
    this.heroService.addHeroes({name} as Hero)
    .subscribe(
      hero => this.heroes.push(hero)
    )
  }

  deleteHero(hero:Hero):void{
    this.heroes = this.heroes.filter( h => hero!=h)
    this.heroService.deleteHero(hero)
    .subscribe();
    
  }
}
