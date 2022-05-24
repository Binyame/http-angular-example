import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit {

  public submitted:boolean = true;

  public registrationForm = new FormGroup({
    username:new FormControl("Smith"),

    education:new FormGroup({
      primaryedu:new FormControl("", Validators.required),
      higheredu:new FormControl("", Validators.required)
    }),

    address:new FormGroup({
      street:new FormControl(""),
      location:new FormControl(""),
      city:new FormControl(""),
      pincode:new FormControl("")
    }),

    emailid:new FormControl("",[Validators.required, Validators.email]),

    contact:new FormGroup({
      officecontact:new FormControl(""),
      personalcontact:new FormControl("")
    })
  });

  constructor() { }

  ngOnInit(): void {
  }


  showForm(){
    console.log(this.registrationForm.value);
    this.submitted = true;
  }

  get emailid(){
    return this.registrationForm.get("emailid");
  }
}
