import React from "react";

export default function ButtonGroup({ totalYears }) {
  function seekYear(year) {
    const element = document.getElementById(`year-${year}`);
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  return totalYears === 4 ? (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      <button
        type="button"
        onClick={() => {
          seekYear(1);
        }}
        className="px-4 py-2 text-sm text-white bg-transparent border border-blue-600 rounded-s-lg hover:bg-blue-600 focus:z-10 focus:text-white focus:bg-blue-700"
      >
        Year 1
      </button>
      <button
        type="button"
        onClick={() => {
          seekYear(2);
        }}
        className="px-4 py-2 text-sm text-white bg-transparent border-t border-b border-blue-600 hover:bg-blue-600 focus:z-10 focus:text-white focus:bg-blue-700"
      >
        Year 2
      </button>
      <button
        type="button"
        onClick={() => {
          seekYear(3);
        }}
        className="px-4 py-2 text-sm text-white bg-transparent border-t border-b border-l border-blue-600 hover:bg-blue-600 focus:z-10 focus:text-white focus:bg-blue-700"
      >
        Year 3
      </button>
      <button
        type="button"
        onClick={() => {
          seekYear(4);
        }}
        className="px-4 py-2 text-sm text-white bg-transparent border border-blue-600 rounded-e-lg hover:bg-blue-600 focus:z-10 focus:text-white focus:bg-blue-700"
      >
        Year 4
      </button>
    </div>
  ) : (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      <button
        type="button"
        onClick={() => {
          seekYear(1);
        }}
        className="px-4 py-2 text-sm text-white bg-transparent border border-blue-600 rounded-s-lg hover:bg-blue-600 focus:z-10 focus:text-white focus:bg-blue-700"
      >
        Year 1
      </button>
      <button
        type="button"
        onClick={() => {
          seekYear(4);
        }}
        className="px-4 py-2 text-sm text-white bg-transparent border border-blue-600 rounded-e-lg hover:bg-blue-600 focus:z-10 focus:text-white focus:bg-blue-700"
      >
        Year 4
      </button>
    </div>
  );
}
