const avatar = (index: number) =>
  `https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-${index}.png`;

export const conversations = [
  {
    name: 'Olivia Martin',
    avatar: avatar(1),
    lastMessage: 'Sounds good, see you then!',
    time: '09:40',
  },
  {
    name: 'Jackson Lee',
    avatar: avatar(2),
    lastMessage: 'Can you send the invoice?',
    time: 'Yesterday',
  },
  {
    name: 'Isabella Nguyen',
    avatar: avatar(3),
    lastMessage: 'Thanks for the quick reply',
    time: 'Mon',
  },
  {
    name: 'William Kim',
    avatar: avatar(4),
    lastMessage: 'The shipment arrived today',
    time: 'Mon',
  },
  {
    name: 'Sofia Davis',
    avatar: avatar(5),
    lastMessage: 'I would like a refund for #4817',
    time: 'Sun',
  },
  { name: 'Liam Brown', avatar: avatar(6), lastMessage: 'Welcome aboard!', time: 'Sat' },
  {
    name: 'Emma Wilson',
    avatar: avatar(7),
    lastMessage: 'Is there a discount for bulk orders?',
    time: 'Fri',
  },
  {
    name: 'Noah Garcia',
    avatar: avatar(8),
    lastMessage: 'The package was left at the wrong door',
    time: 'Fri',
  },
  {
    name: 'Ava Thompson',
    avatar: avatar(9),
    lastMessage: 'Great, I will place the order today',
    time: 'Thu',
  },
  {
    name: 'Lucas Martinez',
    avatar: avatar(10),
    lastMessage: 'Do you ship to Canada?',
    time: 'Wed',
  },
  {
    name: 'Mia Anderson',
    avatar: avatar(1),
    lastMessage: 'Could you resend the confirmation email?',
    time: 'Sep 30',
  },
  {
    name: 'Ethan Clark',
    avatar: avatar(2),
    lastMessage: 'All good, thanks for your help',
    time: 'Sep 28',
  },
  {
    name: 'Chloe Robinson',
    avatar: avatar(3),
    lastMessage: 'When will the gift cards be available?',
    time: 'Sep 27',
  },
  {
    name: 'James Walker',
    avatar: avatar(4),
    lastMessage: 'I left a review, love the product',
    time: 'Sep 25',
  },
  {
    name: 'Grace Hall',
    avatar: avatar(5),
    lastMessage: 'Please cancel my subscription',
    time: 'Sep 24',
  },
  {
    name: 'Henry Young',
    avatar: avatar(6),
    lastMessage: 'Got it, thank you!',
    time: 'Sep 22',
  },
];

export type Conversation = (typeof conversations)[number];

export interface Message {
  id: number;
  own: boolean;
  text: string;
  time: string;
}

export function getMessages(conversation: Conversation): Message[] {
  const firstName = conversation.name.split(' ')[0];

  return [
    { id: 1, own: false, text: 'Hi Sarah, is my order on its way?', time: '09:02' },
    { id: 2, own: true, text: `Hi ${firstName}! Yes, it shipped this morning.`, time: '09:05' },
    {
      id: 3,
      own: true,
      text: 'You should receive the tracking number within an hour.',
      time: '09:05',
    },
    { id: 4, own: false, text: 'Perfect. Can I change the delivery address?', time: '09:20' },
    {
      id: 5,
      own: true,
      text: 'Of course, send me the new one and I will update it.',
      time: '09:24',
    },
    {
      id: 6,
      own: false,
      text: '12 Baker St, London. Delivery after 5pm if possible.',
      time: '09:31',
    },
    {
      id: 7,
      own: true,
      text: 'Done, the courier will deliver between 5 and 7pm tomorrow.',
      time: '09:32',
    },
    {
      id: 8,
      own: false,
      text: 'One more thing, is the blue version of the lamp back in stock?',
      time: '09:33',
    },
    {
      id: 9,
      own: true,
      text: 'Not yet, we expect the next batch at the end of the month.',
      time: '09:35',
    },
    { id: 10, own: true, text: 'I can notify you as soon as it is available.', time: '09:35' },
    { id: 11, own: false, text: 'Yes please, that would be great.', time: '09:36' },
    {
      id: 12,
      own: true,
      text: 'Done. You will get an email the moment it is in stock.',
      time: '09:38',
    },
    { id: 13, own: false, text: conversation.lastMessage, time: '09:40' },
  ];
}
