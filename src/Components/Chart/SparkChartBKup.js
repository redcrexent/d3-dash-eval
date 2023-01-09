import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

export const SparkChartBKUP = ({ data }) => {
  const ref = useRef();

  const generateDataset = () =>
    Array(5)
      .fill(0)
      .map(() => [Math.random() * 80 + 10, Math.random() * 35 + 10]);

  const [dataset, setDataset] = useState(generateDataset());

  useEffect(() => {
    const svgElement = d3.select(ref.current);
    svgElement.selectAll("circle")
      .data(dataset)
      .join("circle")
      .attr("cx", d=> d[0])
      .attr("cy", d=> d[1])
      .attr("r", 10);

     
  }, [dataset]);

  useEffect(()=>{
    const interval = setInterval(() => {
        const newDataset = generateDataset()
        setDataset(newDataset)
      }, 2000);

  },[]);

  return (
    <>
      <svg ref={ref}></svg>
    </>
  );
};
