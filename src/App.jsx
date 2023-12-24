import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Navigate } from "react-router-dom";

import Home from "./components/Home/Home";
import Codes from "./components/Codes/Codes";
import Notes from "./components/Notes/Notes";
import AdminLogin from "./components/Admin/AdminLogin";
import Admin from "./components/Admin/Admin";
import './App.css';

import NotesProvider from "./contexts/notes-context";

function App() {
  const router = createBrowserRouter(
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <RouterProvider router={router} />
    </NotesProvider>
  );
}

export default App;
