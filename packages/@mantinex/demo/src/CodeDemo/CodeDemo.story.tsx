import { CodeHighlightTabsCode } from '@mantinex/shiki';
import { CodeDemo } from './CodeDemo';

export default { title: 'DS/CodeDemo' };

const reactCode = `
import { MantineLogoRounded } from './MantineLogoRounded';
import { MantineLogoText } from './MantineLogoText';
import { LogoProps } from './use-mantine-logo-colors';

export interface MantineLogoProps extends LogoProps {
  type?: 'mark' | 'full';
}

export function MantineLogo({ type, ...others }: MantineLogoProps) {
  if (type === 'mark') {
    return <MantineLogoRounded {...others} />;
  }

  return <MantineLogoText {...others} />;
}
`;

const cssCode = `.code {
  display: inline-block;
  padding: rem(2px) rem(4px);
  font-size: rem(13px);
  border-radius: var(--mantine-radius-xs);
  line-height: var(--mantine-line-height);
  font-family: var(--mantine-font-family-monospace);
}

.pre {
  display: block;
  padding: var(--mantine-spacing-md);
  line-height: 1.7;
  margin: 0;
}

.header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.copy {
  background-color: transparent;
  opacity: 0.8;
  margin: 0;
  margin-top: rem(7px);
  margin-right: rem(7px);

  @mixin hover {
    opacity: 1;
  }

  @media (max-width: 40em) {
    display: none;
  }
}`;

const code: CodeHighlightTabsCode[] = [
  { language: 'tsx', code: reactCode, fileName: 'Demo.tsx' },
  { language: 'scss', code: cssCode, fileName: 'Demo.module.css' },
];

function DemoComponent() {
  return <div style={{ background: 'pink' }}>Hello</div>;
}

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <CodeDemo code={code} centered maxWidth={400} defaultExpanded={false}>
        <DemoComponent />
      </CodeDemo>
    </div>
  );
}
