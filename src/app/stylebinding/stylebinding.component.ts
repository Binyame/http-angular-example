import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {

  public isImportant:boolean = false;
  public special:string = "darkblue";
  public manystyles:any = {
    color:'white',
    backgroundColor:'darkblue',
    padding:'10px',
    marginLeft:'100px'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
