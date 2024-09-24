// gsap.from("#page1 #box", {
//   scale: 0,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
// });

// gsap.from("#page2 #box", {
//   scale: 0,
//   duration: 1,
//   rotate: 720,
//   scrollTrigger: {
//     trigger: "#page2 #box",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
//     end: "top 30%",
//     scrub: 2,
//     pin: true,
//   },
// });

// gsap.from("#page2 h1", {
//   //   y: 30,
//   opacity: 0,
//   x: 500,
//   duration: 2,
//   scrollTrigger: {
//     trigger: "#page2 h1",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
//   },
// });

// gsap9.from("#page2 h2", {
//   //   y: 30,
//   opacity: 0,
//   x: -500,
//   duration: 2,
//   scrollTrigger: {
//     trigger: "#page2 h2",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
//   },
// });

gsap.to("#page2 h1", {
  transform: "translate(-200%)",
  duration: 4,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -150%",
    scrub: 2,
    pin: true,
  },
});
