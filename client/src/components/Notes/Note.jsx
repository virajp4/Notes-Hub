import { useContext } from "react";
import { NotesContext } from "../../contexts/notes-context";

import Subject from "./Subject";

export default function Note() {
  const { year, data } = useContext(NotesContext);

  return (year>0 &&
    <div className="text-white text-center pb-16 w-full flex flex-col items-center mt-16">
      <h1 className="text-5xl font-extrabold dark:text-white">Year {year}</h1>
      <div className="text-2xl w-[85%] md:w-[60%] mx-auto my-5">
        {data && data.map((subject, key) => (
          <Subject key={key} title={subject.title} href={subject.href} id={key} />
        ))}
      </div>
    </div>
  );
}
