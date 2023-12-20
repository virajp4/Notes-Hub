import React from "react";

export default function Heading({ type }) {
  const content =
    type === "Notes" ? (
      <>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Access <span className="text-blue-600 dark:text-blue-500">all-year notes</span> at your
          <span className="text-blue-600 dark:text-blue-500"> fingertips.</span>
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mb-7">
          Ditch the hassle of hunting for notes everywhere - get them in one go and give your CTs the next day.
        </p>
      </>
    ) : (
      <>
        <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white mb-4 ">
          Stuck in an <span className="text-blue-600 dark:text-blue-500">E-Lab</span> problem? <br></br> I got you.
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mb-7">
          Get all E-Lab Solutions from a single PDF. Copy pasting made easier.
        </p>
      </>
    );
  return content;
}
