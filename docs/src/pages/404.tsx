/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Button, Group } from '@mantine/core';
import {
  StarFilledIcon,
  TwitterLogoIcon,
  EnvelopeClosedIcon,
} from '@modulz/radix-icons';
import GatsbyLink from '../components/MdxPage/MdxProvider/GatsbyLink/GatsbyLink';
import Head from '../components/Head/Head';
import { components } from '../components/MdxPage/MdxProvider/MdxProvider';

function PageNotFound() {
  const { li: Li, ul: Ul, h1: H1, a: A, p: P } = components;

  return (
    <>
      <Head title="404" disableTitleTemplate />
      <div style={{ marginLeft: '20px' }}>
        <P>
          <H1>Congratulations!</H1>
          You've found a completely secret place on Mantine website. Unfortunately,
          this is only a 404 page.
          If you've landed on this page from
          link on Mantine website,
          please <a href="https://github.com/mantinedev/mantine/issues/new">create an issue</a>.
          Otherwise, here are some learning materials that will help you get started with Mantine:
        </P>
        <Ul>
          <Li><GatsbyLink to="/contribute/">Mantine contributions guideline</GatsbyLink></Li>
          <Li><GatsbyLink to="/guides/ssr/">Learn how to setup server side rendering with Mantine</GatsbyLink></Li>
          <Li><GatsbyLink to="/others/notifications/">Mantine notifications system</GatsbyLink></Li>
          <Li><GatsbyLink to="/theming/theming-context/">Learn how to customize Mantine theme</GatsbyLink></Li>
          <Li><GatsbyLink to="/hooks/use-merged-ref/">Learn how to merge react refs into single one</GatsbyLink></Li>
          <Li><A href="https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g">Watch 30 A11ycasts with Rob Dodson about accessibility</A></Li>
        </Ul>
        <P>
          And since you are here, what about following Mantine on Twitter and a star on Github 😉?
        </P>
        <Group>
          <Button
            component="a"
            href="https://github.com/mantinedev/mantine"
            leftIcon={<StarFilledIcon />}
            color="gray"
            variant="outline"
          >
            Star mantine on Github
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
          <Button
            component="a"
            href="https://buttondown.email/mantine"
            leftIcon={<EnvelopeClosedIcon />}
            color="blue"
            variant="outline"
          >
            Subscribe to monthly newsletter
          </Button>
        </Group>
      </div>
    </>
  );
}

export default PageNotFound;
