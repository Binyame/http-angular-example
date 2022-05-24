import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  public userinfo:any = {
    username:"",
    password:"",
    confirmpwd:"",
    emailid:"",
    address:{street:"", city:"", pincode:""}
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
