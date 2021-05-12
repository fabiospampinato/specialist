
/* IMPORT */

import Aborter from 'aborter';
import fetch from 'node-fetch';
import compare from 'semver-compare';
import onExit from 'signal-exit';
import * as color from './color';

/* HELPERS */

const getExitSignal = () => {
  const aborter = new Aborter ();
  onExit ( () => aborter.abort () );
  return aborter.signal as any; //TSC: Not techincally the same thing, but good enough for node-fetch
};

const getLatestVersion = async ( name: string ): Promise<string | undefined> => {
  const latestUrl = `http://registry.npmjs.org/${name}/latest`;
  const signal = getExitSignal ();
  const response = await fetch ( latestUrl, {signal} );
  const latest = await response.json ();
  return latest.version;
};

const isUpdateAvailable = ( current: string, latest: string ): boolean => {
  return compare ( current, latest ) === -1;
};

/* MAIN */

//TODO: Check if using yarn
//TODO: Check if installed globally
//TODO: Check if installed as a dev or peer dependency
//TODO: Check for updates less often
//TODO: Annoy the user less
//TODO: Account for non-latest releases
//TODO: Don't output anything if the output is being piped somewhere

const updater = async ({ name, version }: { name: string, version: string }): Promise<void> => {

  const latest = await getLatestVersion ( name ).catch ( () => undefined );

  if ( !latest ) return;

  if ( !isUpdateAvailable ( version, latest ) ) return;

  onExit ( () => {

    console.log ( `\n\n📦 Update available for ${color.cyan ( name )}: ${color.gray ( version )} → ${color.green ( latest )}` );

  }, { alwaysLast: true } );

};

/* EXPORT */

export default updater;
