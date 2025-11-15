import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..', '..');
const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';

const tasks = [
  { name: 'prettier', script: 'prettier:test' },
  { name: 'syncpack', script: 'syncpack' },
  { name: 'typecheck', script: 'typecheck' },
  { name: 'lint', script: 'lint' },
];

const running = new Map();

function log(message) {
  // eslint-disable-next-line no-console
  console.log(`[test:parallel] ${message}`);
}

function terminateOthers(failedTask) {
  running.forEach((child, name) => {
    if (name === failedTask) {
      return;
    }

    if (!child.killed) {
      child.kill('SIGTERM');
    }
  });
}

function runTask(task) {
  return new Promise((resolve, reject) => {
    log(`Starting ${task.name}`);

    const child = spawn(npmCmd, ['run', task.script], {
      cwd: repoRoot,
      stdio: 'inherit',
      env: process.env,
    });

    running.set(task.name, child);

    const handleExit = (code, signal) => {
      running.delete(task.name);

      if (code === 0) {
        log(`Finished ${task.name}`);
        resolve();
      } else {
        const reason =
          code !== null ? `exit code ${code}` : signal ? `signal ${signal}` : 'unknown error';
        const error = new Error(`[${task.name}] failed with ${reason}`);
        error.taskName = task.name;
        reject(error);
      }
    };

    child.on('exit', handleExit);
    child.on('error', (error) => {
      running.delete(task.name);
      error.taskName = task.name;
      reject(error);
    });
  });
}

async function main() {
  try {
    await Promise.all(tasks.map((task) => runTask(task)));
    log('All checks completed successfully');
  } catch (error) {
    terminateOthers(error?.taskName);
    log(error?.message ?? error);
    process.exit(1);
  }
}

main();
