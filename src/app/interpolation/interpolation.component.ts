import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  public username:string = "Shrenik";
  public hostaddress:string = window.location.href;
  
  constructor() { }

  ngOnInit(): void {
  }

}
