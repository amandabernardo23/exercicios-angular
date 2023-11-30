export class ContadorComponent {
  private valor: number;


  constructor() {
    this.valor = 0;
  }


  aumentar(): void {
    this.valor++;
    this.exibirValor();
  }


  diminuir(): void {
    if (this.valor > 0) {
      this.valor--;
      this.exibirValor();
    }
  }


  private exibirValor(): void {
    console.log(`Valor atual: ${this.valor}`);
  }
}


const contador = new ContadorComponent();


contador.aumentar();
contador.aumentar();
contador.diminuir();
contador.diminuir();
contador.diminuir();

