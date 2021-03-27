import { Injectable } from '@angular/core'
// Este injectable permite injetar o service dentro de um construtor de um componente

import { HttpClient, HttpHeaders } from '@angular/common/http'
// Para fazer esta importação, antes eu preciso fazer a importação do import { HttpClientModule } from '@angular/common/http' e associar nos imports
// no app.module.ts

import { from, Observable } from 'rxjs'
// Esta importação é necessária para que façamos a chamada do API

import { Todo } from '../models/Todo'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // Setando a url que vou consumir a "API"
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  // Implementando um limite de linhas no retorno
  todosLimit:string = '?_limit=5'; // este limite é um parametro que posso passar na URL https://jsonplaceholder.typicode.com/todos?_limit=5

  // Fazendo a injeção da importação no construtor
  constructor(private http:HttpClient) { }

  // Como a minha API vai retornar um Observable, eu preciso tipificar o meu método e ainda tipificar o observable como um array de Todo
  getTodos():Observable<Todo[]> {
    // utilizar o .get para fazer o request, usando o http que eu injetei no construtor
    // o meu get retornará um array de Todo, por isso <Todo[]>. Necessário importar o Todo
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }
}
