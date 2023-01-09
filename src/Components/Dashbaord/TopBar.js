import React from "react";
import Metric from "./Metric";
import { useTranslation } from "react-i18next";

function TopBar() {
  const { t } = useTranslation();

  let nas100 = [
    10956.14, 10985.45, 10822.51, 10679.34, 10951.05, 10939.76, 10862.64,
    10914.8, 10741.22, 11040.35,
  ];

  let djia = [
    33630.61, 33203.93, 33241.56, 32875.71, 33220.8, 33147.25, 33136.37,
    33269.77, 32930.08, 33630.61,
  ];

  let gold = [
    1809.7, 1823.1, 1808.8, 1826.0, 1826.2, 1835.8, 1846.1, 1859.0, 1840.6,
    1869.7,
  ];

  let oil = [
    78.45, 79.34, 80.97, 79.77, 78.6, 78.61, 80.47, 80.47, 77.09, 73.38,
  ];

  return (
    <>
      <div className="flex flex-wrap mx-3">
        <Metric
          MetricName={t("nasdaq")}
          MetricValue="11040.35"
          Change="2.78"
          dataset={nas100}
        />
        <Metric
          MetricName={t("djia")}
          MetricValue="33630.61"
          Change="2.13"
          dataset={djia}
        />
        <Metric
          MetricName={t("oil")}
          MetricValue="73.38"
          Change="-1.65"
          dataset={oil}
        />
        <Metric
          MetricName={t("gold")}
          MetricValue="1,869.70"
          Change="1.58"
          dataset={gold}
        />
      </div>
    </>
  );
}

export default TopBar;
