import React from 'react';
import { Language } from 'prism-react-renderer';
import { Paper, Title, useMantineTheme } from '@mantine/core';
import CodeHighlight from '../CodeHighlight/CodeHighlight';

interface CodeDemoProps {
  code: string;
  language: Language;
  title?: React.ReactNode;
  children: React.ReactNode;
}

export default function CodeDemo({ code, language, children, title }: CodeDemoProps) {
  const theme = useMantineTheme();

  return (
    <div style={{ marginBottom: theme.spacing.xl }}>
      {title && <Title order={2}>{title}</Title>}
      <CodeHighlight code={code} language={language} />
      <Paper padding="md" shadow="xs">
        {children}
      </Paper>
    </div>
  );
}
