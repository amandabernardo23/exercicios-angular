import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component-filho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-component-filho.component.html'})

export class AppComponentFilhoComponent {
  @Input() itens: string[] = []
}
