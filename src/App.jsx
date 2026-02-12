import { useState } from "react";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainSec from "./components/MainSec";

export default function App() {
  const [lang, setLang] = useState("uz");

  return (
    <div>
      <Header lang={lang} setLang={setLang} />
      <MainSec lang={lang} />
      <Cta />
      <Footer />
    </div>
  );
}
