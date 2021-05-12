> This is still very much a work in progress, the exposed APIs and their behavior may change in the future.

# Specialist

A library that helps you write tiny, fast, bundled and beautiful CLI apps that can automatically check for updates.

## Install

```sh
npm install --save specialist
```

## Usage

The following APIs are provided:

```ts
// It provides the "program" object from Commander.js
// https://github.com/tj/commander.js
import {program} from 'specialist';

// It provides the simple color functions from Colorette
// https://github.com/jorgebucaran/colorette
import {color} from 'specialist';
// color.{black, red, green, yellow, blue, magenta, cyan, white, gray}
// color.{bgBlack, bgRed, bgGreen, bgYellow, bgBlue, bgMagenta, bgCyan, bgWhite}
// color.{dim, bold, hidden, italic, underline, strikethrough, reset}

// It provides the "updater" function from "tiny-updater"
// https://github.com/fabiospampinato/tiny-updater
import {updater} from 'specialist';
```

The following command line commands are provided:

```sh
# Bundle the entrypoint of your CLI with esbuild
npx specialist bundle bin/index.ts > dist/bin/index.js
```

## License

MIT © Fabio Spampinato
