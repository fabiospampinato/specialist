#!/usr/bin/env node

/* IMPORT */

import {program, updater} from '..';
import bundle from './bundle';

/* HELPERS */

const name = 'spcialist';
const version = '0.5.0';
const description = 'A collection of commands for making great CLI apps.';

/* MAIN */

updater ({ name, version });

program
  .name ( name )
  .version ( version )
  .description ( description )
  .command ( 'bundle [entry.js]' )
  .description ( 'Bundle the entrypoint of your CLI with esbuild' )
  .action ( bundle );

program.parse ();
