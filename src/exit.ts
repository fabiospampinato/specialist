
/* IMPORT */

import process from 'node:process';
import color from 'tiny-colors';

/* MAIN */

// Little function modeled to have the same visual output as tiny-bin's "fail" function
// It targets either stdout or stderr automatically, based on the exit code

const exit = ( message: string, code: number = 1 ): never => {

  const log = code === 0 ? console.log : console.error;

  if ( code === 0 ) {

    log ( message );

  } else {

    log ( `\n  ${color.red ( message )}\n` );

  }

  process.exit ( code );

};

/* EXPORT */

export default exit;
