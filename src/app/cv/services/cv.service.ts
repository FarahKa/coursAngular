import { Injectable } from '@angular/core';
import { Personne } from '../model/personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes: Personne[] = [];
  constructor() { 
    this.personnes = [
      new Personne(1, 'aymen', 'sellaouti', 'prof', 3030, 30, "as.jpg" ),
      new Personne(2, 'aymen2', 'sellaouti2', 'prof', 3030, 30, "as.jpg" ),
    ]
  }
  getPersonnes(): Personne[] {
    return this.personnes;
  }
}
