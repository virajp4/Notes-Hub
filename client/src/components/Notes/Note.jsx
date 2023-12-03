import React from "react";

import Subject from "./Subject";

import firstYearData from "../../../../data/first-year";
import secondYearData from "../../../../data/second-year";
import thirdYearData from "../../../../data/third-year";
import fourthYearData from "../../../../data/fourth-year";

export default function Note({ year }) {
  const id = `year-${year}`;
  const data = year === 1 ? firstYearData : year === 2 ? secondYearData : year === 3 ? thirdYearData : fourthYearData;
  console.log(year, data);
  return (
    <div className="text-white text-center pb-16 w-full flex flex-col items-center" id={id}>
      <h1 className="text-5xl font-extrabold dark:text-white">Year {year}</h1>
      <div className="text-2xl w-[60%] mx-auto my-5">
        {data.map((subject, key) => (
          <Subject key={key} title={subject.title} href={subject.href} id={key} />
        ))}
      </div>
    </div>
  );
}
