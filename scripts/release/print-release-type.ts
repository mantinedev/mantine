import packageJson from '../../package.json';
import { getReleaseType } from '../publish/resolve-dist-tag';

// oxlint-disable-next-line no-console
console.log(getReleaseType(packageJson.version));
