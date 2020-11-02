const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.heigh = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;

let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return; //stop the fn from running when they are not moused
  console.log(e);
  ctx.strokeStyle = `hsl(${hue},100%,50%)`;
  hue++;
  if (hue >= 360) {
    hue = 0;
  };
  // ctx.lineWidth++;

  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }

  ctx.beginPath();
  //Start from
  ctx.moveTo(lastX, lastY);
  //Go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  // ctx.lineWidth = 8;

  [lastX, lastY] = [e.offsetX, e.offsetY];
  // lastX = e.offsetX;
  // lastY = e.offsetY;

  ctx.globalCompositeOperation = 'multiply';
}
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
