import React from "react";
import BarChart from "../Chart/BarChart";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

function ChartRow({ render }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap mt-6 -mx-3">
      <div className="w-full max-w-full px-3 mt-0 mb-6 lg:mb-0 lg:w-5/12 lg:flex-none">
        <div className="border-black/12.5 shadow-soft-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
          <div className="flex-auto p-4 shadow-lg rounded-2xl">
            <div className="py-4 pr-1 mb-4 bg-gradient-to-tl rounded-xl lg:ml-20">
              <BarChart render={render} />
            </div>
            <div className="mt-6 mb-0 ml-2 font-semibold">
              {t("current.price")}
            </div>
            <p className="ml-2 leading-normal text-sm">
              <span className="font-bold">+3%</span> {t("lastweek")}
            </p>
            <div className="w-full px-6 mx-auto max-w-screen-2xl rounded-xl"></div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-full px-3 mt-0 lg:w-7/12 lg:flex-none">
        <div className="border-black/12.5 shadow-soft-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
          <div className="border-black/12.5 mb-0 rounded-t-2xl shadow-lg rounded-2xl border-b-0 border-solid bg-white p-3 pb-0">
            <h6>{t("sales.overview")}</h6>
            <p className="leading-normal text-sm flex">
              <ArrowUpIcon className="text-lime-500 h-4 w-4 font-extrabold" />
              <span className="font-semibold">+4%</span> {t("in2021")}
            </p>
            {/* </div>
        </div> */}
            <div className="flex-auto p-4">
              <div>
                <BarChart render={render} />
              </div>
              <div className="mt-0 mb-0 ml-2 font-semibold">
                {t("current.price")}
              </div>
              <p className="ml-2 leading-normal text-sm">
                <span className="font-bold">+3%</span> {t("lastweek")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartRow;
