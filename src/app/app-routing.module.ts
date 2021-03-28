import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Importando os componentes que eu quero rotear
import { TodosComponent } from './components/todos/todos.component';
import { AboutComponent } from './components/pages/about/about.component';


// Adicionando componentes as rotas
// Para que o roteamento funcione, eu preciso adicionar a tag de roteamento ao arquivo app.component.html
const routes: Routes = [
  {path: '', component: TodosComponent},
  {path: 'about', component: AboutComponent} // Quando coloco o path, significa que vai adicionar o /nomeDadoAoPath ao meu site
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
