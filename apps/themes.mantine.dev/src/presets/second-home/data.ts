export type Role = 'selling' | 'buying';
export type OfferState = 'open' | 'agreed' | 'declined' | 'superseded';
export type ConversationStatus = 'offer' | 'reserved' | 'agreed' | null;
export type InboxTab = 'all' | 'selling' | 'buying' | 'archived';

export interface Offer {
  by: 'me' | 'them';
  amount: number;
  state: OfferState;
}

export type Message =
  | { kind: 'day'; text: string }
  | { kind: 'system'; text: string; ok?: boolean }
  | { kind: 'offer'; index: number; note: string; time: string }
  | { kind: 'pickup' }
  | { kind: 'typing' }
  | {
      kind: 'text';
      from: 'me' | 'them';
      text: string;
      time: string;
      seen?: boolean;
      photo?: string;
    };

export interface Item {
  title: string;
  price: number;
  condition: string;
  size: string;
  area: string;
  min: number;
  max: number;
}

export interface Conversation {
  id: string;
  name: string;
  initials: string;
  role: Role;
  photo: string;
  time: string;
  unread: number;
  item: Item;
  replies: string;
  offers: Offer[];
  status: ConversationStatus;
  agreed: number | null;
  sold: boolean;
  blocked: boolean;
  archived: boolean;
  messages: Message[];
}

export const PHOTO_ROOT = '/presets/second-home-marketplace-inbox';

export function photoUrl(name: string) {
  return `${PHOTO_ROOT}/${name}.jpg`;
}

export function money(amount: number) {
  return `£${amount}`;
}

export const PICKUP_DAYS = ['Sat 1 Nov', 'Sun 2 Nov', 'Mon 3 Nov'];
export const PICKUP_SLOTS = ['09:00 to 12:00', '12:00 to 15:00', '15:00 to 18:00'];
export const COUNTER_PRESETS = [160, 165, 170];

export const QUICK_REPLIES: Record<Role, string[]> = {
  selling: ['Yes, still available', 'Sorry, I can’t deliver', 'The price is firm'],
  buying: ['Is it still available?', 'Can you deliver?', 'Can I see more photos?'],
};

export const TABS: { value: InboxTab; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'selling', label: 'Selling' },
  { value: 'buying', label: 'Buying' },
  { value: 'archived', label: 'Archived' },
];

export const CREDITS =
  'Second Home is a fictional marketplace. Photos from Wikimedia Commons: Teak sideboard and drawer detail by coffee shop soulja (CC BY 2.0); Wood grain by Kurt Kaiser (CC0); Bentwood chair by Kgbo (CC BY-SA 4.0); Café chairs by Kgbo (CC BY-SA 4.0); Chest of drawers by Thomas Quine (CC BY 2.0); Table lamp by Tess Mattew (CC BY-SA 4.0).';

