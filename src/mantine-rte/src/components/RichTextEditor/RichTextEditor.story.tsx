import React, { useState } from 'react';
import { RichTextEditor } from './RichTextEditor';

export default { title: 'RichTextEditor' };

const html = `
<h1>Rich Text editor</h1>
<p>Wooper usually lives in water. However, it occasionally comes out onto land in search of food. On land, it coats its body with a gooey, toxic film.Its horn spins like a drill to steadily hollow out rocks—even harder ones. The coloration of the male is more vivid.It’s proud of its thick horn. In Alola, its biggest rival is Vikavolt, which it’s always fighting with.</p>

<p>Clothing made from Mareep’s fleece is easily charged with static electricity, so a special process is used on it.One of Electrode’s characteristics is its attraction to electricity. It is a problematical Pokémon that congregates mostly at electrical power plants to feed on electricity that has just been generated.Grumpig uses the black pearls on its body to wield its fantastic powers. When it is doing so, it dances bizarrely. This Pokémon’s black pearls are valuable as works of art.</p>

<img src="https://images.unsplash.com/photo-1542779283-429940ce8336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3150&q=80" />

<h2>Sub titlte</h2>
<p>It swims <a href="https://mantine.dev">along with its mouth</a> open and swallows down seawater along with its food. It sprays excess water out of its nostrils.It likes swimming around with people on its back. In the Alola region, it’s an important means of transportation over water.While Milotic is said to be the most beautiful Pokémon, Trainers who like Feebas and have raised it are seemingly disappointed by Milotic.</p>

<!-- <iframe class="ql-video" frameborder="0" allowfullscreen="true" src="https://www.youtube.com/embed/LoLWYHoExyo?showinfo=0"></iframe> -->

<img src="https://images.unsplash.com/photo-1542779283-429940ce8336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3150&q=80" />

<img src="https://images.unsplash.com/photo-1542779283-429940ce8336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3150&q=80" />
`;

const handleImageUpload = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append('image', file);

    fetch('https://api.imgbb.com/1/upload?key=d36eb6591370ae7f9089d85875e56b22', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => resolve(result.data.url))
      .catch(() => reject(new Error('Upload failed')));
  });

export function Usage() {
  const [value, onChange] = useState(html);
  return (
    <div style={{ padding: 40, maxWidth: 800, margin: 'auto' }}>
      <RichTextEditor
        value={value}
        onChange={onChange}
        onImageUpload={handleImageUpload}
        stickyOffset={0}
      />
    </div>
  );
}

export function Placeholder() {
  const [value, onChange] = useState('');
  return (
    <div style={{ padding: 40, maxWidth: 800, margin: 'auto' }}>
      <RichTextEditor
        placeholder="This is placeholder"
        value={value}
        onChange={onChange}
        onImageUpload={handleImageUpload}
        stickyOffset={0}
      />
    </div>
  );
}
