'use client';

import { useRef, useState } from 'react';
import {
  Anchor,
  Avatar,
  Button,
  MantineProvider,
  Portal,
  Text,
  Title,
  Transition,
} from '@mantine/core';
import { PresetFrame } from '@/components/PresetFrame';
import { Comments } from './Comments';
import { ContentsRail } from './ContentsRail';
import { footerLinks, relatedStories, tags } from './data';
import { Masthead } from './Masthead';
import { Newsletter } from './Newsletter';
import { Prose } from './Prose';
import { ShoreCrossSection } from './ShoreCrossSection';
import { StoryThumb } from './StoryThumb';
import { cssVariablesResolver, theme } from './theme';
import classes from './LowTide.module.css';
import proseClasses from './Prose.module.css';

const FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Gloock&family=Literata:ital,opsz,wght@0,7..72,400;0,7..72,500;0,7..72,600;1,7..72,400&family=Work+Sans:wght@400;500;600&display=swap';

const preventDefault = (event: React.MouseEvent) => event.preventDefault();

function Article() {
  const [readingSize, setReadingSize] = useState('19');
  const [saved, setSaved] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const timeout = useRef<number>(undefined);

  const showToast = (message: string) => {
    setToast(message);
    window.clearTimeout(timeout.current);
    timeout.current = window.setTimeout(() => setToast(null), 2400);
  };

  const copyLink = () => {
    const fallback = () => showToast('Copy the link from the address bar');
    try {
      navigator.clipboard
        .writeText('https://lowtide.example/wembury-rock-pools')
        .then(() => showToast('Link copied'), fallback);
    } catch {
      fallback();
    }
  };

  const toggleSaved = () => {
    const next = !saved;
    setSaved(next);
    showToast(next ? 'Saved to your reading list' : 'Removed from your reading list');
  };

  return (
    <div className={classes.root}>
      <Masthead />

      <article>
        <header className={classes.header}>
          <Anchor href="#" underline="hover" className={classes.kicker} onClick={preventDefault}>
            Shorelines
          </Anchor>
          <Title order={1} className={classes.headline}>
            What the rock pools at Wembury remember
          </Title>
          <p className={classes.standfirst}>
            For ten years, volunteers have counted every anemone, crab and blenny in the same twelve
            pools on the south Devon coast. Their notebooks describe a sea that is quietly getting
            warmer.
          </p>
          <div className={classes.byline}>
            <Avatar>IT</Avatar>
            <span>
              By <b>Isobel Tremayne</b>
            </span>
            <span className={classes.bylineSeparator} aria-hidden />
            <span>October 2026, 9 min read</span>
          </div>
        </header>

        <figure className={classes.hero}>
          <ShoreCrossSection />
          <figcaption className={classes.caption}>
            <b>The shore in layers.</b> Each zone is under water for a different share of the day,
            so each holds different life. Most of the twelve survey pools sit on the middle shore.
            Drawing by Low Tide.
          </figcaption>
        </figure>

        <div className={proseClasses.body}>
          <ContentsRail
            readingSize={readingSize}
            onReadingSizeChange={setReadingSize}
            saved={saved}
            onCopyLink={copyLink}
            onToggleSaved={toggleSaved}
          />
          <Prose readingSize={readingSize} onReadingSizeChange={setReadingSize} />
        </div>
      </article>

      <div className={classes.after}>
        <div className={classes.afterMain}>
          <div className={classes.tags} aria-label="Topics">
            {tags.map((tag) => (
              <Button
                key={tag}
                component="a"
                href="#"
                variant="default"
                radius="xl"
                className={classes.tag}
                onClick={preventDefault}
              >
                {tag}
              </Button>
            ))}
          </div>
          <div className={classes.authorCard}>
            <Avatar
              size={64}
              className={classes.authorAvatar}
              classNames={{ placeholder: classes.authorInitials }}
            >
              IT
            </Avatar>
            <span className={classes.authorName}>Isobel Tremayne</span>
            <span className={classes.authorBio}>
              Isobel writes about the coast from Plymouth. Her book on the Tamar estuary, Brackish,
              came out last spring.
            </span>
            <span className={classes.authorLinks}>
              <Anchor href="#" onClick={preventDefault}>
                More from Isobel
              </Anchor>
              <Anchor href="#" onClick={preventDefault}>
                Follow
              </Anchor>
            </span>
          </div>
        </div>
      </div>

      <Newsletter />

      <section className={classes.related} aria-labelledby="lt-related-title">
        <div className={classes.sectionHead}>
          <Title order={2} id="lt-related-title">
            More from Shorelines
          </Title>
          <Anchor href="#" size="sm" fw={600} onClick={preventDefault}>
            All stories
          </Anchor>
        </div>
        <div className={classes.cards}>
          {relatedStories.map((story) => (
            <a key={story.title} className={classes.card} href="#" onClick={preventDefault}>
              <div className={classes.thumb}>
                <StoryThumb kind={story.thumb} />
              </div>
              <span className={classes.cardSection}>{story.section}</span>
              <Title order={3} className={classes.cardTitle}>
                {story.title}
              </Title>
              <p className={classes.cardDescription}>{story.description}</p>
              <Text size="xs" component="span">
                {story.readTime}
              </Text>
            </a>
          ))}
        </div>
      </section>

      <Comments onPosted={() => showToast('Comment posted')} />

      <footer className={classes.footer}>
        <span>Low Tide is published four times a year from Falmouth.</span>
        <nav aria-label="Footer">
          {footerLinks.map((link) => (
            <a key={link} href="#" onClick={preventDefault}>
              {link}
            </a>
          ))}
        </nav>
      </footer>

      <Portal>
        <Transition mounted={toast !== null} transition="fade-up" duration={160}>
          {(styles) => (
            <div className={classes.toast} style={styles} role="status">
              {toast}
            </div>
          )}
        </Transition>
      </Portal>
    </div>
  );
}

export function LowTide() {
  return (
    <>
      <link rel="stylesheet" href={FONTS_URL} precedence="default" />
      <MantineProvider theme={theme} cssVariablesResolver={cssVariablesResolver}>
        <PresetFrame>
          <Article />
        </PresetFrame>
      </MantineProvider>
    </>
  );
}
