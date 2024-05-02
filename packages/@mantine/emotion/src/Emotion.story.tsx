/* eslint-disable no-console */
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import {
  Box,
  Button,
  ButtonProps,
  MantineProvider,
  MantineTheme,
  SegmentedControl,
} from '@mantine/core';
import { createStyles, EmotionHelpers } from './create-styles';
import { emotionTransform } from './emotion-transform';
import { Global } from './Global';
import { MantineEmotionProvider, useEmotionCache } from './MantineEmotionProvider';

export default { title: 'Emotion' };

const testCache = createCache({ key: 'test' });

function CacheConsumer() {
  const cache = useEmotionCache();
  console.log(cache);
  return <div>Cache consumer</div>;
}

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <MantineEmotionProvider>
        <CacheConsumer />
      </MantineEmotionProvider>
    </div>
  );
}

export function GlobalStyles() {
  return (
    <CacheProvider value={testCache}>
      <MantineEmotionProvider>
        <Global styles={{ body: { background: 'silver' } }} />
        <Global
          styles={(theme) => ({
            body: { color: theme.colors.red[9] },
          })}
        />
        <p>GlobalStyles</p>
      </MantineEmotionProvider>
    </CacheProvider>
  );
}

const useStyles = createStyles((theme, _, u) => ({
  root: {
    backgroundColor: theme.colors.blue[9],
    padding: theme.spacing.xl,

    [u.dark]: {
      [`&:hover .${u.ref('inner')}`]: {
        backgroundColor: theme.colors.violet[6],
      },
    },
  },

  inner: {
    backgroundColor: theme.colors.blue[5],
    fontSize: theme.fontSizes.lg,
    color: theme.white,
    ref: u.ref('inner'),

    [u.smallerThan('sm')]: {
      backgroundColor: theme.colors.red[3],
    },
  },
}));

function CreateStylesConsumer() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.inner}>CreateStyles</div>
    </div>
  );
}

export function CreateStyles() {
  return (
    <CacheProvider value={testCache}>
      <MantineEmotionProvider>
        <CreateStylesConsumer />
      </MantineEmotionProvider>
    </CacheProvider>
  );
}

export function EmotionSxTransform() {
  return (
    <CacheProvider value={testCache}>
      <MantineProvider stylesTransform={emotionTransform}>
        <MantineEmotionProvider>
          <Box<any>
            sx={(theme: any) => ({
              color: theme.colors.blue[7],
              '&:hover': { background: theme.colors.gray[3] },
            })}
          >
            EmotionSxTransform
          </Box>

          <SegmentedControl data={['React', 'Angular', 'Vue']} />
        </MantineEmotionProvider>
      </MantineProvider>
    </CacheProvider>
  );
}

export function EmotionStylesTransform() {
  return (
    <CacheProvider value={testCache}>
      <MantineProvider
        stylesTransform={emotionTransform}
        theme={{
          components: {
            Button: {
              styles: (theme: MantineTheme, props: ButtonProps, u: EmotionHelpers) => ({
                label: {
                  backgroundColor: theme.colors[props.color || 'cyan'][5],

                  [u.dark]: {
                    padding: 20,
                  },

                  '&:hover': {
                    color: theme.colors[props.color || 'cyan'][9],
                    backgroundColor: theme.colors[props.color || 'cyan'][8],
                  },
                },
              }),
            },
          },
        }}
      >
        <MantineEmotionProvider>
          <Button
            color="orange"
            styles={(theme) => ({
              root: {
                backgroundColor: theme.colors.red[7],
                '&:hover': {
                  backgroundColor: theme.colors.red[8],
                },
              },
            })}
          >
            Button
          </Button>
        </MantineEmotionProvider>
      </MantineProvider>
    </CacheProvider>
  );
}
