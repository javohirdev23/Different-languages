import { useTranslation } from "react-i18next";

export default function Cta() {
  const { t } = useTranslation();
  return (
    <div className="w-[1110px] mx-auto mt-[160px] flex items-center justify-between">
      <div>
        <h2 className="w-[300px] text-2xl font-bold">{t("CtaTitle")}</h2>
        <p className="w-[400px] pt-[32px]">{t("CtaText")}</p>
      </div>
      <div>
        <img src="./cta.svg" alt="" />
      </div>
    </div>
  );
}
