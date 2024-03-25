function calcular() {
  let numero1 = Number(document.getElementById('numero-um').value);
  let numero2 = Number(document.getElementById('numero-dois').value);
  
  let operador = document.querySelector('input[name="opcoes"]:checked').value;

  let expressao = numero1 + operador + numero2;

  let total = eval(expressao);

  document.getElementById('resultado').innerHTML = 'Resultado: ' + total;
}