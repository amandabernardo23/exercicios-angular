import { FormCadastroComponent } from './../form-cadastro.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../../../app.component';


@NgModule({
  declarations: [
    FormCadastroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
})
export class AppModule { }
