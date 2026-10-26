'use client';

import { Avatar, Badge, Text, Title } from '@mantine/core';
import { PresetFrame } from '@/components/PresetFrame';
import { PresetProvider } from '@/components/PresetProvider';
import { AuthorAvatar } from './AuthorAvatar';
import { ContourCover } from './ContourCover';
import { FOOTER_LINKS } from './data';
import { Header } from './Header';
import { Posts } from './Posts';
import { Sidebar } from './Sidebar';
import { cssVariablesResolver, theme } from './theme';
import classes from './Kestrel.module.css';

const FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&display=swap';

const preventDefault = (event: React.MouseEvent) => event.preventDefault();

function Blog() {
  return (
    <div className={classes.root}>
      <Header />

      <section className={classes.intro}>
        <Title order={1} className={classes.introTitle}>
          Engineering at Kestrel
        </Title>
        <Text className={classes.introText}>
          How we build offline maps for hikers and mountain rescue teams: rendering, data, phones
          that lose signal, and the people doing the work.
        </Text>
        <div className={classes.facts}>
          <div className={classes.fact}>
            <b>82</b>
            <span>Posts since 2024</span>
          </div>
          <div className={classes.fact}>
            <b>14</b>
            <span>Engineers writing</span>
          </div>
        </div>
      </section>

      <a href="#" className={classes.featured} onClick={preventDefault}>
        <ContourCover
          seed={7}
          withRoute
          width={640}
          height={400}
          className={classes.featuredCover}
          label="Contour lines of a mountain with a hiking route crossing them"
        />
        <div className={classes.featuredText}>
          <div className={classes.labelRow}>
            <Badge className={classes.newBadge}>New</Badge>
            <span className={classes.topic}>Rendering</span>
            <Text span size="xs">
              16 min read
            </Text>
          </div>
          <Title order={2} className={classes.featuredTitle}>
            Drawing contour lines at 60 fps on a five-year-old phone
          </Title>
          <Text className={classes.featuredExcerpt}>
            Contour lines are the most important thing on a hiking map and the most expensive thing
            to draw. Here is how we moved them to the GPU, cut the vertex count by 70%, and kept
            them crisp at every zoom level.
          </Text>
          <div className={classes.authors}>
            <Avatar.Group spacing={10}>
              <AuthorAvatar code="IV" size={34} />
              <AuthorAvatar code="TW" size={34} />
            </Avatar.Group>
            <span>
              <b>Inés Valcárcel</b> and <b>Tomasz Wierzbicki</b>
              <br />
              <Text span size="xs">
                14 October 2026
              </Text>
            </span>
          </div>
        </div>
      </a>

      <div className={classes.main}>
        <Posts />
        <Sidebar />
      </div>

      <footer className={classes.footer}>
        <span>Kestrel Maps Ltd, Kendal, Cumbria</span>
        <nav aria-label="Footer" className={classes.footerNav}>
          {FOOTER_LINKS.map((link) => (
            <a key={link} href="#" onClick={preventDefault}>
              {link}
            </a>
          ))}
        </nav>
      </footer>
    </div>
  );
}

export function Kestrel() {
  return (
    <>
      <link rel="stylesheet" href={FONTS_URL} precedence="default" />
      <PresetProvider theme={theme} cssVariablesResolver={cssVariablesResolver}>
        <PresetFrame>
          <Blog />
        </PresetFrame>
      </PresetProvider>
    </>
  );
}
