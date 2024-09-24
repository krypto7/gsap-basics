gsap.to(".circle", {
  // x: window.innerWidth - 100,
  transform: "translateX(1500%)",
  scrollTrigger: {
    trigger: "body",
    start: "top",
    end: "bottom",
    pin: true,
    scrub: 1,
  },
});

gsap.to(".splitText .par", {
  // x: window.innerWidth - 100,
  coloe: "red",
  transform: "translateY(-700%)",
  scrollTrigger: {
    // trigger:'body'
    start: "top",
    end: "bottom",
    scrub: 1,
  },
});
gsap.to(".splitText .al", {
  // x: window.innerWidth - 100,
  coloe: "red",
  transform: "translateY(-500%)",
  scrollTrigger: {
    // trigger:'body'
    start: "top",
    end: "bottom",
    scrub: 1,
  },
});
gsap.to(".splitText .lax", {
  // x: window.innerWidth - 100,
  coloe: "red",
  transform: "translateY(600%)",
  scrollTrigger: {
    // trigger:'body'
    start: "top",
    end: "bottom",
    scrub: 1,
  },
});
