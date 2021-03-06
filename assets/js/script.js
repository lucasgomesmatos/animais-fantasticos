import ScrollSuave from "./modules/ScrollSuave.js";
import AccordionList from "./modules/AccordionList.js";
import TabNav from "./modules/Tabnav.js";
import Tooltip from "./modules/Tooltip.js";
import Modal from "./modules/Modal";
import fetchAnimais from "./modules/fetchAnimais.js";
import ScrollAnima from "./modules/ScrollAnima.js";
import DropdownMenu from "./modules/DropdownMenu.js";
import MenuMobile from "./modules/MenuMobile.js";
// eslint-disable-next-line import/no-unresolved
import Funcionamento from "./modules/Funcionamento.js";
import SlideNav from "./modules/Slide.js";
import fetchBitcoin from "./modules/fetchBitcoin.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new AccordionList('[data-anime="accordion"] dt', "ativo");
accordion.init();

const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

fetchAnimais("./animaisapi.json", ".numeros-grid");

fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");

const scrollAnima = new ScrollAnima('[data-tab="scroll"]', "ativo");
scrollAnima.init();

const dropdownMenu = new DropdownMenu("[data-dropdown]");
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamento("[data-semana]", "aberto");
funcionamento.init();

const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();
// slide.addArrow(".prev", ".next")
slide.addControl(".custom-controls");
