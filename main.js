const track = document.getElementById("image-track");

window.onmousedown = (event) => {
  track.dataset.mouseDownAt = event.clientX;
};

window.onmouseup = (event) => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage; // new starter point
};

window.onmousemove = (event) => {
  //remove action before mouse click
  if (track.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - event.clientX,
    maxDelta = window.innerWidth / 2;

  const percentage = (mouseDelta / maxDelta) * -100;
  const nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

  track.dataset.percentage = nextPercentage;

  track.animate(
    {
      transform: `translate(${nextPercentage}%, -50%)`,
    },
    { duration: 3600, fill: "forwards" }
  );
};
