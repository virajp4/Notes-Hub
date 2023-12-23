import NavBar from "../../partials/NavBar/NavBar";
import Heading from "../../partials/Content/Heading";
import ButtonGroup from "../../partials/Content/ButtonGroup";
import DisplaySubjects from "../../partials/Content/DisplaySubjects";
import Footer from "../../partials/Footer/Footer";

export default function Notes() {
  return (
    <div className="min-h-screen h-fill bg-black scroll-smooth">
      <NavBar active="Notes" />
      <div className="text-white pt-32 min-h-[85vh]">
        <div className="heading w-full flex flex-col items-center text-center">
          <div className="w-[80%]">
            <Heading type="Notes" />
            <ButtonGroup totalYears={4} />
          </div>
        </div>
        <div className="notes-content mt-16 w-[100%]">
          <div className="notes-grid">
            <DisplaySubjects category="N" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
