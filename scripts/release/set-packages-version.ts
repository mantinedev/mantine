import path from 'path';
import fs from 'fs-extra';

function writeVersionToPackageJson(filePath: string, version: string) {
  const current = fs.readJSONSync(filePath);
  current.version = version;

  if (current.peerDependencies) {
    Object.keys(current.peerDependencies).forEach((packageName) => {
      if (packageName.includes('@mantine/')) {
        current.peerDependencies[packageName] = version;
      }
    });
  }

  fs.writeJSONSync(filePath, current, { spaces: 2 });
}

export default function setPackagesVersion(version: string) {
  const src = path.join(__dirname, '../../src');

  const folders = fs
    .readdirSync(src)
    .filter((folder) => fs.pathExistsSync(path.join(src, folder, '/package.json')));

  folders.forEach((folder) => {
    writeVersionToPackageJson(path.join(src, folder, '/package.json'), version);
  });

  writeVersionToPackageJson(path.join(__dirname, '../../package.json'), version);
}
