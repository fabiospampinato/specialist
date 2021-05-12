
/* IMPORT */

import * as esbuild from 'esbuild';

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
      'node:*',
      'assert', 'async_hooks', 'buffer', 'child_process', 'cluster', 'console', 'constants', 'crypto', 'dgram',
      'dns', 'domain', 'events', 'fs', 'http', 'http2', 'https', 'inspector', 'module', 'net', 'os', 'path',
      'perf_hooks', 'process', 'punycode', 'querystring', 'readline', 'repl', 'stream', 'string_decoder',
      'timers', 'tls', 'trace_events', 'tty', 'url', 'util', 'v8', 'vm', 'wasi', 'worker_threads', 'zlib'
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
