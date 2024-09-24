console.log("hello");
// gsap.to(".square", {
// //   y: -100
//   duration: 2,
//   delay: 1,
//   repeat: -1,
//   yoyo: true,
//   scale: 2,
// });

// gsap.registerEffect({
//   name: "fade",
//   defaults: { duration: 2 },
//   effect: (target, config) => {
//     return gsap.to(target, { duration: config.duration, opacity: 0 });
//   },
// });

// console.log(document.querySelectorAll(".block"));

// document.querySelectorAll(".block").forEach(function (box) {
//   box.addEventListener("mouseenter", function () {
//     gsap.effects.fade(this);
//   });
// });

var path = "M 10 100 Q 500 100 990 100";
var finalPath = "M 10 100 Q 500 100 990 100";

var string = document.querySelector(".string");
string.addEventListener("mousemove", (dets) => {
  // console.log("dets===>", dets.x);
  path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;
  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.3,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 0.5,
    ease: "elastic.out(1,0.3)",
  });
});
