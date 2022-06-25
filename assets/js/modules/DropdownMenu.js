import outsideClick from "./outside-click.js";

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    // define eventos como argumento padrão de events,
    // caso o usuário não defina
    this.events = events === undefined ? ["touchstart", "click"] : events;
    this.activeClass = "active";
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // Ativa o dropdownMenu e adiciona
  // a função que observa o clique fora dele
  activeDropdownMenu(event) {
    const element = event.currentTarget;
    event.preventDefault();
    element.classList.add(this.activeClass);

    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // Adiciona os eventos ao dropdownMenu
  addDropdownMenuEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenuEvent();
    }
    return this;
  }
}
