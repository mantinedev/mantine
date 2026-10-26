'use client';

import { useRef, useState } from 'react';
import { IconArrowBackUp, IconHeart } from '@tabler/icons-react';
import { Avatar, Badge, Button, Textarea, Title, UnstyledButton } from '@mantine/core';
import { type ArticleComment, initialComments } from './data';
import classes from './Comments.module.css';

interface CommentsProps {
  onPosted: () => void;
}

export function Comments({ onPosted }: CommentsProps) {
  const [comments, setComments] = useState(initialComments);
  const [liked, setLiked] = useState<string[]>([]);
  const [draft, setDraft] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const toggleLike = (id: string) =>
    setLiked((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = draft.trim();
    if (!body) {
      textareaRef.current?.focus();
      return;
    }
    const comment: ArticleComment = {
      id: `sam-${comments.length}`,
      initials: 'SO',
      name: 'Sam Okafor',
      time: 'Just now',
      body,
      likes: 0,
    };
    setComments((current) => [comment, ...current]);
    setDraft('');
    onPosted();
  };

  return (
    <section className={classes.root} aria-labelledby="lt-comments-title">
      <div className={classes.main}>
        <Title order={2} id="lt-comments-title" className={classes.title}>
          Comments <span className={classes.count}>{comments.length}</span>
        </Title>

        <form className={classes.form} onSubmit={submit}>
          <Textarea
            ref={textareaRef}
            placeholder="Share what you’ve seen on your own shore"
            aria-label="Write a comment"
            resize="vertical"
            value={draft}
            onChange={(event) => setDraft(event.currentTarget.value)}
            classNames={{ input: classes.textarea }}
          />
          <div className={classes.formRow}>
            <span>Commenting as Sam Okafor</span>
            <Button type="submit">Post comment</Button>
          </div>
        </form>

        <ul className={classes.list}>
          {comments.map((comment) => {
            const isLiked = liked.includes(comment.id);
            return (
              <li
                key={comment.id}
                className={classes.comment}
                data-reply={comment.isReply || undefined}
              >
                <Avatar className={classes.avatar}>{comment.initials}</Avatar>
                <div className={classes.head}>
                  <b>{comment.name}</b>
                  {comment.isAuthor && (
                    <Badge radius="xl" size="sm" className={classes.authorBadge}>
                      Author
                    </Badge>
                  )}
                  {comment.time}
                </div>
                <div className={classes.body}>{comment.body}</div>
                <div className={classes.actions}>
                  <UnstyledButton
                    className={classes.action}
                    aria-pressed={isLiked}
                    aria-label={`Like, ${comment.likes + (isLiked ? 1 : 0)}`}
                    onClick={() => toggleLike(comment.id)}
                  >
                    <IconHeart size={15} stroke={1.75} />
                    <span>{comment.likes + (isLiked ? 1 : 0)}</span>
                  </UnstyledButton>
                  <UnstyledButton className={classes.action}>
                    <IconArrowBackUp size={15} stroke={1.75} />
                    Reply
                  </UnstyledButton>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
