import outsideClick from "./outside-click.js";

export default class MenuMobile {
  constructor(menuButton, menuList, userEvent) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.userEvent =
      userEvent === undefined ? ["click", "touchstart"] : userEvent;
    this.activeClass = "active";

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menuList, this.userEvent, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addEventMenu() {
    this.userEvent.forEach((event) =>
      this.menuButton.addEventListener(event, this.openMenu)
    );
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addEventMenu();
    }
    return this;
  }
}
