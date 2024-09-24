gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll(".reveal-type");
// console.log(splitTypes);
splitTypes.forEach((char, index) => {
  const text = new SplitType(char, { types: "char" });
  //   console.log(text.chars);

  gsap.from(text.chars, {
    scrollTrigger: {
      trigger: char,
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      markers: true,
    },
    scaleY: 0,
    y: 20,
    // transformOrigin: "top",
    opacity: 0.2,
    stagger: 0.1,
  });
});

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
