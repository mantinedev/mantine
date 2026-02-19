import {
  SmileyIcon,
  SmileyMehIcon,
  SmileyNervousIcon,
  SmileySadIcon,
  SmileyWinkIcon,
} from '@phosphor-icons/react';
import { Rating } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Rating } from '@mantine/core';
import { SmileySadIcon, SmileyNervousIcon, SmileyIcon, SmileyMehIcon, SmileyWinkIcon } from '@phosphor-icons/react';

const getIconStyle = (color?: string) => ({
  width: 24,
  height: 24,
  color: color ? \`var(--mantine-color-\${color}-7)\` : undefined,
});

const getEmptyIcon = (value: number) => {
  const iconStyle = getIconStyle();

  switch (value) {
    case 1:
      return <SmileySadIcon style={iconStyle} />;
    case 2:
      return <SmileyNervousIcon style={iconStyle} />;
    case 3:
      return <SmileyIcon style={iconStyle} />;
    case 4:
      return <SmileyMehIcon style={iconStyle} />;
    case 5:
      return <SmileyWinkIcon style={iconStyle} />;
    default:
      return null;
  }
};

const getFullIcon = (value: number) => {
  switch (value) {
    case 1:
      return <SmileySadIcon style={getIconStyle('red')} />;
    case 2:
      return <SmileyNervousIcon style={getIconStyle('orange')} />;
    case 3:
      return <SmileyIcon style={getIconStyle('yellow')} />;
    case 4:
      return <SmileyMehIcon style={getIconStyle('lime')} />;
    case 5:
      return <SmileyWinkIcon style={getIconStyle('green')} />;
    default:
      return null;
  }
};

function Demo() {
  return <Rating emptySymbol={getEmptyIcon} fullSymbol={getFullIcon} highlightSelectedOnly />;
}
`;

const getIconStyle = (color?: string) => ({
  width: 24,
  height: 24,
  color: color ? `var(--mantine-color-${color}-7)` : undefined,
});

const getEmptyIcon = (value: number) => {
  const iconStyle = getIconStyle();

  switch (value) {
    case 1:
      return <SmileySadIcon style={iconStyle} />;
    case 2:
      return <SmileyNervousIcon style={iconStyle} />;
    case 3:
      return <SmileyIcon style={iconStyle} />;
    case 4:
      return <SmileyMehIcon style={iconStyle} />;
    case 5:
      return <SmileyWinkIcon style={iconStyle} />;
    default:
      return null;
  }
};

const getFullIcon = (value: number) => {
  switch (value) {
    case 1:
      return <SmileySadIcon style={getIconStyle('red')} />;
    case 2:
      return <SmileyNervousIcon style={getIconStyle('orange')} />;
    case 3:
      return <SmileyIcon style={getIconStyle('yellow')} />;
    case 4:
      return <SmileyMehIcon style={getIconStyle('lime')} />;
    case 5:
      return <SmileyWinkIcon style={getIconStyle('green')} />;
    default:
      return null;
  }
};

function Demo() {
  return <Rating emptySymbol={getEmptyIcon} fullSymbol={getFullIcon} highlightSelectedOnly />;
}

export const customSymbol: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
