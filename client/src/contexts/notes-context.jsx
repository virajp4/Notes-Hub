import { useReducer, createContext } from "react";

import firstYearData from "../../../data/first-year";
import secondYearData from "../../../data/second-year";
import thirdYearData from "../../../data/third-year";
import fourthYearData from "../../../data/fourth-year";

export const NotesContext = createContext({
  year: 0,
  setYear: () => {},
  getData: {},
});

function yearReducer(state, action) {
  switch (action.type) {
    case "SET_YEAR":
      return {
        ...state,
        year: action.payload.year,
        data: action.payload.data,
      };
    default:
      return state;
  }
}

export default function NotesProvider({ children }) {
  const [yearState, yearDispatch] = useReducer(yearReducer, {
    year: 0,
  });

  function handleSetYear(year) {
    const subjects = {
      1: firstYearData,
      2: secondYearData,
      3: thirdYearData,
      4: fourthYearData,
    };
    yearDispatch({
      type: "SET_YEAR",
      payload: {
        year,
        data: subjects[year],
      },
    });
  }

  const ctxValue = {
    year: yearState.year,
    setYear: handleSetYear,
    data: yearState.data,
  };

  return <NotesContext.Provider value={ctxValue}>{children}</NotesContext.Provider>;
}
