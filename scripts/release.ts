import { argv } from 'yargs';
import getIncrementedVersion, { VersionIncrement } from './release/get-incremented-version';
import setPackagesVersion from './release/set-packages-version';

const incrementedVersion = getIncrementedVersion(argv._[0] as VersionIncrement);
setPackagesVersion(incrementedVersion);
