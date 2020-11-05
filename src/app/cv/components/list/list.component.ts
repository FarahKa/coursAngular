import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personne } from '../../model/personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public personnes : Personne[] = [];
  @Output() forwardSelectedPersonne = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.personnes = [
      new Personne(1, 'aymen', 'sellaouti', 'prof', 3030, 30, "as.jpg" ),
      new Personne(2, 'aymen2', 'sellaouti2', 'prof', 3030, 30, "as.jpg" ),
    ]
    console.log(this.personnes);
  }
  forwardPersonne(selectedPersonne : Personne){
    this.forwardSelectedPersonne.emit(selectedPersonne);
  }
}
