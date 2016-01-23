# devtool-examples

Some examples of using [devtool](https://github.com/Jam3/devtool) for a short talk/presentation at @nodeschool Toronto.

## Intro

[devtool](https://github.com/Jam3/devtool) is a new command-line tool for debugging, developing and profiling Node applications built on [Electron](https://github.com/atom/electron/). We will also explore some novel use cases here, blending browser and Electron APIs.

## Hello World

If you `git clone` this repo, you can use `npm run` to execute commands. Or you can install `devtool` globally and use it directly in shell.

### `npm run repl`

Open a REPL with Node.js support:

```sh
devtool
```

![repl](http://i.imgur.com/P4Qgq8N.png)

### `npm run hello`

Open the "Hello, World!" script in devtool:

```sh
devtool hello-world.js
```

Or with console redirection:

```sh
devtool hello-world.js --console
```

Or with file watching, for development:

```sh
devtool hello-world.js --watch
```

## Debugging / Profiling Node

### `npm run http`

To debug an HTTP server:

```sh
devtool http.js --console --watch
```

Then try setting a breakpoint in one of the request handlers and loading [http://localhost:8080/](http://localhost:8080/).

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

Result:

![canvas](./image.png)

## Other Ideas

Other use cases:

- Debugging Gulp/Grunt scripts
- Web Speech (synthesis, recognition)
- Geolocation
- User Media (audio/video recording)
- Electron APIs like `browserWindow.capturePage`

## See Also

More inspiration built on top of Electron, which `devtool` could also be used for.

- [tile-folder.js](https://gist.github.com/mattdesl/59214e0f0ee8b3ae614f) - tile a folder of images into a single images 
- [three-png-stream](https://github.com/Jam3/three-png-stream) - stream ThreeJS canvas to a PNG file
- [shadertoy-export](https://github.com/mattdesl/shadertoy-export) - export ShaderToy as a high-resolution PNG
