import React from 'react';
import { EyeOpenIcon, ChatBubbleIcon } from '@modulz/radix-icons';
import { Card, Text, Group, Center, createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => {
  const image = getRef('image');

  return {
    card: {
      position: 'relative',
      height: 280,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],

      [`&:hover .${image}`]: {
        transform: 'scale(1.03)',
      },
    },

    image: {
      ref: image,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundSize: 'cover',
      transition: 'transform 500ms ease',
    },

    overlay: {
      position: 'absolute',
      top: '20%',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)',
    },

    content: {
      height: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      zIndex: 1,
    },

    title: {
      color: theme.white,
      marginBottom: 5,
    },

    body: {
      color: theme.colors.gray[3],
    },

    bodyText: {
      color: theme.colors.dark[2],
    },
  };
});

interface ImageCardProps {
  link: string;
  image: string;
  title: string;
  author: string;
  views: number;
  comments: number;
}

export function ImageCard({ image, title, author, views, comments, link }: ImageCardProps) {
  const { classes } = useStyles();
  const iconStyle = { marginRight: 7, width: 12, height: 12 };

  return (
    <Card
      padding="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      component="a"
      href={link}
      target="_blank"
    >
      <div className={classes.image} style={{ backgroundImage: `url(${image})` }} />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.title} weight={500}>
            {title}
          </Text>

          <Group className={classes.body} position="apart" spacing="xs">
            <Text size="sm" className={classes.bodyText}>
              {author}
            </Text>

            <Group spacing="lg">
              <Center>
                <EyeOpenIcon style={iconStyle} />
                <Text size="sm" className={classes.bodyText}>
                  {views}
                </Text>
              </Center>
              <Center>
                <ChatBubbleIcon style={iconStyle} />
                <Text size="sm" className={classes.bodyText}>
                  {comments}
                </Text>
              </Center>
            </Group>
          </Group>
        </div>
      </div>
    </Card>
  );
}
