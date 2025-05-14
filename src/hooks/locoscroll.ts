import { useEffect, RefObject } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

// ✅ Adjusted the type to HTMLDivElement
const useLocoScroll = (start: boolean, scrollRef: RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    if (!start || !scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08,
      multiplier: 1,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });

    scroll.update();

    return () => {
      scroll.destroy();
    };
  }, [start, scrollRef]);
};

export default useLocoScroll;



// import { useEffect } from 'react';
// import LocomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/dist/locomotive-scroll.css';

// export default function useLocoScroll(start: boolean) {
//   useEffect(() => {
//     if (!start) return;

//     const scrollEl = document.querySelector('[data-scroll-container]');
//     if (!scrollEl) return;

//     const scroll = new LocomotiveScroll({
//       el: scrollEl as HTMLElement,
//       smooth: true,
//       lerp: 0.08,
//       smartphone: { smooth: true },
//       tablet: { smooth: true },
//     });

//     setTimeout(() => scroll.update(), 1000);

//     const handleResize = () => scroll.update();
//     window.addEventListener('resize', handleResize);

//     return () => {
//       scroll.destroy();
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [start]);
// }



// import { useEffect } from 'react';
// import LocomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/dist/locomotive-scroll.css';

// export default function useLocoScroll(start: boolean, containerRef: React.RefObject<HTMLDivElement | null>) {
//   useEffect(() => {
//     if (!start || !containerRef.current) return;

//     const scroll = new LocomotiveScroll({
//       el: containerRef.current,
//       smooth: true,
//       lerp: 0.08,
//       smartphone: { smooth: true },
//       tablet: { smooth: true },
//     });

//     setTimeout(() => scroll.update(), 1000);

//     const handleResize = () => scroll.update();
//     window.addEventListener('resize', handleResize);

//     return () => {
//       scroll.destroy();
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [start, containerRef]);
// }



// // useLocoScroll.ts
// import { useEffect } from "react";
// import LocomotiveScroll from "locomotive-scroll";

// const useLocoScroll = (start: boolean, containerRef: any) => {
//   useEffect(() => {
//     if (!start || !containerRef.current) return;

//     const scroll = new LocomotiveScroll({
//       el: containerRef.current,
//       smooth: true,
//       multiplier: 1,
//     });

//     return () => {
//       scroll.destroy();
//     };
//   }, [start, containerRef]);
// };

// export default useLocoScroll;


// import { useEffect } from "react";
// import LocomotiveScroll from "locomotive-scroll";

// const useLocoScroll = (start: boolean, containerRef: any) => {
//   useEffect(() => {
//     if (!start || !containerRef.current) return;

//     const scroll = new LocomotiveScroll({
//       el: containerRef.current,
//       smooth: true,
//       multiplier: 1,
//       getDirection: true,
//       getSpeed: true,
//     });

//     // Force a refresh after media loads
//     const handleResizeOrLoad = () => {
//       setTimeout(() => scroll.update(), 100); // give DOM time to settle
//     };

//     window.addEventListener("resize", handleResizeOrLoad);
//     window.addEventListener("load", handleResizeOrLoad);

//     const imgs = containerRef.current.querySelectorAll("img, video");
//     imgs.forEach((el: any) =>
//       el.addEventListener("load", handleResizeOrLoad)
//     );

//     return () => {
//       scroll.destroy();
//       window.removeEventListener("resize", handleResizeOrLoad);
//       window.removeEventListener("load", handleResizeOrLoad);
//     };
//   }, [start, containerRef]);
// };

// export default useLocoScroll;

