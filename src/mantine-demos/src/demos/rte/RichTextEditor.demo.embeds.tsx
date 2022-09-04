import React, { useState } from 'react';
import { SSRWrapper } from './_SSRWrapper';

const initialValue =
  '<h2 class="ql-align-center">Embedding videos and images is simple</h2><p>To embed a video click on the video icon and paste a link to YouTube, Vimeo or other video service which supports inserting via iframe. Images are more complex, you will need to setup uploading function and then editor will handle all heavy image stuff: dnd, pasting from clipboard and inserting with image button. Try the thing out!</p><h3>Image embed</h3><p><img src="https://images.unsplash.com/photo-1622976900798-4698bb3ea66e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=60"></p><p><br></p><h3>YouTube video embed</h3><iframe class="ql-video" frameborder="0" allowfullscreen="true" src="https://www.youtube.com/embed/T6HdBplLmuU?showinfo=0"></iframe><p><br></p><h3>Vimeo video embed</h3><iframe class="ql-video" frameborder="0" allowfullscreen="true" src="https://player.vimeo.com/video/601252574/"></iframe><p><br></p>';

function Demo() {
  const [value, onChange] = useState(initialValue);
  return <SSRWrapper value={value} onChange={onChange} />;
}

export const embeds: MantineDemo = {
  type: 'demo',
  component: Demo,
};