export const CONVERSATIONS: Conversation[] = [
  {
    id: 'callum',
    name: 'Callum',
    initials: 'CM',
    role: 'selling',
    photo: 'sideboard',
    time: '10:46',
    unread: 1,
    item: {
      title: 'Mid-century teak sideboard',
      price: 180,
      condition: 'Good, light marks on top',
      size: '183 × 46 × 76 cm',
      area: 'Hyndland, G12',
      min: 120,
      max: 200,
    },
    replies: 'Usually replies within an hour',
    offers: [{ by: 'them', amount: 150, state: 'open' }],
    status: 'offer',
    agreed: null,
    sold: false,
    blocked: false,
    archived: false,
    messages: [
      { kind: 'day', text: 'Today' },
      {
        kind: 'text',
        from: 'them',
        text: 'Hi! Is the sideboard still available? It would fit perfectly under our window.',
        time: '10:02',
      },
      {
        kind: 'text',
        from: 'me',
        text: 'Hi Callum, yes it is. It came from my gran’s flat, solid teak, and all five drawers run smoothly.',
        time: '10:15',
        seen: true,
      },
      {
        kind: 'text',
        from: 'me',
        photo: 'drawers',
        text: 'The drawers on the left side',
        time: '10:16',
        seen: true,
      },
      { kind: 'text', from: 'them', text: 'Lovely. Any marks on the top?', time: '10:20' },
      {
        kind: 'text',
        from: 'me',
        photo: 'scratch',
        text: 'One light scratch, about 6 cm. You only see it in low sun.',
        time: '10:31',
        seen: true,
      },
      { kind: 'text', from: 'them', text: 'That’s fine, we’d oil it anyway.', time: '10:44' },
      {
        kind: 'offer',
        index: 0,
        note: 'Could pick it up this weekend with a van.',
        time: '10:46',
      },
    ],
  },
  {
    id: 'aisha',
    name: 'Aisha',
    initials: 'AK',
    role: 'buying',
    photo: 'chair',
    time: '09:12',
    unread: 0,
    item: {
      title: 'Bentwood dining chair',
      price: 35,
      condition: 'Very good',
      size: '43 × 50 × 88 cm',
      area: 'Dennistoun, G31',
      min: 20,
      max: 45,
    },
    replies: 'Usually replies within a day',
    offers: [{ by: 'me', amount: 30, state: 'agreed' }],
    status: 'reserved',
    agreed: 30,
    sold: false,
    blocked: false,
    archived: false,
    messages: [
      { kind: 'day', text: 'Yesterday' },
      { kind: 'text', from: 'me', text: 'Is it still available?', time: '18:40', seen: true },
      {
        kind: 'text',
        from: 'them',
        text: 'Yes! The seat has a little wear but it’s really solid.',
        time: '19:05',
      },
      { kind: 'offer', index: 0, note: 'I can collect on Saturday morning.', time: '19:07' },
      { kind: 'system', text: 'Offer agreed at £30', ok: true },
      { kind: 'text', from: 'them', text: 'It’s yours, collection Saturday?', time: '09:12' },
    ],
  },
  {
    id: 'marco',
    name: 'Marco',
    initials: 'MR',
    role: 'selling',
    photo: 'cafeset',
    time: 'Tue',
    unread: 2,
    item: {
      title: 'Café table and three chairs',
      price: 90,
      condition: 'Good, some rust on table base',
      size: 'Table 70 cm round',
      area: 'Hyndland, G12',
      min: 60,
      max: 110,
    },
    replies: 'Usually replies within a few hours',
    offers: [],
    status: null,
    agreed: null,
    sold: false,
    blocked: false,
    archived: false,
    messages: [
      { kind: 'day', text: 'Tuesday' },
      {
        kind: 'text',
        from: 'them',
        text: 'Hi, would these work outside on a balcony?',
        time: '14:10',
      },
      { kind: 'text', from: 'them', text: 'And do they stack?', time: '14:11' },
    ],
  },
  {
    id: 'ruth',
    name: 'Ruth',
    initials: 'RB',
    role: 'buying',
    photo: 'chest',
    time: 'Mon',
    unread: 0,
    item: {
      title: 'Antique walnut chest of drawers',
      price: 240,
      condition: 'Restored',
      size: '118 × 55 × 90 cm',
      area: 'Shawlands, G41',
      min: 180,
      max: 260,
    },
    replies: 'Usually replies within a day',
    offers: [{ by: 'me', amount: 210, state: 'declined' }],
    status: null,
    agreed: null,
    sold: true,
    blocked: false,
    archived: false,
    messages: [
      { kind: 'day', text: 'Monday' },
      {
        kind: 'offer',
        index: 0,
        note: 'Would you take £210 if I collect tonight?',
        time: '11:30',
      },
      {
        kind: 'text',
        from: 'them',
        text: 'Sorry, it’s gone. Someone came round this morning.',
        time: '12:02',
      },
    ],
  },
  {
    id: 'tom',
    name: 'Tom',
    initials: 'TF',
    role: 'selling',
    photo: 'lamp',
    time: '20 Oct',
    unread: 0,
    item: {
      title: 'Vintage copper table lamp',
      price: 18,
      condition: 'Works, rewired 2023',
      size: '48 cm tall',
      area: 'Hyndland, G12',
      min: 10,
      max: 25,
    },
    replies: 'Usually replies within an hour',
    offers: [{ by: 'them', amount: 18, state: 'agreed' }],
    status: null,
    agreed: 18,
    sold: true,
    blocked: false,
    archived: false,
    messages: [
      { kind: 'day', text: '20 October' },
      {
        kind: 'offer',
        index: 0,
        note: 'Full price is fine, can I get it tomorrow?',
        time: '17:20',
      },
      { kind: 'system', text: 'Offer agreed at £18', ok: true },
      { kind: 'system', text: 'Marked as sold to Tom' },
      { kind: 'text', from: 'them', text: 'Brilliant, thanks!', time: '19:03' },
    ],
  },
];

export function lastMessageText(conversation: Conversation) {
  for (let i = conversation.messages.length - 1; i >= 0; i -= 1) {
    const message = conversation.messages[i];
    if (message.kind === 'offer') {
      const offer = conversation.offers[message.index];
      return `${offer.by === 'me' ? 'You offered' : 'Offered'} ${money(offer.amount)}`;
    }
    if (message.kind === 'pickup') {
      return 'Pickup details';
    }
    if (message.kind === 'system') {
      return message.text;
    }
    if (message.kind === 'text') {
      return `${message.from === 'me' ? 'You: ' : ''}${message.text}`;
    }
  }
  return '';
}

export function currentTime() {
  const date = new Date();
  return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
}
