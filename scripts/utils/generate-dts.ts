import execa from 'execa';

export default async function generateDts(packagePath: string) {
  await execa('yarn', ['tsc', '--build'], {
    cwd: packagePath,
  });
}
