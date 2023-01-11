import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import { useTranslation } from "react-i18next";

function SparkChart({ data, pcolor }) {
  const ref = useRef();

  const { t, i18n } = useTranslation();
  let keydata = data;
  let color = pcolor;

  useEffect(() => {
    const svgElement = d3.select(ref.current);

    svgElement.selectAll("svg > *").remove();

    const WIDTH = 300;
    const HEIGHT = 30;
    const MARGIN = { top: 5, right: 5, bottom: 5, left: 5 };
    const INNER_WIDTH = WIDTH - MARGIN.left - MARGIN.right;
    const INNER_HEIGHT = HEIGHT - MARGIN.top - MARGIN.bottom;
    const DATA_COUNT = 10;
    // let key =

    let key = keydata;

    let d1 = 0;
    let d2 = DATA_COUNT;
    if (i18n.language == "ar") {
      d1 = DATA_COUNT;
      d2 = 0;
    }

    let min = Math.min(...key);
    let max = Math.max(...key);
    const data = d3.range([DATA_COUNT]).map((d) => key[d]);




    const x = d3.scaleLinear().domain([d1, d2]).range([0, INNER_WIDTH]);
    const y = d3.scaleLinear().domain([min, max]).range([INNER_HEIGHT, 1]);

  

    let Gradientid = "gradient" + Math.random() * 50;
    svgElement
      .append("defs")
      .append("linearGradient")
      .attr("id", Gradientid)
      .attr("x1", 0).attr("y1", 0)			
      .attr("x2", 0).attr("y2",1)	
      // .attr("x1", "0")
      // .attr("y1", "0")
      // .attr("x2", "0")
      // .attr("y2", "1");

    svgElement
      .selectAll("linearGradient")
      .append("stop")
      .attr("offset", "0")
      .attr("stop-color", color)
      .attr("stop-opacity", "0.5");

    svgElement
      .selectAll("linearGradient")
      .append("stop")
      .attr("offset", "1")
      .attr("stop-color", color)
      .attr("stop-opacity", "0");

    svgElement
      .attr("viewBox", "0 0 " + (WIDTH + 20) + " " + HEIGHT + "")
      .append("g")
      .attr("transform", "translate(" + MARGIN.left + "," + MARGIN.top + ")");

    const line = d3
      .line()
      .x((d, i) => x(i))
      .y((d) => y(d));


      var	area = d3.area()	
      .x((d, i) => x(i))
    .y0(HEIGHT)					
    .y1((d) => y(d));
     

    svgElement
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke-width", 4)
      .attr("d", line)
      .attr("stroke", color);


      svgElement
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke-width", 3)
      .attr("d", area)
      .attr("fill", "url(#" + Gradientid + ")");

      // svgElement
      // .append("path")
      // .datum(data)
      // .attr("fill", "none")
      // .attr("stroke-width", 3)
      // .attr("d", area)
      // .attr("fill", "url(#" + Gradientid + ")");

    svgElement
      .append("circle")
      .attr("r", 2)
      .attr("cx", x(0))
      .attr("cy", y(keydata[0]))
      .attr("fill", "steelblue");

    svgElement
      .append("circle")
      .attr("r", 2)
      .attr("cx", x(DATA_COUNT - 1))
      .attr("cy", y(keydata[DATA_COUNT - 1]))
      .attr("fill", "tomato");
  }, [color, keydata, data]);

  return (
    <>
      <svg ref={ref}></svg>
    </>
  );
}

export default SparkChart;
