import { Avatar, type AvatarProps } from '@mantine/core';
import { AUTHORS, type AuthorCode } from './data';

interface AuthorAvatarProps extends Omit<AvatarProps, 'vars'> {
  code: AuthorCode;
}

export function AuthorAvatar({ code, ...others }: AuthorAvatarProps) {
  const author = AUTHORS[code];
  return (
    <Avatar
      {...others}
      title={author.name}
      vars={() => ({
        root: { '--avatar-bg': author.bg, '--avatar-color': author.color },
      })}
    >
      {code}
    </Avatar>
  );
}
