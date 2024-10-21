// Função para calcular o saldo e determinar o nível do jogador
function calcularNivel(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;
  let nivel;

  // Verifica o nível com base na quantidade de vitórias
  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  // Exibe a mensagem final com o saldo e o nível do jogador
  alert(`O Herói tem um saldo de ${saldoVitorias} e está no nível ${nivel}.`);
}

// Solicita ao usuário a quantidade de vitórias e derrotas
const vitorias = parseInt(prompt("Digite a quantidade de vitórias: "));
const derrotas = parseInt(prompt("Digite a quantidade de derrotas: "));

// Verifica se as entradas são números válidos
if (isNaN(vitorias) || isNaN(derrotas)) {
  alert("Por favor, insira valores numéricos válidos.");
} else {
  // Chama a função com os valores inseridos pelo usuário
  calcularNivel(vitorias, derrotas);
}
