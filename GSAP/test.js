// GSAP animation
gsap.to(".text-container", {  duration: 1,   stagger: 0.15, });
gsap.fromTo("#letter-B", { scaleX: 1 }, { scaleX: -1, duration: 0.2 });

gsap.fromTo(
  "#letter-R",
  { rotation: 0 },
  { rotation: 180, duration: 0.2,  stagger: 0.15, delay: 1 }
);

gsap.fromTo(
  "#letter-A",
  { rotation: 0 },
  { rotation: 180, duration: 0.2,  stagger: 0.15, delay: 2 }
);

// Animate entire word (if needed)
