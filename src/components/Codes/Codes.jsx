import React from 'react'

import NavBar from '../../partials/NavBar/NavBar'

export default function Codes() {
  return (
    <div className="bg-black h-full w-screen relative">
      <NavBar active="E-Lab Solutions" />
      <div className="h-screen w-screen bg-black">
        <div className="h-[60%] bg-ElabBG bg-cover bg-bottom relative">test</div>
        <div className="h-full bg-black relative">test</div>
      </div>
    </div>
  );
}
