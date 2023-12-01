import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DadosAlunosComponent } from '../dados-alunos.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule ({
  declarations: [
    DadosAlunosComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ]
})

export class DadosAlunosModule {}


