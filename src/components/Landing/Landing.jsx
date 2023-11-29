import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Landing.css";

export default function Landing() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="landing" className="h-screen bg-black flex justify-center algin-center flex-col">
      <div className="landing-title mb-1 w-screen flex justify-center align-center text-[3.3rem] md:text-[5.4rem]" data-aos="fade" data-aos-duration="1000">
        <span class="head1 d-block text-white pr-[3px]">Notes</span>
        <span class="head2 d-block bg-orange-500 rounded-lg text-black font-bold px-[2px]">Hub</span>
      </div>
      <div className="grid justify-items-center text-center">
        <p className="mb-4 text-white tracking-widest text-center text-[1.35rem] mt-2" data-aos="fade" data-aos-delay="1000" data-aos-duration="500">
          Exams tomorrow? We've got you covered.
        </p>
        <button
          className="landing-button w-[12rem] text-lg text-white border-2 border-white rounded-3xl hover:border-orange-500  active:border-orange-700 py-2 mt-2"
          type="button"
          data-aos="fade-up"
          data-aos-delay="2000"
        >
          <a href="/home">🎯 Take me in 🚀</a>
        </button>
      </div>
    </div>
  );
}
