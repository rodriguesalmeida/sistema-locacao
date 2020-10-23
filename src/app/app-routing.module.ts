import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecursoCadastroComponent } from './pages/recurso/recurso-cadastro/recurso-cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoriaCadastroComponent } from './pages/categoria/categoria-cadastro/categoria-cadastro.component';
import { CategoriaPesquisaComponent } from './pages/categoria/categoria-pesquisa/categoria-pesquisa.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'recurso/cadastro',
    component:RecursoCadastroComponent
  },
  {
    path:'categoria/cadastro',
    component:CategoriaCadastroComponent
  },
  {
    path:'categoria/pesquisa',
    component:CategoriaPesquisaComponent
  },
  {
    path:'home',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
