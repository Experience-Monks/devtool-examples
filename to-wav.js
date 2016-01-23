/*
  Convert MP3/OGG/etc to WAV files with WebAudio.
 */

var toArrayBuffer = require('buffer-to-arraybuffer');
var toBuffer = require('arraybuffer-to-buffer');
var toWav = require('audiobuffer-to-wav');
var audioContext = new (window.AudioContext || window.webkitAudioContext)();
var getStdin = require('get-stdin').buffer;

getStdin()
  .then(function (buf) {
    var data = toArrayBuffer(buf);
    audioContext.decodeAudioData(data, function (audioBuffer) {
      var wavData = toWav(audioBuffer);
      var wavBuffer = toBuffer(wavData);
      process.stdout.write(wavBuffer, function () {
        window.close();
      });
    }, fail);
  });

function fail (err) {
  process.stderr.write(err.message + '\n');
  process.exit(1);
}
