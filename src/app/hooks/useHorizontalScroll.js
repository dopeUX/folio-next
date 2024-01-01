import { useRef, useEffect } from "react";
import gsap from 'gsap'; 

export default function useHorizontalScroll() {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = e => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        console.log(el.scrollLeft, e.deltaY, 'sssss')
            gsap.to(el, {
              scrollTo: {x:el.scrollLeft + e.deltaY, y: e.deltaY},
              ease:"power4.out",
              duration: 1.2
            })
        // el.scrollTo({
        //   left: el.scrollLeft + e.deltaY,
        //   behavior: "smooth"
        // });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}