import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  couleur = "white";

  constructor() { }

  ngOnInit(): void {
  }



  setColor(color : string){
    console.log(color);
    this.couleur=color;
  }

}
