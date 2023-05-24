import React from 'react';
import { Image } from './Image';

export default { title: 'Image' };

const url =
  'https://img.freepik.com/free-photo/shallow-focus-shot-orange-butterfly-yellow-flower_181624-40605.jpg?w=740&t=st=1680534125~exp=1680534725~hmac=a4585a5c52338662fc0439ec1aac90076232ad5c319c886863c30fa4f5894ac6';

export function ImageProps() {
  return (
    <div style={{ padding: 40 }}>
      <Image
        src={url}
        height={250}
        width={250}
        styles={{
          image: {
            objectFit: 'cover',
          },
        }}
        imageProps={{
          style: {
            border: '5px tomato solid',
          },
        }}
      />
    </div>
  );
}
