import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enAbout from "./languages/en/about.json";
import svAbout from "./languages/sv/about.json";
import enProjects from "./languages/en/projects.json";
import svProjects from "./languages/sv/projects.json";
import enContact from "./languages/en/contact.json";
import svContact from "./languages/sv/contact.json";
import enNavbar from "./languages/en/navbar.json";
import svNavbar from "./languages/sv/navbar.json";
import enHero from "./languages/en/hero.json";
import svHero from "./languages/sv/hero.json";
import enHamburger from "./languages/en/hamburger.json";
import svHamburger from "./languages/sv/hamburger.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      about: enAbout,
      projects: enProjects,
      contact: enContact,
      navbar: enNavbar,
      hero: enHero,
      hamburger: enHamburger,
    },
    sv: {
      about: svAbout,
      projects: svProjects,
      contact: svContact,
      navbar: svNavbar,
      hero: svHero,
      hamburger: svHamburger,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  ns: ["about", "projects", "contact", "navbar", "hero", "hamburger"],
  defaultNS: "about",
});

export default i18n;
