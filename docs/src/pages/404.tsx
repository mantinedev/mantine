/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Button, Container, Group } from '@mantine/core';
import { StarFilledIcon, TwitterLogoIcon } from '@modulz/radix-icons';
import GatsbyLink from '../components/MdxPage/MdxProvider/GatsbyLink/GatsbyLink';
import Head from '../components/Head/Head';
import { components } from '../components/MdxPage/MdxProvider/MdxProvider';

export default function PageNotFound() {
  const { li: Li, ul: Ul, h1: H1, a: A, p: P } = components;

  return (
    <>
      <Head title="404" disableTitleTemplate />
      <Container size={1100}>
        <P>
          <H1>Congratulations!</H1>
          You've found a completely secret place on Mantine website. Unfortunately, this is only a
          404 page. If you've landed on this page from a link on the Mantine website, please{' '}
          <A href="https://github.com/mantinedev/mantine/issues/new">create an issue</A>. Otherwise,
          here are some learning materials that will help you get started with Mantine:
        </P>
        <Ul>
          <Li>
            <GatsbyLink to="/pages/contributing/">Mantine contributions guideline</GatsbyLink>
          </Li>
          <Li>
            <GatsbyLink to="/theming/ssr/">
              Learn how to setup server side rendering with Mantine
            </GatsbyLink>
          </Li>
          <Li>
            <GatsbyLink to="/others/notifications/">Mantine notifications system</GatsbyLink>
          </Li>
          <Li>
            <GatsbyLink to="/theming/mantine-provider/">
              Learn how to customize Mantine theme
            </GatsbyLink>
          </Li>
          <Li>
            <GatsbyLink to="/hooks/use-merged-ref/">
              Learn how to merge react refs into single one
            </GatsbyLink>
          </Li>
        </Ul>
        <P>
          And since you are here, what about following Mantine on Twitter and a star on GitHub 😉?
        </P>

        <Group>
          <Button
            component="a"
            href="https://github.com/mantinedev/mantine"
            leftIcon={<StarFilledIcon />}
            color="gray"
            variant="outline"
          >
            Star mantine on GitHub
          </Button>
          <Button
            component="a"
            href="https://twitter.com/mantinedev"
            leftIcon={<TwitterLogoIcon />}
            color="blue"
            variant="outline"
          >
            Follow Mantine on Twitter
          </Button>
        </Group>
      </Container>
    </>
  );
}
