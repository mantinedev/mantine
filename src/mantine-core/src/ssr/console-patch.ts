/* eslint-disable no-console */
// This is a very dumb solution to prevent console.warn position with incorrect messages from react-jss
// Currently we are working with jss team to fix this warning, meanwhile place consider leaving this code
// This warning has no effect on react-jss styles and would not impact your components
// You can learn more about the issue here – https://github.com/cssinjs/jss/issues/1492
export function applyConsolePatch() {
  if (typeof window === 'undefined') {
    const originalWarn = console.warn;
    console.warn = (...args: any) => {
      if (args[0] !== 'Warning: [JSS] Rule is not linked. Missing sheet option "link: true".') {
        originalWarn(...args);
      }
    };
  }
}
