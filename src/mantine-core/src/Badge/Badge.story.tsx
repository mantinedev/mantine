import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '@mantine/theme';
import { ElementsGroup } from '../ElementsGroup/ElementsGroup';
import { Badge } from './Badge';

const CustomComponent = ({
  pads,
  children,
  ...others
}: {
  pads: string;
  children: React.ReactNode;
}) => (
  <div {...others}>
    {pads} {children} {pads}
  </div>
);

const getThemes = (props?: any) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <Badge key={color} color={color} {...props}>
      {color}
    </Badge>
  ));

storiesOf('@mantine/core/Badge', module)
  .add('Themes', () => (
    <>
      <ElementsGroup style={{ padding: 10 }}>{getThemes()}</ElementsGroup>
      <ElementsGroup style={{ padding: 10 }}>{getThemes({ variant: 'outline' })}</ElementsGroup>
      <ElementsGroup style={{ padding: 10 }}>{getThemes({ variant: 'filled' })}</ElementsGroup>
    </>
  ))
  .add('Full width', () => (
    <div style={{ width: 300, padding: 20, background: '#f9f9f9' }}>
      <Badge fullWidth>Full width badge</Badge>
      <Badge fullWidth variant="filled" style={{ marginTop: 10 }}>
        Full width badge
      </Badge>
      <Badge fullWidth variant="outline" style={{ marginTop: 10 }}>
        Full width badge
      </Badge>
    </div>
  ))
  .add('Overflow', () => (
    <div style={{ width: 140, padding: 20, background: '#f9f9f9' }}>
      <Badge fullWidth>Badge with overflow</Badge>
      <Badge fullWidth variant="filled" style={{ marginTop: 10 }}>
        Badge with overflow
      </Badge>
      <Badge fullWidth variant="outline" style={{ marginTop: 10 }}>
        Badge with overflow
      </Badge>
    </div>
  ))
  .add('Custom component', () => (
    <ElementsGroup style={{ padding: 20 }}>
      <Badge component="a" href="https://mantine.dev" target="_blank">
        Link badge
      </Badge>
      <Badge component="button" type="button">
        Button badge
      </Badge>
      <Badge component={CustomComponent} pads="$$$">
        Custom component
      </Badge>
    </ElementsGroup>
  ));
