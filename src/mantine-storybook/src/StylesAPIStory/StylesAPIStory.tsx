import React from 'react';
import { Text, Container, Divider, createStyles, MantineProvider } from '@mantine/core';
import * as StylesAPI from '@mantine/styles-api';
import { generateBorderStyles } from '../generate-border-styles';

interface SectionProps {
  withDivider?: boolean;
  name: string;
  children: React.ReactNode;
}

function Section({ withDivider = true, name, children }: SectionProps) {
  return (
    <>
      {withDivider && <Divider mt="md" />}

      <Text mb="xs" mt="xs" size="sm">
        Styles added with {name}
      </Text>

      <div>{children}</div>
    </>
  );
}

interface StylesAPIStoryProps {
  name: string;
  props: Record<string, any>;
  component: any;
  maxWidth?: number;
  withPadding?: boolean;
}

const rootStyles = {
  backgroundColor: '#ffcfcc',
  border: '1px solid #d93c32',
};

const useRootStyles = createStyles({ root: rootStyles });

export function StylesAPIStory({
  name,
  component: Component,
  props,
  maxWidth = 400,
  withPadding = true,
}: StylesAPIStoryProps) {
  const selectors = name in StylesAPI ? StylesAPI[name] : { root: '' };
  const styles = generateBorderStyles(selectors);
  const classNames = createStyles(styles)().classes;
  const { root } = useRootStyles().classes;

  return (
    <Container py={withPadding ? 20 : 0} size={maxWidth}>
      <Section name="sx" withDivider={false}>
        <Component {...props} sx={rootStyles} />
      </Section>

      <Section name="className">
        <Component {...props} className={root} />
      </Section>

      <Section name="styles">
        <Component {...props} styles={styles} />
      </Section>

      <Section name="classNames">
        <Component {...props} classNames={classNames} />
      </Section>

      <Section name="MantineProvider styles">
        <MantineProvider styles={{ [name]: styles }}>
          <Component {...props} />
        </MantineProvider>
      </Section>
    </Container>
  );
}
