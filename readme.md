# Specialist

A library that helps you write tiny, fast and beautiful CLI apps that can automatically check for updates.

## Install

```sh
npm install --save specialist
```

## Usage

The following APIs are provided:

```ts
// It provides the "bin" function from "tiny-bin"
// https://github.com/fabiospampinato/tiny-bin
import {bin} from 'specialist';

// It provides the basic color functions from "tiny-colors"
// https://github.com/fabiospampinato/tiny-colors
import {color} from 'specialist';
// color.{black, red, green, yellow, blue, magenta, cyan, white, gray}
// color.{bgBlack, bgRed, bgGreen, bgYellow, bgBlue, bgMagenta, bgCyan, bgWhite}
// color.{dim, bold, hidden, italic, underline, strikethrough, reset}

// It provides a basic "exit" function, for exiting with visual consistency
// Exiting with this function will look like how "tiny-bin" exits
import {exit} from 'specialist';

// It provides the "parseArgv" function from "tiny-parse-argv"
// https://github.com/fabiospampinato/tiny-parse-argv
import {parseArgv} from 'specialist';

// It provides the "updater" function from "tiny-updater"
// https://github.com/fabiospampinato/tiny-updater
import {updater} from 'specialist';
```

## Example

The following is an example basic CLI app build with Specialist:

```ts
#!/usr/bin/env node

import {bin, color} from 'specialist';

bin ( 'my-cli', 'My example cli' )
  .command ( 'time', 'A command that tells you the time' )
  .action ( () => {
    console.log ( color.cyan ( new Date ().toString () ) );
  })
  .run ();
```

## License

MIT © Fabio Spampinato
