import { TreeNodeData } from '@mantine/core';

export const data: TreeNodeData[] = [
  {
    value: 'electronics',
    label: 'Electronics',
    children: [
      {
        value: 'phones',
        label: 'Phones',
        children: [
          { value: 'iphone', label: 'iPhone' },
          { value: 'samsung', label: 'Samsung Galaxy' },
          { value: 'pixel', label: 'Google Pixel' },
        ],
      },
      {
        value: 'laptops',
        label: 'Laptops',
        children: [
          { value: 'macbook', label: 'MacBook' },
          { value: 'thinkpad', label: 'ThinkPad' },
        ],
      },
      { value: 'headphones', label: 'Headphones' },
    ],
  },
  {
    value: 'groceries',
    label: 'Groceries',
    children: [
      {
        value: 'fruits',
        label: 'Fruits',
        children: [
          { value: 'apples', label: 'Apples' },
          { value: 'bananas', label: 'Bananas' },
        ],
      },
      {
        value: 'vegetables',
        label: 'Vegetables',
        children: [
          { value: 'carrots', label: 'Carrots' },
          { value: 'broccoli', label: 'Broccoli' },
        ],
      },
    ],
  },
  { value: 'books', label: 'Books' },
  { value: 'toys', label: 'Toys' },
];

export const dataCode = `import { TreeNodeData } from '@mantine/core';

export const data: TreeNodeData[] = [
  {
    value: 'electronics',
    label: 'Electronics',
    children: [
      {
        value: 'phones',
        label: 'Phones',
        children: [
          { value: 'iphone', label: 'iPhone' },
          { value: 'samsung', label: 'Samsung Galaxy' },
          { value: 'pixel', label: 'Google Pixel' },
        ],
      },
      {
        value: 'laptops',
        label: 'Laptops',
        children: [
          { value: 'macbook', label: 'MacBook' },
          { value: 'thinkpad', label: 'ThinkPad' },
        ],
      },
      { value: 'headphones', label: 'Headphones' },
    ],
  },
  {
    value: 'groceries',
    label: 'Groceries',
    children: [
      {
        value: 'fruits',
        label: 'Fruits',
        children: [
          { value: 'apples', label: 'Apples' },
          { value: 'bananas', label: 'Bananas' },
        ],
      },
      {
        value: 'vegetables',
        label: 'Vegetables',
        children: [
          { value: 'carrots', label: 'Carrots' },
          { value: 'broccoli', label: 'Broccoli' },
        ],
      },
    ],
  },
  { value: 'books', label: 'Books' },
  { value: 'toys', label: 'Toys' },
];`;
