// console.log("Hello");
gsap.to(".a", {
  x: 400,
  rotation: 360,
  duration: 2,
  delay: 1,
});

gsap.to(".c", {
  x: 800,
  scrollTrigger: {
    trigger: "#block3",
    toggleActions: "play none none none",
    start: "top",
    end: "top -100%",
    markers: true,
    scrub: 1,
    pin: true,
  },
});
