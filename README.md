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

// It provides the simple color functions from "tiny-colors"
// https://github.com/fabiospampinato/tiny-colors
import {color} from 'specialist';
// color.{black, red, green, yellow, blue, magenta, cyan, white, gray}
// color.{bgBlack, bgRed, bgGreen, bgYellow, bgBlue, bgMagenta, bgCyan, bgWhite}
// color.{dim, bold, hidden, italic, underline, strikethrough, reset}

// It provides the "updater" function from "tiny-updater"
// https://github.com/fabiospampinato/tiny-updater
import {updater} from 'specialist';

// It exposes "minimist" as "parseArgv"
// https://github.com/substack/minimist
import {parseArgv} from 'specialist';
```

The following command line commands are provided:

```sh
# Bundle the entrypoint of your CLI with esbuild
npx specialist bundle bin/index.ts > dist/bin/index.js
```

## Example

The following [example](https://github.com/fabiospampinato/specialist/blob/master/src/bin/index.ts) CLI app is the entrypoint of Specialist's own CLI app:

```ts
#!/usr/bin/env node

import {program, updater} from 'specialist';
import {name, version} from '../../package.json';
import bundle from './bundle';

updater ({ name, version });

program
  .name ( name )
  .version ( version )
  .description ( 'A collection of commands for making great CLI apps.' )
  .command ( 'bundle [entry.js]' )
  .description ( 'Bundle the entrypoint of your CLI with esbuild' )
  .action ( bundle );

program.parse ();
```

As you can see writing a simple CLI app is super easy, the producted app will be _tiny_ (~10kb), the app will automatically check for updates and notify the user if some are found, and bundling it will be a matter of running `npm i esbuild && npx specialist bundle bin/index.ts > dist/bin/index.js`.

## License

MIT © Fabio Spampinato
