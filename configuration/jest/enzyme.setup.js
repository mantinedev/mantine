const Enzyme = require('enzyme');
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');
const React = require('react');

// Fix broken layout effects on testing environments
React.useLayoutEffect = React.useEffect;

Enzyme.configure({ adapter: new Adapter() });
