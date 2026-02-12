import { useTranslation } from "react-i18next";


export default function Footer() {
  const { t } = useTranslation()
  return (
    <div className="w-full mx-auto bg-black text-gray-300 mt-[160px]">
      <div className="w-277.5 mx-auto pt-18.75 pb-12 flex justify-between">
     <div>
           <img src="./navLogo.svg" alt="footer logo" />
        <p className="pt-9 pb-14 w-[540px]">
   {t("FooterText")}
        </p>
        <b className=""> {t("FooterCopy")} </b>
     </div>
     <div className="flex flex-col ">
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
        <div className="flex  gap-3 justify-end pt-[107px]">
            <img src="./faceb.svg" alt="" />
            <img src="./tweet.svg" alt="" />
            <img src="./inst.svg" alt="" />
        </div>
     </div>
      </div>

    </div>
  );
}
