import React from 'react';
import { storiesOf } from '@storybook/react';
import { Avatar } from '../Avatar';
import { Skeleton } from './Skeleton';

storiesOf('@mantine/core/Skeleton', module)
  .add('General usage', () => (
    <div style={{ padding: 40 }}>
      <Skeleton height={8} radius="xl" />
      <Skeleton height={8} mt={6} radius="xl" />
      <Skeleton height={8} mt={6} width="70%" radius="xl" />
    </div>
  ))
  .add('Circle', () => (
    <div style={{ padding: 40 }}>
      <Skeleton height={40} circle />
      <Skeleton height={60} circle mt="md" />
    </div>
  ))
  .add('With children', () => (
    <div style={{ padding: 40 }}>
      <Skeleton>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, maxime dolore. Debitis
          voluptates nulla aliquid ipsa aliquam pariatur, doloribus quae. Asperiores, dolore aut
          optio repellendus beatae pariatur atque maiores labore?
        </p>
        <p>
          Blanditiis illum earum quos aliquid! Dolorum fugit consectetur quia. Iusto expedita, vitae
          in mollitia corrupti iure reiciendis illum reprehenderit sapiente distinctio. Quasi, iure
          eligendi. Tempora ea veritatis animi explicabo exercitationem.
        </p>
        <p>
          Perspiciatis libero voluptatibus voluptatum consectetur nisi totam sed expedita id fugit
          reiciendis sunt, incidunt provident quia impedit hic quibusdam praesentium cupiditate
          officia, ab est voluptas assumenda quod! Veniam, fugit error!
        </p>
        <p>
          Quibusdam rem incidunt magni dolore beatae officia tempore, error culpa, assumenda soluta
          quae sequi ex voluptatibus accusantium perspiciatis! Atque in laborum voluptate dicta
          voluptatem non, quae velit pariatur nostrum praesentium!
        </p>
      </Skeleton>
    </div>
  ))
  .add('Children with radius', () => (
    <Skeleton circle height={68}>
      <Avatar size={68}>VR</Avatar>
    </Skeleton>
  ));
