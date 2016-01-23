# devtool-examples

Some examples of using [devtool](https://github.com/Jam3/devtool) for a short talk/presentation at @nodeschool Toronto.

## Hello World

### `npm run repl`

Open a REPL with Node.js support:

```sh
devtool
```

### `npm run hello`

Open the "Hello, World!" script in devtool:

```sh
devtool hello-world.js
```

## Debugging / Profiling Node

### `npm run http`

To debug an HTTP server:

```sh
devtool http.js --console --watch
```

Then try setting a breakpoint in one of the request handlers and loading [http://localhost:8080/](http://localhost:8080/).

### `npm run gulp:watch`

To debug a gulp script:

```sh
devtool node_modules/gulp/bin/gulp.js -c -- watch
```

Then try changing the SASS styles in `style/main.scss`.

## Browser APIs

### `npm run audio`

Command-line app to convert MP3/OGG/etc to MP3 audio files:

```sh
devtool to-wav.js -qh < audio.mp3 > audio.wav
```


### `npm run canvas:dev`

Using the `<canvas>` API to programmatically render an image.

The development version shows a browser and DevTools window, renders the canvas to the DOM, and reloads on file save.

```sh
NODE_ENV=development devtool canvas.js --watch --show
```

### `npm run canvas`

The production version renders the canvas as a PNG file and writes it to `process.stdout`, without showing any GUI.

```
devtool canvas.js --quit --headless > image.png
```

## Other Ideas

Using interesting Chrome APIs like:

- Web Speech (synthesis, recognition)
- Geolocation
- User Media (audio/video recording)
- Electron APIs like `browserWindow.capturePage`