import { Injectable } from '@angular/core'
// Este injectable permite injetar o service dentro de um construtor de um componente

import { HttpClient, HttpHeaders } from '@angular/common/http'
// Para fazer esta importação, antes eu preciso fazer a importação do import { HttpClientModule } from '@angular/common/http' e associar nos imports
// no app.module.ts

import { Observable } from 'rxjs'
// Esta importação é necessária para que façamos a chamada do API

import { Todo } from '../models/Todo'


const httpOptions =  {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

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

  // Aqui no caso do put, estou recebendo o todo no método, como parâmetro
  // put também vai retornar um Observable, por isso terei que colocar no retorno
  toggleCompleted(todo: Todo):Observable<any> { // any, porque o retorno não é do tipo Todo (poderia criar um tipo e usá-lo)
    const url = `${this.todosUrl}/${todo.id}`; // montando a URL e passando o ID p/ poder fazer o put (update)
    return this.http.put(url, todo, httpOptions); // httpOptions é para incluir o Header do ContentType
    // @param url — The endpoint URL.
    // @param body — The resources to add/update.
    // @param options — HTTP options
  }

  deleteTodo(todo:Todo):Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  addTodo(todo:Todo):Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }
}
