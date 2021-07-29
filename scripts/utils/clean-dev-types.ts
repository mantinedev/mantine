import path from 'path';
import rimraf from 'rimraf';

export function cleanDevTypes() {
  rimraf.sync(path.join(__dirname, '../../src/*/lib/**/*.story.d.ts'));
  rimraf.sync(path.join(__dirname, '../../src/*/lib/**/*.story.d.ts.map'));
  rimraf.sync(path.join(__dirname, '../../src/*/lib/**/styles.api.d.ts.map'));
  rimraf.sync(path.join(__dirname, '../../src/*/lib/**/styles.api.d.ts'));
  rimraf.sync(path.join(__dirname, '../../src/*/lib/**/*.test.d.ts'));
  rimraf.sync(path.join(__dirname, '../../src/*/lib/**/*.test.d.ts.map'));
  rimraf.sync(path.join(__dirname, '../../src/*/lib/src/demos.d.ts'));
  rimraf.sync(path.join(__dirname, '../../src/*/lib/src/demos.d.ts'));
  rimraf.sync(path.join(__dirname, '../../src/*/lib/demos.d.ts.map'));
  rimraf.sync(path.join(__dirname, '../../src/*/lib/demos.d.ts'));
  rimraf.sync(path.join(__dirname, '../../src/*/lib/src/components/*/demos'));
  rimraf.sync(path.join(__dirname, '../../src/*/lib/components/*/demos'));
  rimraf.sync(path.join(__dirname, '../../src/*/lib/demos'));
}
