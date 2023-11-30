let contador = 0;

function atualizarValor() {
  document.getElementById('value').innerText = contador.toString();
}

document.getElementById('plus').addEventListener('click', function() {
  contador++;
  atualizarValor();
});

document.getElementById('minus').addEventListener('click', function() {
  if (contador > 0) {
    contador--;
    atualizarValor();
  }
});

document.getElementById('reset').addEventListener('click', function() {
  contador = 0;
  atualizarValor();
});

atualizarValor();
