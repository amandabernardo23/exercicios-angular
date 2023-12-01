import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppComponentPaiComponent } from "./components/app-component-pai/app-component-pai.component";
import { ContadorComponentComponent } from "./components/contador-component/contador-component.component";
import { ListItemsComponent } from "./components/list-items/list-items.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, AppComponentPaiComponent, ContadorComponentComponent, ListItemsComponent]
})
export class AppComponent {
  title = 'exercicios-angular';
}
