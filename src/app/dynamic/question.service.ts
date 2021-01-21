import { Injectable } from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
import { of } from 'rxjs';
import { CheckboxQuestion } from './question-checkbox';

class Rule {
  id: string;
  name: string;
  value: string;
}

class Option {
  key : string;
  value : string;
}

class Champ {
  id: string;
  libelle : string;
  type : string;
  rules : Rule[];
  options : Option[];
}

class Type {
  id: string;
  nom : string;
  champs : Champ[]
}

//TODO: required in checkbox bugs, see why

@Injectable()
export class QuestionService {

  template: Type;
  // TODO: get from a remote source of question metadata
  getQuestions() {

    this.template = {
      "id" : "1",
      "nom" : "type 1",
      "champs" : [
        {
          "id" : "1",
          "libelle" : "Libelle champ 1",
          "type" : "text",
          "rules" : [
            {
              "id" : "champ1",
              "name" : "required",
              "value" : "true"
            }, 
            {
              "id" : "2",
              "name" : "maxLength",
              "value" : "10"
            }
          ],
          "options" : null //pas d'options car pas selection
        },
        {
          "id" : "champ2",
          "libelle" : "Libelle champ 2",
          "type" : "checkbox",
          "rules" : [
            // {
            //   "id" : "1",
            //   "name" : "required",
            //   "value" : "true"
            // }, 
          ],
          "options" : null //pas d'options car pas selection
        },
        {
          "id" : "champ3",
          "libelle" : "Libelle champ 3",
          "type" : "select",
          "rules" : [
            {
              "id" : "1",
              "name" : "required",
              "value" : "true"
            }, 
          ],
          "options" : [
            {
              "key" : "option1",
              "value" : "Option 1",
            },
            {
              "key" : "option2",
              "value" : "Option 2",
            },
            {
              "key" : "option3",
              "value" : "Option 3",
            }
          ]
        },

      ]
    }

    const questions: QuestionBase<string>[] = [];
    let i = 1;
    this.template.champs.forEach(champ => {
      let question;
      if(champ.type === "select"){
        question = new DropdownQuestion({
          key: champ.id,
          label: champ.libelle,
          options: champ.options,
          order : i
        })
      } else if (champ.type === "checkbox"){
        let x = champ.rules.find(e => e.name === "required");
        question = new CheckboxQuestion({
          key: champ.id,
          label: champ.libelle,
          options: champ.options,
          order: i,
          type: champ.type,
          required: x ? eval(x.value) : false,
        })        
      } else if (champ.type === "text"){
        let x = champ.rules.find(e => e.name === "required");
        question = new TextboxQuestion({
          key: champ.id,
          label: champ.libelle,
          value: "",
          options: champ.options,
          order: i,
          required: x ? eval(x.value) : false,
        })        
      }
      i= i+1;
      questions.push(question);
      
    });
    
    // = [

    //   new DropdownQuestion({
    //     key: 'brave',
    //     label: 'Bravery Rating',
    //     options: [
    //       {key: 'solid',  value: 'Solid'},
    //       {key: 'great',  value: 'Great'},
    //       {key: 'good',   value: 'Good'},
    //       {key: 'unproven', value: 'Unproven'}
    //     ],
    //     order: 3
    //   }),

    //   new TextboxQuestion({
    //     key: 'firstName',
    //     label: 'First name',
    //     value: 'Bombasto',
    //     required: true,
    //     order: 1
    //   }),

    //   new TextboxQuestion({
    //     key: 'emailAddress',
    //     label: 'Email',
    //     type: 'email',
    //     order: 2
    //   })
    // ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
