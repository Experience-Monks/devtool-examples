var browserify = require('browserify');

console.profile('bundle');
browserify('hello-world.js')
  .bundle(function (err, src) {
    if (err) throw err;
    console.profileEnd('bundle');
    console.log('%s bytes written', src.length);
  });
