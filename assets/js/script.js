import ScrollSuave from "./modules/scroll-suave.js";
import initTabNav from "./modules/tabnav.js";
import initAccordionList from "./modules/accordion-list.js";
import initTooltip from "./modules/tooltip.js";
import initModal from "./modules/modal.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";


const scrollSuave = new ScrollSuave(`[data-menu="suave"] a[href^="#"]`);
scrollSuave.init();

initTabNav();
initAccordionList();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimacaoScroll();




