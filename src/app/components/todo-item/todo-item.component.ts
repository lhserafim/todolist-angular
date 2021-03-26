import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() { }

  ngOnInit(): void {
  }

  // Setar a classe dinâmicamente, para usar no todo-item.component.html, como uma diretiva de atributo
  // Dentro da variável let estou criando um objeto que tem relação com o css criado neste componente. Conforme abaixo
  // .todo {
  //   background: #f4f4f4;
  //   padding: 10px;
  //   border-bottom: 1px #ccc dotted;
  // }
  
  // .is-complete {
  //   text-decoration: line-through;
  // }
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed // precisei do '' porque tem hífen no nome da classe 
    }
    return classes;
  }

  onToggle(todo) {
    // console.log('toggle');
    todo.completed = !todo.completed; // usando a negação p/ ficar mudando de completo para nâo completo
  }

  onDelete(todo) {
    console.log('delete');
  }
}
