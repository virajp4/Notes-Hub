import { useReducer, createContext } from "react";

const ADMIN_USER = import.meta.env.VITE_ADMIN_USERNAME;
const ADMIN_PASS = import.meta.env.VITE_ADMIN_PASSWORD;

export const NotesContext = createContext({
  year: 0,
  setYear: () => {},
  isAdmin: false,
  handleLogin: () => {},
  loading: true,
  setLoading: () => {},
});

function yearReducer(state, action) {
  switch (action.type) {
    case "SET_YEAR":
      return {
        ...state,
        year: action.payload.year,
        loading: true,
      };
    case "LOGIN":
      return {
        ...state,
        isAdmin: action.payload.username === ADMIN_USER && action.payload.password === ADMIN_PASS,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload.loading,
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

  function handleLogin(username, password) {
    yearDispatch({
      type: "LOGIN",
      payload: {
        username,
        password,
      },
    });
  }

  function setLoading(loading) {
    yearDispatch({
      type: "SET_LOADING",
      payload: {
        loading,
      },
    });
  }

  const ctxValue = {
    year: yearState.year,
    setYear: handleSetYear,
    isAdmin: yearState.isAdmin,
    handleLogin: handleLogin,
    loading: yearState.loading,
    setLoading: setLoading,
  };

  return <NotesContext.Provider value={ctxValue}>{children}</NotesContext.Provider>;
}
