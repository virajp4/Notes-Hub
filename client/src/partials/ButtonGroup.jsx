import { useContext } from "react";

import { NotesContext } from "../contexts/notes-context";

export default function ButtonGroup({ totalYears }) {
  const yearOne = `px-4 py-2 text-sm text-white border border-blue-600 rounded-s-lg hover:bg-blue-600 focus:z-10 focus:text-white focus:bg-blue-700 bg-transparent`;

  const yearTwo = `px-4 py-2 text-sm text-white border-t border-b border-blue-600 hover:bg-blue-600 focus:z-10 focus:text-white focus:bg-blue-700 g-transparent`;

  const yearThree = `px-4 py-2 text-sm text-white border-t border-b border-l border-blue-600 hover:bg-blue-600 focus:z-10 focus:text-white focus:bg-blue-700 g-transparent`;

  const yearFour = `px-4 py-2 text-sm text-white border border-blue-600 rounded-e-lg hover:bg-blue-600 focus:z-10 focus:text-white focus:bg-blue-700 bg-transparent`;

  const { setYear } = useContext(NotesContext);

  return totalYears === 4 ? (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      <button type="button" className={yearOne} onClick={() => setYear(1)}>
        Year 1
      </button>
      <button type="button" className={yearTwo} onClick={() => setYear(2)}>
        Year 2
      </button>
      <button type="button" className={yearThree} onClick={() => setYear(3)}>
        Year 3
      </button>
      <button type="button" className={yearFour} onClick={() => setYear(4)}>
        Year 4
      </button>
    </div>
  ) : (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      <button type="button" className={yearOne} onClick={() => setYear(1)}>
        Year 1
      </button>
      <button type="button" className={yearFour} onClick={() => setYear(2)}>
        Year 2
      </button>
    </div>
  );
}
