import React from "react";

import MobileView from "./Views/MobileView";
import TabletView from "./Views/TabletView";
import LaptopView from "./Views/LaptopView";
import DesktopView from "./Views/DesktopView";
import ExtraLargeView from "./Views/ExtraLargeView";

export default function Home() {

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
