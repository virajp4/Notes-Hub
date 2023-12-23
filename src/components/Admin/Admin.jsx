import React from "react";
import { Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";

import { NotesContext } from "../../contexts/notes-context";
import NavBar from "../../partials/NavBar/NavBar";
import ButtonGroup from "../../partials/Content/ButtonGroup";
import DisplaySubjects from "../../partials/Content/DisplaySubjects";

export default function Admin() {
  const { isAdmin } = useContext(NotesContext);
  const serverAPI = import.meta.env.VITE_SERVERAPI;
  const adminUsername = import.meta.env.VITE_ADMIN_USERNAME;
  const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

  const [formData, setFormData] = useState({
    title: "",
    link: "",
    category: "",
    year: 0,
  });

  const handleOnChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios.post(`${serverAPI}/subjects/add`, formData, {
      params : {
        username: adminUsername,
        password: adminPassword,
      }
    }).then((res) => {
      console.log("Subject added successfully");
    });

    setFormData((prev) => ({
      ...prev,
      title: "",
      link: "",
      category: "",
      year: 0,
    }));
  }

  return isAdmin ? (
    <div className="min-h-screen h-fill bg-black scroll-smooth">
      <NavBar active="Admin" />
      <div className="text-white pt-32">
        <div className="heading w-full flex flex-col items-center text-center">
          <div className="w-[80%]">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Welcome Back,&nbsp;<span className="text-blue-600 dark:text-blue-500">Viraj.</span>
            </h1>
            <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mb-7">Here's all the data you need.</p>
          </div>
          <ButtonGroup totalYears={4} />
        </div>
        <div className="codes-content mt-16 w-[100%]">
          <div className="codes-grid">
            <DisplaySubjects category="A" />
          </div>
        </div>
        {/* add a form to add more subjects */}
        <form className="flex flex-col items-center justify-center text-black" onSubmit={handleOnSubmit}>
          <div className="w-[60%] flex flex-col justify-center items-center">
            <input
              type="text"
              placeholder="Subject Name"
              className="w-full p-2 rounded-md mb-4"
              value={formData.title}
              onChange={handleOnChange}
              name="title"
            />
            <input
              type="text"
              placeholder="Subject Link"
              className="w-full p-2 rounded-md mb-4"
              value={formData.link}
              onChange={handleOnChange}
              name="link"
            />
            <input
              type="text"
              placeholder="Subject Category"
              className="w-full p-2 rounded-md mb-4"
              value={formData.category}
              onChange={handleOnChange}
              name="category"
            />
            <input
              type="text"
              placeholder="Subject Year"
              className="w-full p-2 rounded-md mb-4"
              value={formData.year}
              onChange={handleOnChange}
              name="year"
            />
            <button className="w-[60%] p-2 rounded-md mb-4 bg-blue-600 text-white">Add</button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <Navigate to="/admin/login" />
  );
}
