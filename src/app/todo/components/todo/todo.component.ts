import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(public todoService : TodoService) { }

  ngOnInit(): void {
  }

  nom : string = "";
  contenu : string = "";

  addTodo(): void {
    this.todoService.addTodo(this.nom, this.contenu);
    console.log(this.todoService.showTodos());
  }

  deleteTodo(nom : string) : void {
    this.todoService.deleteTodo(nom);
  }

}
