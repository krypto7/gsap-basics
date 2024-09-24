//
const myText = new SplitType("#my-text");
console.log(myText);

gsap.to(".char", {
  y: 0,
  stagger: 0.05,
  delay: 0.2,
  duration: 0.1,
});
