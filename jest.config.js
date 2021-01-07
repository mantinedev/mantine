module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./configuration/jest/enzyme.setup.js'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|svg|woff|woff2|gql)$': 'identity-obj-proxy',
    '@mantine/(.*)': '<rootDir>/node_modules/@mantine/$1/src',
  },
  transform: {
    '\\.md$': 'jest-raw-loader',
  },
};
