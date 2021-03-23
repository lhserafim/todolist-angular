import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  // Eu preciso "modelar" o tipo Todo, para que o TypeScript saiba o que é este tipo. Portanto crio em models um Todo.ts
  // com a estrutura que eu quero e depois importo aqui
  todos:Todo[]; 

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: 'Todo One',
        completed: false
      },
      {
        id: 2,
        title: 'Todo Two',
        completed: true
      },
      {
        id: 1,
        title: 'Todo Three',
        completed: false
      }
    ]
  }

}
