import AnimaNumeros from "./AnimaNumeros.js";

export default function initFetchAnimais() {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");

    div.innerHTML = `
      <h3>${animal.specie}</h3> 
      <span data-numero>${animal.total}</span>`;

    return div;
  }

  async function fetchAnimais(url) {
    try {
      const animaisJSON = await (await fetch(url)).json();
      const numerosGrid = document.querySelector(".numeros-grid");

      animaisJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      const animanumeros = new AnimaNumeros("[data-numero]",".numeros", "ativo");
      animanumeros.init();

    } catch (e) {
      console.log(e);
    }
  }

  

  fetchAnimais("./animaisapi.json");
}
