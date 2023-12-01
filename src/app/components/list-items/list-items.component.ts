import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface materia {
  materia: string
  aprovado: boolean
}

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-items.component.html'
})
export class ListItemsComponent {
  materias: materia[] = [{ materia: 'Front end', aprovado: false }, { materia: 'Back end', aprovado: false }, { materia: 'Maturidade', aprovado: false }, { materia: 'Cloud', aprovado: false }, { materia: 'Mobile', aprovado: false }];
  
  materia: string = '';

  adicionarItem() {
    if (this.materia.trim() !== '') {
      this.materias.push({ materia: this.materia, aprovado: false });
      this.materia = '';
    }
  }

  removerItem(index: number) {
    this.materias.splice(index, 1);
  }

  concluirTarefa(index: number) {
    this.materias[index].aprovado = !this.materias[index].aprovado;
  }
}
