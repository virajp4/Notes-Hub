import React from "react";

import MobileView from "./Views/MobileView";
import TabletView from "./Views/TabletView";
import LaptopView from "./Views/LaptopView";
import DesktopView from "./Views/DesktopView";
import ExtraLargeView from "./Views/ExtraLargeView";

export default function Home() {
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Detach the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // empty dependency array means this effect runs once after the initial render

  return (
    <>
    <MobileView />
    <TabletView />
    <LaptopView />
    <DesktopView />
    <ExtraLargeView />
    </>
  );
}
