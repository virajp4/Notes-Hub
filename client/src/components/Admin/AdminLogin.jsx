import React, { useContext } from "react";
import { NotesContext } from "../../contexts/notes-context";
import { Navigate } from "react-router-dom";

export default function AdminLogin() {
  const { isAdmin, handleLogin } = useContext(NotesContext);

  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(formData.username, formData.password);
    setFormData((prev) => ({
      ...prev,
      username: "",
      password: "",
    }));
  };

  if (isAdmin) {
    return <Navigate to="/admin" />;
  }
  
  return (
    <div className="min-h-screen h-fill bg-black scroll-smooth">
      <div className="text-white h-screen w-screen flex justify-center items-center">
        <div className="heading flex flex-col justify-center items-center text-center">
          <h1 className="mb-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            <span className="text-blue-600 dark:text-blue-500">Admin Login</span>
          </h1>
          <form className="flex flex-col items-center justify-center w-[110%] text-black" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              className="w-full p-2 rounded-md mb-4"
              value={formData.username}
              onChange={handleChange}
              name="username"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 rounded-md mb-4"
              value={formData.password}
              onChange={handleChange}
              name="password"
            />
            <button className="w-[60%] p-2 rounded-md mb-4 bg-blue-600 text-white">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
