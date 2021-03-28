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
  }
  
  deleteTodo(todo: Todo) {
    // UI - fazendo a deleção na tela
    // Usando o filter (filtrando meus itens). Toda vez que eu clico em deletar eu capturo o ID do item. Em posso do ID eu faço um filter
    // usando arrow function e só retorno para o todos os itens diferentes do id excluído
    this.todos = this.todos.filter(t => t.id !== todo.id);

    // Serviço
    this.todoService.deleteTodo(todo).subscribe(); // Não preciso passar mais nada pois é uma deleção
  }

  addTodo(todo:Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo); // Adiciona ao meu array
    });
  }

}
