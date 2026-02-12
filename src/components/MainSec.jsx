import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Loader from "./loader";

export default function MainSec({ lang }) {
  const [count, setCount] = useState(0);
  const [state, setState] = useState([]);
  const { t } = useTranslation();
  const [loader, setLoader] = useState(true);
  if (loader) {
    document.body.classList.add("overflow-hidden");
  }else{
      document.body.classList.remove("overflow-hidden");
  }
  useEffect(() => {
    setLoader(true)
    fetch(`https://json-api.uz/api/project/multi-languages/${lang}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setState(res.data);
      })
      .catch(() => {})
      .finally(() => {
        setLoader(false);
      });
  }, [lang]);
  return (
    <>
      {loader && <Loader />}
      {!loader && (
        <div className="w-[1110px] mx-auto mt-[160px]">
          {state.map((el) => {
            return (
              <div key={el.id}>
                <div
                  key={el.id}
                  className="flex gap-[124px] justify-center items-center"
                >
                  <div>
                    <img src="./hero.svg" alt="" />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold w-70 pb-[32px] ">
                      {el.name}
                    </h2>
                    <p className="w-[445px] mx-auto pb-[32px]">
                      {el.description}
                    </p>
                    <b>$ {el.price}</b>

                    <div className="flex gap-4">
                      <div className="bg-gray-100 w-[120px] gap-5 flex justify-center items-center mt-12">
                        <button onClick={() => setCount(count - 1)}>-</button>

                        <span style={{ fontSize: "24px" }}>{count}</span>

                        <button onClick={() => setCount(count + 1)}>+</button>
                      </div>
                      <div className="flex justify-center items-center mt-12">
                        <button className="w-[160px] bg-[#D87D4A] text-white   py-[15px]">
                          {t("Add")}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* main infos  */}
                <div className="mt-[165px] flex  gap-[124px]">
                  <div>
                    <h2 className="font-bold text-2xl">{t("Feature")}</h2>
                    <p className="w-[635px] pt-[32px] text-gray-500">
                      {el.features}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-2xl pb-8">{t("INTHEBOX")}</h2>
                    <div className="flex gap-1 items-center">
                      <span className="text-[#D87D4A] font-bold pr-3">1x</span>
                      <p className="text-gray-500">{t("headphoneUnit")}</p>
                    </div>
                    <div className="flex gap-1 items-center">
                      <span className="text-[#D87D4A] font-bold pr-3">2x</span>
                      <p className="text-gray-500">{t("Replacement")}</p>
                    </div>
                    <div className="flex gap-1 items-center">
                      <span className="text-[#D87D4A] font-bold pr-3">1x</span>
                      <p className="text-gray-500">{t("User")}</p>
                    </div>
                    <div className="flex gap-1 items-center">
                      <span className="text-[#D87D4A] font-bold pr-3">1x</span>
                      <p className="text-gray-500">{t("AudioCable")}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
