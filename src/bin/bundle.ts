
/* IMPORT */

import * as esbuild from 'esbuild';
import {builtinModules} from 'node:module';

/* MAIN */

const bundle = ( entry: string ): void => {

  const result = esbuild.buildSync ({
    bundle: true,
    minify: true,
    platform: 'node',
    target: 'es2018',
    write: false,
    entryPoints: [entry],
    external: [
      'esbuild',
      ...builtinModules,
      ...builtinModules.map ( builtin => `node:${builtin}` )
    ],
  });

  if ( result.errors?.length ) {

    console.error ( result.errors );

    throw new Error ( 'Errors occurred during bundling!' );

  }

  if ( result.outputFiles?.length !== 1 ) {

    console.log(typeof result.outputFiles);

    console.error ( result.outputFiles?.map ( file => file.text ).join ( '\n\n\n\n' ) );

    throw new Error ( `${result.outputFiles?.length} files procuded rather than just 1!` );

  }

  console.log ( result.outputFiles[0].text );

};

/* EXPORT */

export default bundle;
