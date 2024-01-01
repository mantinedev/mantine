/* eslint-disable no-console */
/* Patches console.error during tests, used to test that component throws error during rendering */

const initialError = console.error;
const initialWarn = console.warn;

export function patchConsoleError() {
  console.error = () => {};
}

patchConsoleError.release = () => {
  console.error = initialError;
};

export function patchConsoleWarn() {
  console.warn = () => {};
}

patchConsoleWarn.release = () => {
  console.warn = initialWarn;
};
