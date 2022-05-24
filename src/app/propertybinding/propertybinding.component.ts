import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {

  public formelements:any = {
    fname:'txt-fname',
    lname:'txt-lname'
  }

  public pass:string="text-success fw-bold";
  public fail:string="text-danger fw-bold";
  public serverdown:string="text-dark bg-warning border border-2 border-warning";
  public isconnected:boolean=false;

  public enableCity:boolean = false;

  public myfavclasses:any = {
    'text-center':true,
    'mx-3':true,
    'my-3':true,
    'fw-bold':true,
    'text-light':false,
    'text-danger':true,
    'border':true,
    'border-3':false,
    'border-secondary':true
  };

  constructor() { }

  ngOnInit(): void {
  }

}
