import React from "react";

export default function Footer() {
  return (
    <div className="min-w-screen bg-black text-white font-bebas">
      <div className="w-full flex flex-col items-center justify-center py-8">
        <div className="flex flex-row items-center justify-center tracking-wider text-2xl">
          <h1>Made by&nbsp;</h1>
          <a href="https://linktr.ee/virajp4" className="text-blue-600" target="_blank">Viraj</a>
        </div>
      </div>
    </div>
  );
}
