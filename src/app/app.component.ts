import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppComponentPaiComponent } from "./components/app-component-pai/app-component-pai.component";
import { ContadorComponentComponent } from "./components/contador-component/contador-component.component";
import { ListItemsComponent } from "./components/list-items/list-items.component";
import { ControleAcessoComponent } from "./components/controle-acesso/controle-acesso.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [CommonModule, RouterOutlet, AppComponentPaiComponent, ContadorComponentComponent, ListItemsComponent, ControleAcessoComponent]
})

export class AppComponent {
  title = 'exercicios-angular';
}
