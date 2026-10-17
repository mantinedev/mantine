import { spawn } from 'node:child_process';
import path from 'node:path';

const cacheDir = path.join(process.cwd(), '.cache');
const args = process.argv.slice(2);
const hasPort = args.some((arg) => arg === '-p' || arg === '--port' || arg.startsWith('--port='));
const storybookArgs = ['dev', ...(hasPort ? [] : ['-p', '2358']), '--ci', '--no-open', ...args];

const child = spawn('storybook', storybookArgs, {
  stdio: 'inherit',
  env: { ...process.env, CACHE_DIR: cacheDir },
  shell: process.platform === 'win32',
});

child.on('exit', (code) => {
  process.exit(code ?? 0);
});
