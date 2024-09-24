const main = document.querySelector("#main");
const cursor = document.querySelector("#cursor");
const image = document.querySelector(".image");

main.addEventListener("mousemove", (e) => {
  //   console.log("====>", e);
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    duration: 1,
  });
});

image.addEventListener("mouseenter", (e) => {
  cursor.innerHTML = "view more";
  gsap.to(cursor, {
    scale: 2,
  });
});

image.addEventListener("mouseleave", () => {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
  });
});
