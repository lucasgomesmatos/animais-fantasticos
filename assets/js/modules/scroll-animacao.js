export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-tab="scroll"]');
  
  function animaScroll() {
    const windowMetado = window.innerHeight * 0.6;
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowMetado < 0;
      if (isSectionVisible) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }

  if (sections.length) {
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
