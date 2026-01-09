import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const images = [
  "/images/img-1.jpg",
  "/images/img-2.jpg",
  "/images/img-3.jpg",
  "/images/img-4.jpg",
  "/images/img-5.jpg",
];

export default function HorizontalScroll() {
  const containerRef = useRef();
  const imagesRef = useRef();
  const triggerRef = useRef();

  useGSAP(
    () => {
      const imgs = imagesRef.current;
      gsap.to(imgs, {
        x: () => -(imgs.scrollWidth - window.innerWidth),
        scrollTrigger: {
          trigger: triggerRef.current, // Start animation when this section hits the viewport
          pin: true, // Keep section fixed while scrolling
          scrub: 1, // Smoothly link scroll position to animation
          start: "top top", // Start when top of section hits top of viewport
          end: () => `+=${imgs.scrollWidth}`, // Scroll distance based on content width
          // markers: true,
        },
      });
    },
    { containerRef }
  );
  return (
    <section ref={containerRef}>
      {/* Intro */}
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-5xl lg:text-8xl">
          Horizontal
          <div className="flex items-center gap-5 text-lime-500">
            Scroll
            <img
              src="/images/right-arrow.png"
              alt="right arrow icon"
              width={120}
              height={120}
            />
          </div>
        </h1>
      </section>

      {/* Wrapper */}
      <section
        className="bg-emerald-900/20 overflow-hidden images-section"
        ref={triggerRef}
      >
        <div className="flex flex-nowrap items-center  h-screen will-change-transform">
          <div
            className="flex flex-nowrap gap-4 images-wrapper"
            ref={imagesRef}
          >
            {images.map((img, index) => (
              <div className="w-[35vw] shrink-0 p-5 bg-lime-600" key={index}>
                <img
                  src={img}
                  alt="img"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="py-40 flex items-center justify-center">
        <h2 className="text-5xl lg:text-7xl font-semibold">Footer</h2>
      </footer>
    </section>
  );
}
