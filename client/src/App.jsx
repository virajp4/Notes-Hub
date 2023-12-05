import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

import Home from "./components/Home/Home";
import Codes from "./components/Codes/Codes";
import Notes from "./components/Notes/Notes";

import "./App.css";
import NotesProvider from "./contexts/notes-context";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/codes" element={<Codes />} />
      <Route path="/notes" element={<Notes />} />
    </Route>
  )
);

function App({ routes }) {
  return (
    <NotesProvider>
      <RouterProvider router={router} />
    </NotesProvider>
  );
}

export default App;
