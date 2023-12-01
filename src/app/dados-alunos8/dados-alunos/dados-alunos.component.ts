import { Component, OnInit } from '@angular/core';
import { AlunosService } from './alunos.service';


@Component({
  selector: 'app-dados-alunos',
  templateUrl: './dados-alunos.component.html',
  styleUrls: ['./dados-alunos.component.css']
})
export class DadosAlunosComponent implements OnInit {
  alunos: any[] = [];

  constructor(private alunosService: AlunosService) {}

  ngOnInit(): void {
    this.alunosService.getAlunos().subscribe((data: any[]) => {
      this.alunos = data;
    });
  }

  calcularMediaGlobal(rendimentoEscolar: Record<string, number>): number {
    const notas = Object.values(rendimentoEscolar);
    const somaNotas = notas.reduce((acc: number, nota: number) => acc + nota, 0);
    return somaNotas / notas.length;
}

}


