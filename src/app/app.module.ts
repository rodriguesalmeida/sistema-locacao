import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { RecursoCadastroComponent } from './pages/recurso/recurso-cadastro/recurso-cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {FlexLayoutModule } from '@angular/flex-layout';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CategoriaCadastroComponent } from './pages/categoria/categoria-cadastro/categoria-cadastro.component';
import { CategoriaPesquisaComponent } from './pages/categoria/categoria-pesquisa/categoria-pesquisa.component';
import { RecursoPesquisaComponent } from './pages/recurso/recurso-pesquisa/recurso-pesquisa.component';
import { UsuarioCadastroComponent } from './pages/usuario/usuario-cadastro/usuario-cadastro.component';
import { UsuarioPesquisaComponent } from './pages/usuario/usuario-pesquisa/usuario-pesquisa.component';
import { LocacaoPesquisaComponent } from './pages/locacao/locacao-pesquisa/locacao-pesquisa.component';
import { LocacaoCadastroComponent } from './pages/locacao/locacao-cadastro/locacao-cadastro.component';
import { MatNativeDateModule } from '@angular/material/core';
import { LoginComponent } from './pages/login/login.component';
import { TokenInterceptor } from './services/tokenInterceptor';
import { Router } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    RecursoCadastroComponent,
    HomeComponent,
    CategoriaCadastroComponent,
    CategoriaPesquisaComponent,
    RecursoPesquisaComponent,
    UsuarioCadastroComponent,
    UsuarioPesquisaComponent,
    LocacaoPesquisaComponent,
    LocacaoCadastroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FlexLayoutModule,
    MatSelectModule,
    FormsModule,
    CommonModule,
    MatTableModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide:APP_BASE_HREF, useValue:'/'},
    {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor,multi:true, deps:[Router]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
