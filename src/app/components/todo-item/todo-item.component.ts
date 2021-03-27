import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
// Para poder fazer o delete, como teremos que subir hierarquicamente falando do todo-item para todo, 
// precisamos adicionar: EventEmitter, Output

import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../service/todo.service'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter(); // Este @Output foi importado com o EventEmitter
  // este deleteTodo será capturado no componente Pai

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed // precisei do '' porque tem hífen no nome da classe 
    }
    return classes;
  }

  onToggle(todo) {
    // UI na tela
    todo.completed = !todo.completed; // usando a negação p/ ficar mudando de completo para nâo completo
    
    // chamada do service
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log(todo);
    })
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo); // Este deleteTodo foi criado no @Output
  }
}
