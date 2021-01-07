const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const React = require('react');

// Fix broken layout effects on testing environments
React.useLayoutEffect = React.useEffect;

Enzyme.configure({ adapter: new Adapter() });
