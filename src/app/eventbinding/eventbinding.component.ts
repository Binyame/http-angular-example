import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleClick = () => {
    console.log("Event Handling using Angular");
  }

  clickMe = (event:any) => {
    console.log("Button :" + event.target.value);
  }
}
