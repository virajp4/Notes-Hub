import { useState, useEffect, useContext } from "react";
import axios from "axios";

import { NotesContext } from "../../contexts/notes-context";
import Subject from "./Subject";

export default function DisplaySubjects({ category }) {
  const { year } = useContext(NotesContext);
  const [data, setData] = useState([]);

  const serverAPI = import.meta.env.VITE_SERVERAPI;
  const adminUsername = import.meta.env.VITE_ADMIN_USERNAME;
  const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${serverAPI}/subjects?year=${year}`);
        const data = response.data;
        // console.log(data);
        // const sortedData = sortSubjectData(data);
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [year]);

  const handleDelete = (subject) => {
    axios.delete(`/subjects/${subject._id}`, {
      params: {
        username: adminUsername,
        password: adminPassword,
      }
    }).then((res) => {
      console.log("Subject deleted successfully");
      setData(res.data);
    });
  };

  function isValidSUbject(subject) {
    if (category === "A") return subject.year === year;
    return year === subject.year && subject.category === category;
  }

  function sortSubjectData(data) {
    const sortedData = data
    sortedData.sort((a, b) => {
      if (a.title < b.title) return -1;
      return 1;
    });

    return sortedData;
  }

  return (
    year > 0 && (
      <div className="text-white text-center pb-16 w-full flex flex-col items-center mt-16">
        <h1 className="text-5xl font-extrabold dark:text-white">Year {year}</h1>
        <div className="text-2xl w-[85%] md:w-[60%] mx-auto my-5">
          {data &&
            data.map(
              (subject, index) =>
                isValidSUbject(subject) && (
                  <Subject key={subject._id} title={subject.title} href={subject.link} id={subject._id} handleOnDelete={() => handleDelete(subject)} />
                )
            )}
          {!data && <i class="fa-solid fa-spinner fa-spin"></i>}
        </div>
      </div>
    )
  );
}
