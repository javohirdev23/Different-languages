import React, { useState } from "react";
import { useTranslation } from "react-i18next";
const languages = [
  {
    title: "Uzbek",
    code: "uz",
  },
  {
    title: "Russia",
    code: "ru",
  },
  {
    title: "English",
    code: "en",
  },
  {
    title: "Spain",
    code: "es",
  },
  {
    title: "Korea",
    code: "ko",
  },
  {
    title: "Turkey",
    code: "tr",
  },
  {
    title: "China",
    code: "zh",
  },
];
export default function Header({ lang, setLang }) {
  const { t, i18n } = useTranslation();

  function handleChange(evt) {
    const value = evt.target.value;
    i18n.changeLanguage(value);
    setLang(value);
  }
  return (
    <div className="flex w-full mx-auto  gap-50 bg-black p-8 text-white">
      <nav className="w-290 mx-auto flex justify-between">
        <img src="./navLogo.svg" alt="navbar logo" />
        <ul className="flex gap-5 items-center">
          <a href="#">
            <li>{t("Home")}</li>
          </a>
          <a href="#">
            <li>{t("HEADPHONES")}</li>
          </a>
          <a href="#">
            <li> {t("SPEAKERS")} </li>
          </a>
          <a href="#">
            <li> {t("EARPHONES")} </li>
          </a>
        </ul>
        <div className="bg-transparent rounded-md p-1">
          <select value={lang} onChange={handleChange} className="border-none ">
            {languages.map(({ code, title }, index) => {
              return (
                <option
                  className="bg-white text-black "
                  value={code}
                  key={index}
                >
                  {title}
                </option>
              );
            })}
          </select>
        </div>
      </nav>
    </div>
  );
}
