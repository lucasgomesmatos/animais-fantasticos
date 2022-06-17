import ScrollSuave from "./modules/ScrollSuave.js";
import AccordionList from "./modules/AccordionList.js";
import TabNav from "./modules/TabNav.js";
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

const accordion = new AccordionList('[data-anime="accordion"] dt', "ativo");
accordion.init();

const tabNav = new TabNav("[data-tab='menu'] li", "[data-tab='content'] section");
tabNav.init();

initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimacaoScroll();




