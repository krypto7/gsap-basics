console.log("Hello");

var tl = gsap.timeline();
var menu = document.querySelector(".menu");
var remove = document.querySelector(".remove");

// menu.addEventListener("click", () => {
//   //   console.log("hello");
//   tl.to(".full", {
//     right: 0,
//     duration: 0.8,
//   });

//   tl.from(".full h1", {
//     x: 150,
//     duration: 0.7,
//     stagger: 0.28,
//     opacity: 0,
//   });
// });

// remove.addEventListener("click", () => {
//   //   console.log("hello");
//   tl.to(".full", {
//     right: "-30%",
//     duration: 0.8,
//   });
// });

tl.to(".full", {
  right: 0,
  duration: 0.8,
});
tl.from(".full h1", {
  x: 150,
  duration: 0.7,
  stagger: 0.28,
  opacity: 0,
});
tl.from(".full i", {
  opacity: 0,
});

tl.pause();

menu.addEventListener("click", () => {
  tl.play();
});
remove.addEventListener("click", () => {
  tl.reverse();
});
