let circle = document.getElementById("circleBox");

let size = 30;

function animate() {
  size += 1;
  if (size > 500) {
    size = 30;
  }

  circle.style.width = size + "px";
  circle.style.height = size + "px";

  requestAnimationFrame(animate);
}

animate();
