import React from "react";

export default function NavItem({ href, target = "", children, isactive = false }) {
  const classes = `group relative inline-block text-xl text-center ${
    isactive ? "bg-blue-700 rounded-2 text-white" : "bg-transparent text-white hover:text-white"
  } tracker-wide overflow-hidden rounded px-12 py-3 font-medium ocus:outline-none active:text-white cursor-pointer`;

  const spanClasses = [
    `ease absolute left-0 top-0 h-0 w-0 border-t-[2px] border-blue-500 transition-all duration-300 group-hover:w-full`,
    `ease absolute right-0 top-0 h-0 w-0 border-r-[2px] border-blue-500 transition-all duration-300 group-hover:h-full`,
    `ease absolute bottom-0 right-0 h-0 w-0 border-b-[2px] border-blue-500 transition-all duration-300 group-hover:w-full`,
    `ease absolute bottom-0 left-0 h-0 w-0 border-l-[2px] border-blue-500 transition-all duration-300 group-hover:h-full`,
  ];

  return (
    <a href={href} target={target} className={classes}>
      {!isactive && (
        <>
          <span className={spanClasses[0]}></span>
          <span className={spanClasses[1]}></span>
          <span className={spanClasses[2]}></span>
          <span className={spanClasses[3]}></span>
        </>
      )}
      {children}
    </a>
  );
}
