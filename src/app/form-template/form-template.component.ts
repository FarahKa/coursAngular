import { Component, OnInit } from '@angular/core';

class Rule {
  name: string;
  value: string;
}

class Option {
  name : string;
  value : string;
  selected : string;
}

class Champ {
  libelle : string;
  type : string;
  rules : Rule[];
  options : Option[];
}

class Type {
  nom : string;
  champs : Champ[]
}

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {
  
  template: Type;

  constructor() { }

  ngOnInit(): void {
    this.template = {
      "nom" : "type 1",
      "champs" : [
        {
          "libelle" : "Libelle champ 1",
          "type" : "text",
          "rules" : [
            {
              "name" : "required",
              "value" : "true"
            }, 
            {
              "name" : "maxLength",
              "value" : "10"
            }
          ],
          "options" : null //pas d'options car pas selection
        },
        {
          "libelle" : "Libelle champ 2",
          "type" : "checkbox",
          "rules" : [
            {
              "name" : "required",
              "value" : "true"
            }, 
          ],
          "options" : null //pas d'options car pas selection
        },
        {
          "libelle" : "Libelle champ 3",
          "type" : "select",
          "rules" : [
            {
              "name" : "required",
              "value" : "true"
            }, 
          ],
          "options" : [
            {
              "name" : "option 1",
              "value" : "option1",
              "selected" : ""
            },
            {
              "name" : "option 2",
              "value" : "option2",
              "selected" : ""
            },
            {
              "name" : "option 3",
              "value" : "option3",
              "selected" : "selected"
            }
          ]
        },

      ]
    }
  }

}
