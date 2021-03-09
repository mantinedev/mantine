import { argv } from 'yargs';
import { VersionIncrement, getIncrementedVersion } from './release/get-incremented-version';
import { setPackagesVersion } from './release/set-packages-version';

(async () => {
  const incrementedVersion = await getIncrementedVersion(argv._[0] as VersionIncrement);
  await setPackagesVersion(incrementedVersion);
})();
