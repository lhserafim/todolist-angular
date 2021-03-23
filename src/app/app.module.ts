import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component'; // Foi incluído automaticamente, uma vez que eu rodei o comando ng g component components/todos

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent // Aqui tmb foi inclusão automática
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
