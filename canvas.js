var toBuffer = require('electron-canvas-to-buffer');

var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;

var gradient = context.createLinearGradient(0, 0, width, 0);
gradient.addColorStop(0, '#f39821');
gradient.addColorStop(1, '#f321b0');

context.fillStyle = gradient;
context.fillRect(0, 0, width, height);

if (process.env.NODE_ENV === 'development') {
  document.body.appendChild(canvas);
} else {
  var buffer = toBuffer(canvas, 'image/png');
  process.stdout.write(buffer, function () {
    window.close();
  });
}
