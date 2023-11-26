import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponentFilhoComponent } from "../app-component-filho/app-component-filho.component";

@Component({
    selector: 'app-component-pai',
    standalone: true,
    templateUrl: './app-component-pai.component.html',
    imports: [CommonModule, AppComponentFilhoComponent]
})
export class AppComponentPaiComponent {
  listaItens: string[] = ["Joffre","Maria","Amanda","Clovis"]
}
