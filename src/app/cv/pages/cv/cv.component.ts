import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../../model/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  selectedPersonne : Personne = null;
  constructor() { }

  ngOnInit(): void {
  }

  catchSelectedPersonne(selectedPersonne){
    this.selectedPersonne = selectedPersonne;
  }

}
