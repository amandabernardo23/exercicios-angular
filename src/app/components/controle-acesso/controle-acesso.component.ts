import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  
  selector: 'app-controle-acesso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './controle-acesso.component.html',
 
})
export class ControleAcessoComponent { 
  public permissao: string = '';

  definirPermissao(tipo: string): void {
    switch (tipo) {
      case 'administrador':
        this.permissao = 'Você tem permissão de administrador';
        break;
      case 'colaborador':
        this.permissao = 'Você tem permissão de colaborador';
        break;
      case 'usuario':
        this.permissao = 'Você tem permissão de usuário';
        break;
      default:
        this.permissao = '';
        break;
    }
  }

}
