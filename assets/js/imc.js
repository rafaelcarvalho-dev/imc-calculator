//atribuindo elemento HTML a variavel; OBS: n eh conteudo;
const calcular = document.getElementById("calcular");

// sempre evitar variaveis globais!!;
function imc(event) {
  // e/event -> parametro naveg. envia para funcao notif. evento;
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");

  if (nome !== "" && altura !== "" && peso !== "") {
    const valorIMC = (peso / Math.pow(altura, 2)).toFixed(1);

    let classificacao = "";

    if (valorIMC < 18.5) {
      classificacao = "abaixo do peso.";
    } else if (valorIMC < 25) {
      classificacao = "com peso ideal. PARABÉNS!";
    } else if (valorIMC < 30) {
      classificacao = "levemente acima do peso.";
    } else if (valorIMC < 35) {
      classificacao = "com obesidade grau I.";
    } else if (valorIMC < 40) {
      classificacao = "com obesidade grau II.";
    } else {
      classificacao = "com obesidade grau III. Cuidado!";
    }

    resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
  } else {
    resultado.textContent = "preencha todos os campos!"; //mostra no elemento resultado o texto contido
  }
}

// '.' encontrar/acessar uma propriedade;
calcular.addEventListener("click", imc); //.  -> chama funcao de escutar o 'click' -> quando isso acontecer executa a funcao -> imc;
