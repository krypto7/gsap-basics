const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "body",
    start: "body", // Start animation when .container hits the top of the viewport
    end: "bottom", // End animation when .container bottom hits the top of the viewport
    scrub: 1, // Scrub animation smoothly based on scroll position
    markers: true, // Optional: show markers for debugging
  },
});

// Define the zigzag motion
tl.to(".square", { x: 900, y: 500, duration: 1 })
  .to(".square", {
    x: 0,
    y: 900,
    stagger: 1,
    duration: 1,
  })
  .to(".square", {
    x: 900,
    y: 1000,
    stagger: 1,
    duration: 1,
  })
  .to(".square", {
    x: 0,
    y: 1200,
    stagger: 1,
    duration: 1,
  });
