import { useState, useEffect, useContext, useDeferredValue } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { NotesContext } from "../../contexts/notes-context";
import Subject from "./Subject";

export default function DisplaySubjects({ category }) {
  const { year, loading, setLoading } = useContext(NotesContext);
  const [data, setData] = useState([]);

  const serverAPI = import.meta.env.VITE_SERVERAPI;
  const adminUsername = import.meta.env.VITE_ADMIN_USERNAME;
  const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!loading) return;
        const response = await toast.promise(axios.get(`${serverAPI}/subjects?year=${year}`), {
          pending: {
            render() {
              return "Fetching data...";
            },
            position: "top-right",
            theme: "dark",
            className: "font-bebas text-xl tracking-wider",
          },
          success: {
            render() {
              return "Data fetched.";
            },
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
            className: "font-bebas text-xl tracking-wider",
          },
          error: "Error fetching data.",
        });
        const data = response.data;
        const sortedData = sortSubjectData(data);
        setData(sortedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, [year, loading]);

  const handleDelete = async (subject) => {
    try {
      const data = await toast.promise(
        axios.delete(`${serverAPI}/subjects/${subject._id}`, {
          params: {
            username: adminUsername,
            password: adminPassword,
          },
        }),
        {
          pending: "Deleting subject...",
          success: "Subject Deleted.",
          error: "Error deleting.",
        }
      );
    } catch (error) {
      toast.error("Error deleting subject.");
    }
    setData(data);
  };

  function isValidSUbject(subject) {
    if (category === "A") return subject.year === year;
    return year === subject.year && subject.category === category;
  }

  function sortSubjectData(data) {
    const sortedData = data.filter((subject) => isValidSUbject(subject));
    sortedData.sort((a, b) => {
      if (a.title < b.title) return -1;
      return 1;
    });

    return sortedData;
  }

  return (
    year > 0 && (
      <div className="text-white text-center pb-16 w-full flex flex-col items-center mt-16">
        <h1 className="text-5xl font-extrabold">Year {year}</h1>
        <div className="text-2xl w-[85%] md:w-[60%] mx-auto my-5">
          {!loading ? (
            data.length === 0 ? (
              <p className="text-xl">No subjects found. Please consider contributing to help other students.</p>
            ) : (
              data.map((subject) => (
                <Subject key={subject._id} title={subject.title} href={subject.link} id={subject._id} handleOnDelete={() => handleDelete(subject)} />
              ))
            )
          ) : (
            <i className="fa-solid fa-spinner fa-spin text-white"> </i>
          )}
        </div>
      </div>
    )
  );
}
