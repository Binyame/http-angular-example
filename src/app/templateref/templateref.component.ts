import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateref',
  templateUrl: './templateref.component.html',
  styleUrls: ['./templateref.component.css']
})
export class TemplaterefComponent implements OnInit {

  public gender:string = "";
  public useremail:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  showCity = (e:any) => {
    console.log("Your city is " + e.value);
  }

  selectGender = (event:any) => {
    this.gender = event.target.value;
  }

  showPerson = (event:any) => {
    console.log("Gender is " + this.gender);
  }
}
