import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../services/manager.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  txtId:number;
  txtName:string;
  txtEmail:string;

  constructor(private manager: ManagerService) { }

  ngOnInit() {
  }

  addHero()
  {
      let hero = {

        id : this.txtId,
        name: this.txtName,
        email: this.txtEmail 
      }

      this.manager.addHero(hero);
  }
}
