window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    gsap.to(".marque img", {
      rotate: 180,
    });

    gsap.to(".marque", {
      transform: "translateX(-200%)",
      duration: 6,
      ease: "none",
      repeat: -1,
    });
  } else {
    gsap.to(".marque img", {
      rotate: 0,
    });
    gsap.to(".marque", {
      transform: "translateX(0%)",
      duration: 6,
      ease: "none",
      repeat: -1,
    });
  }
});
