#!/usr/bin/env node

/* IMPORT */

import {name, version} from '../../package.json';
import {program, updater} from '..';
import bundle from './bundle';

/* MAIN */

updater ({ name, version });

program
  .name ( name )
  .version ( version )
  .description ( 'A collection of commands for making great CLI apps.' )
  .command ( 'bundle [entry.js]' )
  .description ( 'Bundle the entrypoint of your CLI with esbuild ' )
  .action ( bundle );

program.parse ();
