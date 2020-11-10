import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecursoCadastroComponent } from './pages/recurso/recurso-cadastro/recurso-cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoriaCadastroComponent } from './pages/categoria/categoria-cadastro/categoria-cadastro.component';
import { CategoriaPesquisaComponent } from './pages/categoria/categoria-pesquisa/categoria-pesquisa.component';
import { UsuarioPesquisaComponent } from './pages/usuario/usuario-pesquisa/usuario-pesquisa.component';
import { UsuarioCadastroComponent } from './pages/usuario/usuario-cadastro/usuario-cadastro.component';
import { RecursoPesquisaComponent } from './pages/recurso/recurso-pesquisa/recurso-pesquisa.component';
import { LocacaoCadastroComponent } from './pages/locacao/locacao-cadastro/locacao-cadastro.component';
import { LocacaoPesquisaComponent } from './pages/locacao/locacao-pesquisa/locacao-pesquisa.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
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
  },
  {
    path:'usuario/cadastro',
    component:UsuarioCadastroComponent
  },
  {
    path:'usuario/pesquisa',
    component:UsuarioPesquisaComponent
  },
  {
    path:'recurso/cadastro',
    component:RecursoCadastroComponent
  },
  {
    path:'recurso/pesquisa',
    component:RecursoPesquisaComponent
  },
  {
    path:'locacao/cadastro',
    component:LocacaoCadastroComponent
  },
  {
    path:'locacao/pesquisa',
    component:LocacaoPesquisaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
