function breakText() {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;
  var splittedText = h1Text.split("");
  var halfvalue = Math.floor(splittedText.length / 2);

  var cutter = "";

  splittedText.forEach((e, index) => {
    // console.log(e, index);
    if (index < halfvalue) {
      cutter += `<span class='a'>${e}</span>`;
    } else {
      cutter += `<span class='b'>${e}</span>`;
    }
  });

  h1.innerHTML = cutter;
}
breakText();

gsap.from("h1 .a", {
  y: 50,
  duration: 0.6,
  stagger: 0.15,
  opacity: 0,
});
gsap.from("h1 .b", {
  y: 50,
  duration: 0.6,
  stagger: -0.15,
  opacity: 0,
});
