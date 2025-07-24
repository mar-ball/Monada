const layers = document.querySelectorAll(".zoom-layer");
let zoomLevel = 1;

function animateZoom() {
  layers.forEach((layer, index) => {
    const scale = zoomLevel / Math.pow(1.2, index);
    layer.style.transform = `translate(-50%, -50%) scale(${scale})`;
  });
}

function loop() {
  zoomLevel *= 1.01; // Zoom constante
  animateZoom();
  requestAnimationFrame(loop);
}

loop();
