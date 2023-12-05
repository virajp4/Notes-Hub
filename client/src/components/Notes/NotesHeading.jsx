import React from 'react'

import ButtonGroup from "../../partials/ButtonGroup";

export default function NotesHeading({ highlight }) {
  return (
      <>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Access <span className="text-blue-600 dark:text-blue-500">all-year notes</span> conveniently in one
          <span className="text-blue-600 dark:text-blue-500"> centralized</span> location.
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mb-7">
          Ditch the hassle of hunting for notes everywhere - grab them all in one go and give your CTs the next day.
        </p>
      </>
  );
}
