import { Component, OnInit } from '@angular/core';
import {Hero} from '../Classes/hero';
import {ManagerService} from '../Services/manager.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  heroes : Hero[];

  suraj : Hero = {
    id : 0,
    name: "",
    email:""
  };
 
  editPos = 0;

  constructor(private obj1: ManagerService) { }

  ngOnInit() {

    this.heroes = this.obj1.getHeroList();
    console.log(this.heroes)
  }

  deleteHero(pos:number)
  {
    
    this.obj1.deleteHero(pos);

  }
  editHero(hero12:Hero,pos:number)
  {
      this.editPos = pos;
      this.suraj = hero12;
  }

  onEdit()
  {
    this.obj1.editHero(this.suraj,this.editPos);
  }

}