import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enAbout from "./locales/en/about.json";
import svAbout from "./locales/sv/about.json";
import enProjects from "./locales/en/projects.json";
import svProjects from "./locales/sv/projects.json";
import enContact from "./locales/en/contact.json";
import svContact from "./locales/sv/contact.json";
import enNavbar from "./locales/en/navbar.json";
import svNavbar from "./locales/sv/navbar.json";
import enHero from "./locales/en/hero.json";
import svHero from "./locales/sv/hero.json";
import enHamburger from "./locales/en/hamburger.json";
import svHamburger from "./locales/sv/hamburger.json";

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
    }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  ns: ["about", "projects", "contact", "navbar", "hero", "hamburger"],
  defaultNS: "about"
});

export default i18n;