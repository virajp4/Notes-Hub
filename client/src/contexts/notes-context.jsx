import { useReducer, createContext } from "react";

export const NotesContext = createContext({
  year: 0,
  setYear: () => {},
});

function yearReducer(state, action) {
  switch (action.type) {
    case "SET_YEAR":
      return {
        ...state,
        year: action.payload.year,
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
    yearDispatch({
      type: "SET_YEAR",
      payload: {
        year,
      },
    });
  }

  const ctxValue = {
    year: yearState.year,
    setYear: handleSetYear,
  };

  return <NotesContext.Provider value={ctxValue}>{children}</NotesContext.Provider>;
}
