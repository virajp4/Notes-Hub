import React from "react";

export default function Subject({ title, href, id, handleOnDelete }) {
  return (
    <button
      type="button"
      id={id}
      className="m-3 px-4 py-2 text-sm font-medium text-white bg-transparent border border-blue-600 rounded-lg hover:bg-blue-600 active:z-10 active:text-white active:bg-blue-700 transform active:scale-90 transition-transform"
    >
      <a href={href} target="_blank">
        {title}
      </a>
      <i className="fa-solid fa-xmark pl-3" onClick={handleOnDelete}></i>
    </button>
  );
}
