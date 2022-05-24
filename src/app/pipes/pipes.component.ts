import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  
  public txt:string = "LiveScript is known as JavaScript"
  public product:any = {
    prodcode:'P4823',
    prodname:'Laptop',
    price:89000,
    barcode:'113884199581'
  }

  public x:number = 347.11234;
  public discount:number = 0.055;
  public amount:number = 1600;

  constructor() { }

  ngOnInit(): void {
  }

}
