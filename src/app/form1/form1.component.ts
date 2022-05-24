import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

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

  signUp(formObj:any)
  {
    console.log(JSON.stringify(formObj.value, null, 3));
  }
}
