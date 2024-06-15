document.addEventListener("wheel", function (event) {
  event.preventDefault();

  document.querySelector(".horizontal-window").scrollLeft += event.deltaY;
});
