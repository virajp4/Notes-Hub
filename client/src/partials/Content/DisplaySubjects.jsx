import { useState, useEffect, useContext } from "react";
import axios from "axios";

import { NotesContext } from "../../contexts/notes-context";
import Subject from "./Subject";

export default function DisplaySubjects({ category }) {
  const { year } = useContext(NotesContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/subjects?year=" + year);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [year]);

  const handleDelete = (subject) => {
    axios.delete(`http://localhost:4000/subjects/${subject._id}`).then((res) => {
      console.log("Subject deleted successfully");
      setData(res.data);
    });
  };

  function isValidSUbject(subject) {
    return year === subject.year && subject.category === category;
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
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
        </div>
      </div>
    )
  );
}
