import { Injectable } from '@angular/core';
import { heroes } from '../classes/herolist';
import { Hero } from '../classes/hero'

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor() { }

  public addHero(hero:Hero){

    heroes.push(hero);
    console.log("Hero Added Successfully...");

  }

  public editHero(hero:Hero, pos:number){

    heroes[pos] = hero;  
    console.log(hero+"Hero Added Successfully...");

  }

  public deleteHero(pos:number){

    heroes.splice(pos,1);
    console.log(pos + " Hero Deleted Successfully...");

  }

  public getHeroById(id:number){

    return heroes[id];
  }

  public getHeroList(){

    return heroes;
  }

}
