export default class AccordionList {
  constructor(elementList, addClass) {
    this.accordionList = document.querySelectorAll(elementList);
    this.activeClass = addClass;
  }

  toggleAccordion(item) {
    // Adicionar a classe ativo ao item clicado
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  addAccordionList() {
    this.accordionList.forEach((item) => {
      // Pegar a referência do item clicado
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }

  // Iniciar a função toggleAccordion
  init() {
    if (this.accordionList.length) {
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionList();
    }
    return this;
  }
}
