
/* IMPORT */

import process from 'node:process';
import color from 'tiny-colors';

/* MAIN */

// Little function modeled to have the same visual output as tiny-bin's "fail" function

const exit = ( message: string, code: number = 1 ): never => {

  if ( code === 0 ) {

    console.log ( message );

  } else {

    console.log ( `\n  ${color.red ( message )}\n` );

  }

  process.exit ( code );

};

/* EXPORT */

export default exit;
