
/* IMPORT */

import {bin, color} from '../dist/index.js';

/* MAIN */

bin ( 'my-cli', 'My example cli' )
  .command ( 'time', 'A command that tells you the time' )
  .action ( () => {
    console.log ( color.cyan ( new Date ().toString () ) );
  })
  .run ();
