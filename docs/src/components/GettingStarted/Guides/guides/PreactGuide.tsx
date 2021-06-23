import React from 'react';
import { Text } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { Installation } from './Installation';
import { Done } from './Done';

interface CraGuideProps {
  dependencies: string;
}

const code = `export default {
  webpack(config, env) {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      },
    };

    return config;
  },
};`;

export function PreactGuide({ dependencies }: CraGuideProps) {
  return (
    <div>
      <Text weight={700} style={{ marginBottom: 15 }}>
        Init application
      </Text>
      <Prism language="bash">npx preact-cli create default your-app</Prism>
      <Text weight={700} style={{ marginTop: 30 }}>
        Install dependencies
      </Text>
      <Installation dependencies={dependencies} />
      <Text weight={700} style={{ marginBottom: 15, marginTop: 30 }}>
        Create preact.config.js
      </Text>
      <Prism language="tsx">{code}</Prism>
      <Done />
    </div>
  );
}
