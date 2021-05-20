import { spawn } from 'child_process';

export default async function generateDts(packagePath: string) {
  return new Promise((resolve, reject) => {
    const child = spawn('yarn', ['tsc', '--emitDeclarationOnly'], {
      cwd: packagePath,
    });

    child.on('close', (code) => {
      if (code !== 0) reject(code);
      else resolve(code);
    });

    child.on('exit', (code) => {
      if (code !== 0) reject(code);
      else resolve(code);
    });

    child.on('error', (err) => {
      reject(err);
    });
  });
}
