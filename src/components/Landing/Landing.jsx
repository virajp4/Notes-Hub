import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Button from "react-bootstrap/Button";

import "./Landing.css";

export default function Landing() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="landing">
      <div className="landing-content">
        <div
          className="landing-title mb-1"
          data-aos="fade"
          data-aos-duration="1000"
        >
          <span class="head1">Notes</span>
          <span class="head2">Hub</span>
        </div>
        <div className="d-flex flex-col justify-content-center align-items-center">
          <p
            className="mb-5 text-center"
            data-aos="fade"
            data-aos-delay="1000"
            data-aos-duration="500"
          >
            Exams tomorrow? We've got you covered.
          </p>
          <Button
            className="landing-button"
            variant="dark"
            size="lg"
            href="/home"
            data-aos="fade-up"
            data-aos-delay="2000"
          >
            🎯 Take me in 🚀
          </Button>
        </div>
      </div>
    </div>
  );
}
