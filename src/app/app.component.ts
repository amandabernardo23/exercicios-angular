import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppComponentPaiComponent } from "./components/app-component-pai/app-component-pai.component";
import { ContadorComponentComponent } from "./components/contador-component/contador-component.component";
import { ListItemsComponent } from "./components/list-items/list-items.component";
import { ControleAcessoComponent } from "./components/controle-acesso/controle-acesso.component";
import { DadosAlunosComponent } from './dados-alunos8/dados-alunos/dados-alunos.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [CommonModule, DadosAlunosComponent, RouterOutlet, AppComponentPaiComponent, ContadorComponentComponent, ListItemsComponent, ControleAcessoComponent]
})

export class AppComponent {
  title = 'exercicios-angular';
}

