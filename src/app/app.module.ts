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
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {FlexLayoutModule } from '@angular/flex-layout';
import { CategoriaCadastroComponent } from './pages/categoria/categoria-cadastro/categoria-cadastro.component';
@NgModule({
  declarations: [
    AppComponent,
    RecursoCadastroComponent,
    HomeComponent,
    CategoriaCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FlexLayoutModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
