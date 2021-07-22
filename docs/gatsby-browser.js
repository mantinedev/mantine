export const onInitialClientRender = () => {
  const ssStyles = window.document.getElementById('server-side-jss');
  if (ssStyles) {
    ssStyles.parentNode.removeChild(ssStyles);
  }
};

// eslint-disable-next-line react/prop-types, react/jsx-filename-extension
// export const wrapRootElement = ({ element }) => <JssProvider>{element}</JssProvider>;
