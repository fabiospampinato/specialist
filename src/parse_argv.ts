
/* IMPORT */

import minimist from 'minimist';

/* MAIN */

const parseArgv = ( argv: string[] = process.argv, options?: minimist.Opts ): minimist.ParsedArgs => {

  return minimist ( argv, options );

};

/* EXPORT */

export default parseArgv;
