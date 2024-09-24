gsap.to(".jini", {
  keyframes: {
    "0%": { yPercent: 0 },
    "7%": { yPercent: 0, ease: "sine.in" },
    // "25%": { yPercent: 1, ease: "sine.in" },
    // "50%": { yPercent: 5, ease: "none" },
    "65%": { yPercent: 5 },
    "100%": { yPercent: 0 },
    easeEach: "sine.out",    
  },
  duration: 2,
  repeat: -1,
  transformOrigin: "center bottom",
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    // scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -1000%",
    scrub: 3,
    pin: true,
  },
});

// Your existing animations
tl.from(".jini", {
  x: 0,
  y: 350,
  stagger: true,
})
  .to(".jini", {
    x: -650,
    y: -430,
    scale: 0.4,
    stagger: 1,
    duration: 1,
  })
  .from(".i", {
    x: -300,
    duration: 0.7,
  })
  .to(".jini", {
    x: 60,
    scale: 0.4,
    stagger: 1,
    duration: 1,
  })
  .from(".w", {
    opacity: 0,
    y: 300,
    stagger: 1,
    duration: 1,
  })
  .to(".jini", {
    x: 660,
    y: -250,
    scale: 0.4,
    stagger: 1,
    duration: 0.7,
    zIndex: -1,
  })
  .from(".g", {
    opacity: 0,
    x: 300,
    stagger: 1,
    duration: 1,
  })
  .to(".jini", {
    opacity: 0,
    scale: 0,
    // y: -300
  })
  .to(
    ".i",
    {
      opacity: 1,
      x: -80,
      y: -300,
      scale: 0.07,
    },
    "delay"
  )
  .to(
    ".w",
    {
      opacity: 1,
      x: -545,
      y: -300,
      scale: 0.07,
    },
    "delay"
  )
  .to(
    ".g",
    {
      opacity: 1,
      x: -1110,
      y: -300,
      scale: 0.07,
    },
    "delay"
  );
