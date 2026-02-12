import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uz from "./lang/uz.json";
import ru from "./lang/ru.json";
import en from "./lang/en.json";
import es from "./lang/es.json";
import ko from "./lang/ko.json";
import tr from "./lang/tr.json";
import zh from "./lang/zh.json";
i18n.use(initReactI18next).init({
  resources: {
    uz,
    ru,
    en,
    es,
    ko,
    tr,
    zh,
  },
  lng: "uz",


  interpolation: {
    escapeValue: false,
  },
});
