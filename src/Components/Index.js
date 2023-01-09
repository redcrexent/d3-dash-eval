import React, { useState, Suspense } from "react";
import Header from "./Header/Header";
import TopBar from "./Dashbaord/TopBar";
import ChartRow from "./Dashbaord/ChartRow";
import { useTranslation } from "react-i18next";

function Index() {
  const [dir, setDir] = useState("rtl-body");

  const { t, i18n } = useTranslation();

  function setDirection() {
    if (dir == "rtl-body") {
      setDir("ltr-body");
      i18n.changeLanguage("en");
    } else {
      setDir("rtl-body");
      i18n.changeLanguage("ar");
    }
  }

  return (
    <Suspense fallback="loading">
      <div
        className={`antialiased bg-gray-50 text-slate-500  min-h-screen ${dir}`}
      >
        {/* {t("intro.label")} */}
        <main className="xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200">
          <Header changeDir={setDirection} />
          <div className="w-full px-6 py-6 mx-auto ">
            <TopBar />
          </div>
          <div className="w-full px-6 py-6 mx-auto ">
            <ChartRow render={dir} />
          </div>
        </main>
      </div>
    </Suspense>
  );
}

export default Index;
