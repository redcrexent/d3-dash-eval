import React from "react";
import SparkChart from "../Chart/SparkChart";

function Metric({ MetricName, MetricValue, Change, dataset }) {
  return (
    <div className="w-full max-w-full px-1 mb-6 sm:w-full lg:w-1/2 md:w-1/2 sm:flex-none xl:mb-0 xl:w-1/3  ">
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded-2xl bg-clip-border">
        <div className="flex-auto p-4 shadow-lg rounded-lg">
          <div className="flex flex-row">
            <div className="w-5/12">
              <p className="mb-0 font-sans font-bold leading-normal text-lg">
                {MetricName}
              </p>
              <h5 className="mb-0 leading-3">
                {MetricValue}
                <span
                  className={`leading-3 text-sm ${
                    Change > 0 ? "text-lime-500" : "text-red-500"
                  }`}
                >
                  {Change}%
                </span>
              </h5>
            </div>
            <div className="w-3/5 px-3 text-right mt-3">
              <SparkChart
                data={dataset}
                pcolor={Change > 0 ? "rgb(190 242 100)" : "rgb(252 165 165)"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Metric;
