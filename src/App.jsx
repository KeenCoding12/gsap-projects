import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import HorizontalScroll from "./components/HorizontalScroll";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  smooth: 1,
  effects: true,
  smoothTouch: 0.1,
});

export default function App() {
  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HorizontalScroll />
        </div>
      </div>
    </>
  );
}
