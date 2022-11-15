> This is still very much a work in progress, the exposed APIs and their behavior may change in the future.

# Specialist

A library that helps you write tiny, fast and beautiful CLI apps that can automatically check for updates.

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

// It exposes the "parseArgv" function from "tiny-parse-argv"
// https://github.com/fabiospampinato/tiny-parse-argv
import {parseArgv} from 'specialist';
```

## Example

The following is an example basic CLI app build with Specialist:

```ts
#!/usr/bin/env node

import {program, updater} from 'specialist';
import {name, description, version} from '../../package.json';

updater ({ name, version });

program
  .name ( name )
  .version ( version )
  .description ( description )
  .command ( 'time' )
  .description ( 'A command that tells you the time' )
  .action ( () => {
    console.log ( new Date ().toString () );
  });

program.parse ();
```

## License

MIT © Fabio Spampinato
