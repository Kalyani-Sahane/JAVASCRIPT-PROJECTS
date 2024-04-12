const moon = document.querySelector('.moon');

let angle = 0;
let radius = 245;
let centerX = 110;
let centerY = 130;

function animateMoon() {
  angle += 0.01;
  let x = centerX + radius * Math.cos(angle);
  let y = centerY + radius * Math.sin(angle);
  moon.style.left = x + 'px';
  moon.style.top = y + 'px';
  requestAnimationFrame(animateMoon);
}

animateMoon();