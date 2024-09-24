function pageOneAnimation() {
  var tl = gsap.timeline();
  tl.from("nav h1,nav h4,nav button", {
    y: -30,
    opacity: 0,
    duration: 0.3,
    delay: 1,
    stagger: 0.15,
  });

  tl.from(".center-part1 h1", {
    x: -200,
    opacity: 0,
    duration: 0.7,
  });

  tl.from(".center-part1 p", {
    y: -10,
    opacity: 0,
    duration: 0.4,
  });
  tl.from(".center-part1 button", {
    // y:-10,
    opacity: 0,
    duration: 0.4,
  });
  tl.from(
    ".center-part2 img",
    {
      // y:-10,
      opacity: 0,
      duration: 0.4,
      delay: 0.5,
    },
    "-=1"
  );
  tl.from(".section1bottom img", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 2,
  });
}

function pageTwoAnimation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      start: "top 50%",
      end: "top 0%",
      scrub: 1,
    },
  });
  tl2.from(".services", {
    y: 60,
    opacity: 0,
    duration: 0.5,
  });
  tl2.from(
    ".elem.line1.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
      delay: 0,
    },
    "anime"
  );
  tl2.from(
    ".elem.line1.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
      delay: 0,
    },
    "anime"
  );
  tl2.from(
    ".elem.line2.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "anime1"
  );
  tl2.from(
    ".elem.line2.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
      delay: 0,
    },
    "anime"
  );
}
pageOneAnimation();
pageTwoAnimation();
