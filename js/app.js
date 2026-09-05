
import { renderSidebar } from "./components/Sidebar.js";
import { renderMobileHeader } from "./components/MobileHeader.js";
import { renderHero } from "./components/Hero.js";
import { renderSections } from "./components/Section.js";
import { renderFooter } from "./components/Footer.js";
import { renderModal } from "./components/Modal.js";

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector("#sidebar");
  const mobileHeader = document.querySelector("#mobileHeader");
  const hero = document.querySelector("#hero");
  const sections = document.querySelector("#productSections");
  const footer = document.querySelector("#footer");
  const modal = document.querySelector("#modal");

  renderSidebar(sidebar);
  renderMobileHeader(mobileHeader);
  renderHero(hero);
  renderSections(sections);
  renderFooter(footer);
  renderModal(modal);
});

