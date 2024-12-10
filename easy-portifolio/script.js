// Dados da escala de trabalho com os nomes dos trabalhadores
const escalaTrabalhador = {
    "João Silva": {
      segunda: "Trabalho das 9h às 18h",
      terca: "Trabalho das 9h às 18h",
      quarta: "Trabalho das 9h às 18h",
      quinta: "Trabalho das 9h às 18h",
      sexta: "Trabalho das 9h às 18h",
      sabado: "Descanso",
      domingo: "Descanso"
    },
    "Maria Oliveira": {
      segunda: "Trabalho das 9h às 18h",
      terca: "Trabalho das 9h às 18h",
      quarta: "Trabalho das 9h às 18h",
      quinta: "Trabalho das 9h às 18h",
      sexta: "Trabalho das 9h às 18h",
      sabado: "Descanso",
      domingo: "Descanso"
    },
    "Carlos Souza": {
      segunda: "Trabalho das 9h às 18h",
      terca: "Trabalho das 9h às 18h",
      quarta: "Trabalho das 9h às 18h",
      quinta: "Trabalho das 9h às 18h",
      sexta: "Trabalho das 9h às 18h",
      sabado: "Descanso",
      domingo: "Descanso"
    }
  };
  
  // Função para exibir a escala dos trabalhadores
  document.addEventListener("DOMContentLoaded", () => {
    const escalaList = document.getElementById("escala-list");
  
    // Para cada trabalhador, exibir a escala de trabalho
    for (const trabalhador in escalaTrabalhador) {
      const trabalhadorItem = document.createElement("li");
      trabalhadorItem.innerHTML = `<strong>${trabalhador}</strong><br>`;
  
      // Exibir os dias da semana e suas respectivas tarefas
      Object.keys(escalaTrabalhador[trabalhador]).forEach(dia => {
        const tarefa = escalaTrabalhador[trabalhador][dia];
        trabalhadorItem.innerHTML += `<span>${dia.charAt(0).toUpperCase() + dia.slice(1)}: ${tarefa}</span><br>`;
      });
  
      // Adicionar a informação de cada trabalhador na lista
      escalaList.appendChild(trabalhadorItem);
    }
  });
  