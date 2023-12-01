import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contador-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contador-component.component.html'
})
export class ContadorComponentComponent {
  valor: number = 0;

  aumentar() {
    this.valor++;
  }

  diminuir() {
    if (this.valor > 0) {
      this.valor--;
    }
  }
}
