import { Injectable } from '@angular/core';
import { Personne } from 'src/app/cv/model/personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  embauches: Personne[] = [];
  constructor() { }
  getEmbauches(): Personne[] {
    return this.embauches;
  }
  embaucher (personne : Personne) {
    const index = this.embauches.indexOf(personne);
    if (index >= 0){
      return 0
    } else {
      this.embauches.push(personne);
      return 1
    }
  }
}
