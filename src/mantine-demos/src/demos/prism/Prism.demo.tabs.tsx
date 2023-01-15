import React from 'react';
import { Prism } from '@mantine/prism';
import { MantineDemo } from '@mantine/ds';
import { py, css } from './Prism.demo.languages';
import { demoCode } from './Prism.demo.usage';

function CSSIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <path fill="#0277BD" d="M41 5H7l3 34 14 4 14-4 3-34z" />
      <path fill="#039BE5" d="M24 8v31.9l11.2-3.2L37.7 8z" />
      <path fill="#FFF" d="M33.1 13H24v4h4.9l-.3 4H24v4h4.4l-.3 4.5-4.1 1.4v4.2l7.9-2.6.7-11.5z" />
      <path
        fill="#EEE"
        d="M24 13v4h-8.9l-.3-4H24zm-4.6 8l.2 4H24v-4h-4.6zm.4 6h-4l.3 5.5 7.9 2.6v-4.2l-4.1-1.4-.1-2.5z"
      />
    </svg>
  );
}

function PythonIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <path
        fill="#0277BD"
        d="M24.047 5c-1.555.005-2.633.142-3.936.367-3.848.67-4.549 2.077-4.549 4.67V14h9v2H10.87c-2.636 0-4.943 1.242-5.674 4.219-.826 3.417-.863 5.557 0 9.125C5.851 32.005 7.294 34 9.931 34h3.632v-5.104c0-2.966 2.686-5.896 5.764-5.896h7.236c2.523 0 5-1.862 5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672.061-.006-1.756-.371-3.298-.365zm-4.984 4c.821 0 1.5.677 1.5 1.502a1.5 1.5 0 01-1.5 1.498 1.49 1.49 0 01-1.5-1.498A1.5 1.5 0 0119.063 9z"
      />
      <path
        fill="#FFC107"
        d="M23.078 43c1.555-.005 2.633-.142 3.936-.367 3.848-.67 4.549-2.077 4.549-4.67V34h-9v-2h13.693c2.636 0 4.943-1.242 5.674-4.219.826-3.417.863-5.557 0-9.125C41.274 15.995 39.831 14 37.194 14h-3.632v5.104c0 2.966-2.686 5.896-5.764 5.896h-7.236c-2.523 0-5 1.862-5 4.377v8.586c0 2.439 1.759 4.263 4.218 4.672-.061.006 1.756.371 3.298.365zm4.985-4c-.821 0-1.5-.677-1.5-1.502a1.5 1.5 0 011.5-1.498c.837 0 1.5.664 1.5 1.498 0 .822-.664 1.502-1.5 1.502z"
      />
    </svg>
  );
}

function TsIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <path fill="#1976d2" d="M6 6h36v36H6z" />
      <path
        fill="#fff"
        d="M27.49 22H14.227v3.264h4.757V40h3.769V25.264h4.737zM39.194 26.084s-1.787-1.192-3.807-1.192-2.747.96-2.747 1.986c0 2.648 7.381 2.383 7.381 7.712 0 8.209-11.254 4.568-11.254 4.568V35.22s2.152 1.622 4.733 1.622 2.483-1.688 2.483-1.92c0-2.449-7.315-2.449-7.315-7.878 0-7.381 10.658-4.469 10.658-4.469l-.132 3.509z"
      />
    </svg>
  );
}

