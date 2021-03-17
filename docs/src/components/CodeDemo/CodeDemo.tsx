import React from 'react';
import { Language } from 'prism-react-renderer';
import { Paper, Title, Text } from '@mantine/core';
import CodeHighlight from '../CodeHighlight/CodeHighlight';
import DocsSection from '../DocsSection/DocsSection';
import useStyles from './CodeDemo.styles';

interface CodeDemoProps {
  code: string;
  language: Language;
  title?: React.ReactNode;
  demoBackground?: string;
  demoLink?: string;
  children: React.ReactNode;
}

const URL_BASE = 'https://github.com/mantinedev/mantine/tree/master/docs/src/demos';

export default function CodeDemo({
  code,
  language,
  children,
  title = 'Demo',
  demoLink,
  demoBackground = '#fff',
}: CodeDemoProps) {
  const classes = useStyles();

  return (
    <DocsSection>
      <div className={classes.header}>
        <Title order={2}>{title}</Title>
        {demoLink && (
          <Text<'a'>
            component="a"
            target="_blank"
            size="sm"
            variant="link"
            href={`${URL_BASE}${demoLink}`}
          >
            Full code
          </Text>
        )}
      </div>
      <Paper padding="md" className={classes.demo} style={{ backgroundColor: demoBackground }}>
        {children}
      </Paper>

      <CodeHighlight code={code} language={language} className={classes.code} />
    </DocsSection>
  );
}
