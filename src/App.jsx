import React from "react";
import { useContext } from "react";
import { NotesContext } from "./contexts/notes-context";
import { Route, createHashRouter, createRoutesFromElements, RouterProvider, Navigate } from "react-router-dom";

import Home from "./components/Home/Home";
import Codes from "./components/Codes/Codes";
import Notes from "./components/Notes/Notes";
import AdminLogin from "./components/Admin/AdminLogin";
import Admin from "./components/Admin/Admin";

import NotesProvider from "./contexts/notes-context";

function App() {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/codes" element={<Codes />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    )
  );

  return (
    <NotesProvider>
      <RouterProvider router={router} />
    </NotesProvider>
  );
}

export default App;