const code = `
import { Prism } from '@mantine/prism';

function CSSIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <path fill="#0277BD" d="M41 5H7l3 34 14 4 14-4 3-34z" />
      <path fill="#039BE5" d="M24 8v31.9l11.2-3.2L37.7 8z" />
      <path fill="#FFF" d="M33.1 13H24v4h4.9l-.3 4H24v4h4.4l-.3 4.5-4.1 1.4v4.2l7.9-2.6.7-11.5z" />
      <path
        fill="#EEE"
        d="M24 13v4h-8.9l-.3-4H24zm-4.6 8l.2 4H24v-4h-4.6zm.4 6h-4l.3 5.5 7.9 2.6v-4.2l-4.1-1.4-.1-2.5z"
      />
    </svg>
  );
}

function PythonIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <path
        fill="#0277BD"
        d="M24.047 5c-1.555.005-2.633.142-3.936.367-3.848.67-4.549 2.077-4.549 4.67V14h9v2H10.87c-2.636 0-4.943 1.242-5.674 4.219-.826 3.417-.863 5.557 0 9.125C5.851 32.005 7.294 34 9.931 34h3.632v-5.104c0-2.966 2.686-5.896 5.764-5.896h7.236c2.523 0 5-1.862 5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672.061-.006-1.756-.371-3.298-.365zm-4.984 4c.821 0 1.5.677 1.5 1.502a1.5 1.5 0 01-1.5 1.498 1.49 1.49 0 01-1.5-1.498A1.5 1.5 0 0119.063 9z"
      />
      <path
        fill="#FFC107"
        d="M23.078 43c1.555-.005 2.633-.142 3.936-.367 3.848-.67 4.549-2.077 4.549-4.67V34h-9v-2h13.693c2.636 0 4.943-1.242 5.674-4.219.826-3.417.863-5.557 0-9.125C41.274 15.995 39.831 14 37.194 14h-3.632v5.104c0 2.966-2.686 5.896-5.764 5.896h-7.236c-2.523 0-5 1.862-5 4.377v8.586c0 2.439 1.759 4.263 4.218 4.672-.061.006 1.756.371 3.298.365zm4.985-4c-.821 0-1.5-.677-1.5-1.502a1.5 1.5 0 011.5-1.498c.837 0 1.5.664 1.5 1.498 0 .822-.664 1.502-1.5 1.502z"
      />
    </svg>
  );
}

function TsIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <path fill="#1976d2" d="M6 6h36v36H6z" />
      <path
        fill="#fff"
        d="M27.49 22H14.227v3.264h4.757V40h3.769V25.264h4.737zM39.194 26.084s-1.787-1.192-3.807-1.192-2.747.96-2.747 1.986c0 2.648 7.381 2.383 7.381 7.712 0 8.209-11.254 4.568-11.254 4.568V35.22s2.152 1.622 4.733 1.622 2.483-1.688 2.483-1.92c0-2.449-7.315-2.449-7.315-7.878 0-7.381 10.658-4.469 10.658-4.469l-.132 3.509z"
      />
    </svg>
  );
}

function Demo() {
  return (
    <Prism.Tabs defaultValue="styles.css">
      <Prism.TabsList>
        <Prism.Tab value="styles.css" icon={<CSSIcon width="1rem" height="1rem" />}>
          styles.css
        </Prism.Tab>
        <Prism.Tab value="decorator.py" icon={<PythonIcon width="1rem" height="1rem" />}>
          decorator.py
        </Prism.Tab>
        <Prism.Tab value="component.tsx" icon={<TsIcon width="1rem" height="1rem" />}>
          component.tsx
        </Prism.Tab>
      </Prism.TabsList>

      <Prism.Panel language="css" value="styles.css">
        {/* css code */}
      </Prism.Panel>
      <Prism.Panel language="python" value="decorator.py">
        {/* python code */}
      </Prism.Panel>
      <Prism.Panel language="tsx" value="component.tsx">
        {/* typescript code */}
      </Prism.Panel>
    </Prism.Tabs>
  );
}
`;

function Demo() {
  return (
    <Prism.Tabs defaultValue="styles.css">
      <Prism.TabsList>
        <Prism.Tab value="styles.css" icon={<CSSIcon width="1rem" height="1rem" />}>
          styles.css
        </Prism.Tab>
        <Prism.Tab value="decorator.py" icon={<PythonIcon width="1rem" height="1rem" />}>
          decorator.py
        </Prism.Tab>
        <Prism.Tab value="component.tsx" icon={<TsIcon width="1rem" height="1rem" />}>
          component.tsx
        </Prism.Tab>
      </Prism.TabsList>

      <Prism.Panel language="css" value="styles.css">
        {css}
      </Prism.Panel>
      <Prism.Panel language="python" value="decorator.py">
        {py}
      </Prism.Panel>
      <Prism.Panel language="tsx" value="component.tsx">
        {demoCode}
      </Prism.Panel>
    </Prism.Tabs>
  );
}

export const tabs: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
