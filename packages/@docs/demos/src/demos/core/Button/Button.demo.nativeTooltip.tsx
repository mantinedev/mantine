import { Box, Button } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import classes from './Button.demo.nativeTooltipStyles.module.css';

const code = `
import { Box, Button } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <>
      <Button aria-describedby="btn-tooltip" className={classes.button}>
        Button with tooltip
      </Button>
      <Box id="btn-tooltip" role="tooltip" className={classes.tooltip}>
        Tooltip for button
      </Box>
    </>
  );
}
`;

const cssCode = `
.button {
  anchor-name: --btn;
}

.tooltip {
  --tooltip-radius: var(--mantine-radius-default);

  position-anchor: --btn;
  bottom: anchor(top);
  margin-bottom: 5px;
  justify-self: anchor-center;
  position-try-fallbacks: flip-block;

  position: absolute;
  padding: calc(var(--mantine-spacing-xs) / 2) var(--mantine-spacing-xs);
  pointer-events: none;
  font-size: var(--mantine-font-size-sm);
  white-space: nowrap;
  border-radius: var(--tooltip-radius);

  @mixin where-light {
    background-color: var(--tooltip-bg, var(--mantine-color-gray-9));
    color: var(--tooltip-color, var(--mantine-color-white));
  }

  @mixin where-dark {
    background-color: var(--tooltip-bg, var(--mantine-color-gray-2));
    color: var(--tooltip-color, var(--mantine-color-black));
  }

  opacity: 0;
  visibility: hidden;
  transition: opacity 100ms ease;
}

.button:hover + .tooltip {
  opacity: 1;
  visibility: visible;
}
`;

function Demo() {
  return (
    <>
      <Button aria-describedby="btn-tooltip" className={classes.button}>
        Button with tooltip
      </Button>
      <Box id="btn-tooltip" role="tooltip" className={classes.tooltip}>
        Tooltip for button
      </Box>
    </>
  );
}

export const nativeTooltip: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'Demo.module.css', code: cssCode, language: 'scss' },
  ],
};
