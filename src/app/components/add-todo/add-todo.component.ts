import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  // Estou usando o <any> pq como não tenho o id no meu todo não está atendendo ao meu model
  @Output() addTodo: EventEmitter<any> = new EventEmitter(); 
  title:string; // Este propriedade foi criado para ser atribuido pelo add-todo.component.html
  // Ele será carregado usando uma diretiva chamada ngModel [(ngModel)]="title"
  // Quando usamos [()] estamos transormando em uma two way data bind

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const todo = {
      // não precisa do id, a api coloca o id
      title: this.title,
      completed: false
    }
    this.addTodo.emit(todo);
  }

}
