import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'
import { TodoService } from '../../service/todo.service'; // Importação do TodoService para ser usado dentro do construtor. O service se Injectable, permite isso

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  // Eu preciso "modelar" o tipo Todo, para que o TypeScript saiba o que é este tipo. Portanto crio em models um Todo.ts
  // com a estrutura que eu quero e depois importo aqui
  todos:Todo[]; 

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    })
    //this.todos = this.todoService.getTodos(); // este método carrega um array de objetos
    // Movido o HardCode para o todo.service.ts
    // this.todos = [
    //   {
    //     id: 1,
    //     title: 'Todo One',
    //     completed: false
    //   },
    //   {
    //     id: 2,
    //     title: 'Todo Two',
    //     completed: true
    //   },
    //   {
    //     id: 1,
    //     title: 'Todo Three',
    //     completed: false
    //   }
    // ]
  }

}
