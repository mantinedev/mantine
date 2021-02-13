const React = require('react');
const { JssProvider, SheetsRegistry } = require('react-jss');
const { renderToString } = require('react-dom/server');
const { MantineProvider } = require('@mantine/core');

// const sheetsRegistry = new Map();

// exports.wrapRootElement = ({ element, pathname }) => {
//   const sheets = new SheetsRegistry();
//   sheetsRegistry.set(pathname, sheets);

//   return (
//     <JssProvider registry={sheets}>
//       <MantineProvider>{element}</MantineProvider>
//     </JssProvider>
//   );
// };

// exports.onRenderBody = ({ setHeadComponents, pathname }) => {
//   const sheets = sheetsRegistry.get(pathname);
//   console.log(sheets, sheetsRegistry);

//   if (sheets) {
//     setHeadComponents([
//       <style
//         type="text/css"
//         id="server-side-jss"
//         key="server-side-jss"
//         dangerouslySetInnerHTML={{ __html: sheets.toString() }}
//       />,
//     ]);

//     sheetsRegistry.delete(pathname);
//   }
// };

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const sheets = new SheetsRegistry();

  const App = () => (
    <JssProvider registry={sheets}>
      <MantineProvider>{bodyComponent}</MantineProvider>
    </JssProvider>
  );

  replaceBodyHTMLString(renderToString(<App />));
  setHeadComponents([
    <style
      type="text/css"
      id="server-side-jss"
      key="server-side-jss"
      dangerouslySetInnerHTML={{ __html: sheets.toString() }}
    />,
  ]);
};
