export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // bind do objeto da classe aos callbacks
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseleave = this.onMouseleave.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // Move a tooltip com vase em seus estilos
  // De acordo a posição do mouse
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 190}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  // Remove a tooltip e os eventos de mousemove e mouseleave
  onMouseleave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseleave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  // Cria a tooltipbox e coloca no body
  criarTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  // Cria a tooltip e adiciona os eventos de 
  // mousemove e mouseleave ao target
  onMouseOver({ currentTarget }) {
    // Cria a tooltipbox e coloca em uma propriedade
    this.criarTooltipBox(currentTarget);
    currentTarget.addEventListener("mousemove", this.onMouseMove);
    currentTarget.addEventListener("mouseleave", this.onMouseleave);
  }

  // Adiciona os eventos de mouseover a cada tooltip
  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
