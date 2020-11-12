import { Injectable } from '@angular/core';
import { Todo } from '../models/todo-model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todolist : Todo[] = [];
  constructor() { }

  addTodo = (nom : string, contenu : string) => {
    const todo = new Todo(nom, contenu);
    this.todolist.push(todo);
  }

  showTodos = () => {
    return this.todolist;
  }

  deleteTodo = (nom : string) => {
    this.todolist = this.todolist.filter((e) => e.nom !== nom);
  }

}
