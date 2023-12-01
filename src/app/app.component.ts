import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppComponentPaiComponent } from "./components/app-component-pai/app-component-pai.component";
import {}

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, AppComponentPaiComponent]
})
export class AppComponent {
  title = 'exercicios-angular';
}

