import { useState } from "react";
import axios from "axios";

export default function AddNotes() {
  const [subject, setSubject] = useState({
    title: "",
    link: "",
    year: 1,
    category: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setSubject((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleAddSubject = () => {
    axios.post("http://localhost:4000/notes/add", subject).then((res) => {
      console.log("Subject added successfully");
    });

    setSubject({
      title: "",
      link: "",
      year: 1,
      category: "",
    });
  };

  return (
    <div>
      <h1>Add Notes</h1>
      <form>
        <label>
          Subject Name:
          <input type="text" value={subject.title} onChange={handleInputChange} name="title" />
        </label>
        <label>
          Link:
          <input type="text" value={subject.link} onChange={handleInputChange} name="link" />
        </label>
        <label>
          Year:
          <input type="number" value={subject.year} onChange={handleInputChange} name="year" />
        </label>
        <label>
          Category:
          <input type="text" value={subject.category} onChange={handleInputChange} name="category" />
        </label>
        <button type="button" onClick={handleAddSubject}>
          Add Subject
        </button>
      </form>
    </div>
  );
}
