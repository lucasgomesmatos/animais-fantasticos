import AnimaNumeros from "./AnimaNumeros.js";

export default function fetchAnimais(url, target) {
  // Cria a div contendo informações
  // com o total de animais
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");

    div.innerHTML = `
      <h3>${animal.specie}</h3> 
      <span data-numero>${animal.total}</span>`;

    return div;
  }

  // Anima os números de cada animal
  function animaAnimaisNumeros() {
    const animanumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animanumeros.init();
  }

  // Preenche cada animal no DOM
  function preencherAnimais(animal) {
    const numerosGrid = document.querySelector(target);
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // Puxa os animais através de um arquivo json
  // e cria cada animail utilizando createAnimal
  async function criarAnimais() {
    try {
      // Fetch, espera a resposta e transforma em JSON
      const animaisJSON = await (await fetch(url)).json();

      // Após a transformação de JSON,
      // ativa as funções para preencher e animar os números
      animaisJSON.forEach((animal) => {
        preencherAnimais(animal);
      });
      animaAnimaisNumeros();
    } catch (e) {
      console.log(e);
    }
  }

  return criarAnimais();
}
