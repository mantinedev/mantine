import React from 'react';
import { Language } from 'prism-react-renderer';
import { Paper } from '@mantine/core';
import CodeHighlight from '../CodeHighlight/CodeHighlight';
import DocsSection from '../DocsSection/DocsSection';
import useStyles from './CodeDemo.styles';

interface CodeDemoProps {
  code: string;
  language: Language;
  demoBackground?: string;
  children: React.ReactNode;
}

export default function CodeDemo({
  code,
  language,
  children,
  demoBackground = '#fff',
}: CodeDemoProps) {
  const classes = useStyles();

  return (
    <DocsSection>
      <Paper padding="md" className={classes.demo} style={{ backgroundColor: demoBackground }}>
        {children}
      </Paper>
      <CodeHighlight code={code} language={language} className={classes.code} />
    </DocsSection>
  );
}
