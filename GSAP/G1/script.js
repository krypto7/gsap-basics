// console.log("====>Hello");

// gsap.from("h1", {
//   opacity: 0,
//   duration: 2,
//   delay: 1,
//   y: 20,
//   stagger: 0.3,
// });

// gsap.to("#box", {
//   x: 1000,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
//   repeat: 2,
//   yoyo: true,
// });

// gsap.to("#box1", {
//   x: 1000,
//   rotate: 360,
//   duration: 2,
//   delay: 1,
// });

// gsap.to("#box2", {
//   x: 1000,
//   backgroundColor: "yellow",
//   duration: 2,
//   delay: 3,
// });
// gsap.to("#box3", {
//   x: 1000,
//   duration: 1,
//   scale: 0.5,
//   rotate: 360,
//   borderRadius: "50%",
// //   yoyo: true,
// //   repeat: -1,
//   delay: 5,
// });

// var tl = gsap.timeline();

// tl.to("#box1", {
//   x: 1000,
//   rotate: 360,
//   duration: 2,
//   delay: 1,
// });
// tl.to("#box2", {
//   x: 1000,
//   backgroundColor: "yellow",
//   duration: 2,
// //   delay: 1,
// });
// tl.to("#box3", {
//   x: 1000,
//   scale: 0.5,
//   rotate: 360,
//   borderRadius: "50%",
//   duration: 2,
// //   delay: 1,
// });

var tl = gsap.timeline();

tl.from("#nav h2", {
  y: 10,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

tl.from("#part2 h4", {
  y: -10,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.3,
});
tl.from("h1", {
  y: 20,
  opacity: 0,
  duration: 0.5,
  scale: 0.2,
});
