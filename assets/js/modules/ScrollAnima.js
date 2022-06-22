export default class ScrollAnima{
  constructor(sections, activeClass) {
    this.sections = document.querySelectorAll(sections);
    this.activeClass = activeClass;
    this.windowMetado = window.innerHeight * 0.6;

    this.animaScroll = this.animaScroll.bind(this)
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - this.windowMetado < 0;
      if (isSectionVisible) {
        section.classList.add(this.activeClass);
      } else if (section.classList.contains(this.activeClass)) {
        section.classList.remove(this.activeClass);
      }
    });
  }

  init() {
    if(this.sections.length) {
      this.animaScroll();
      window.addEventListener("scroll", this.animaScroll);
    }
  }

  
}
