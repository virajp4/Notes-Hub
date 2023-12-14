import { useState, useEffect, useContext } from "react";
import axios from "axios";

import { NotesContext } from "../../contexts/notes-context";
import Subject from "./Subject";

export default function Note() {
  const { year } = useContext(NotesContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/notes");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [year]);

  const handleDelete = (subject) => {
    axios.delete(`http://localhost:4000/notes/${subject._id}`).then((res) => {
      console.log("Subject deleted successfully");
      setData(res.data);
    });
  };

  return (
    year > 0 && (
      <div className="text-white text-center pb-16 w-full flex flex-col items-center mt-16">
        <h1 className="text-5xl font-extrabold dark:text-white">Year {year}</h1>
        <div className="text-2xl w-[85%] md:w-[60%] mx-auto my-5">
          {data &&
            data.map((subject, index) => year === subject.year && <Subject key={index} title={subject.title} href={subject.link} id={index} handleOnDelete={() => handleDelete(subject)}/>)}
        </div>
      </div>
    )
  );
}
