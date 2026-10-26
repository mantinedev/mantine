export type LessonState = 'done' | 'current' | 'open' | 'locked';

export interface Lesson {
  name: string;
  duration: string;
  state: LessonState;
}

export interface CourseModule {
  name: string;
  lessons: Lesson[];
}

export const CURRENT_LESSON = 'Centering the clay';

export const TOTAL_LESSONS = 12;

export const modules: CourseModule[] = [
  {
    name: 'Getting started on the wheel',
    lessons: [
      { name: 'Setting up your wheel and tools', duration: '8 min', state: 'done' },
      { name: 'Wedging clay by hand', duration: '11 min', state: 'done' },
      { name: 'Sitting, bracing and wheel speed', duration: '9 min', state: 'done' },
      { name: CURRENT_LESSON, duration: '14 min', state: 'current' },
      { name: 'Opening the clay and setting the floor', duration: '18 min', state: 'open' },
    ],
  },
  {
    name: 'Pulling walls',
    lessons: [
      { name: 'Your first pull', duration: '16 min', state: 'locked' },
      { name: 'Thin, even walls', duration: '15 min', state: 'locked' },
      { name: 'Shaping a cylinder', duration: '20 min', state: 'locked' },
    ],
  },
  {
    name: 'Bowls and trimming',
    lessons: [
      { name: 'Throwing a small bowl', duration: '22 min', state: 'locked' },
      { name: 'When to trim', duration: '7 min', state: 'locked' },
      { name: 'Trimming a foot ring', duration: '19 min', state: 'locked' },
      { name: 'Your first set of four', duration: '24 min', state: 'locked' },
    ],
  },
];

export const VIDEO_DURATION = 840;

export const captions: { time: number; text: string }[] = [
  { time: 0, text: 'Today we are going to centre a one kilo ball of clay.' },
  { time: 100, text: 'First, wet the ball and the wheel head with your sponge.' },
  { time: 195, text: 'Brace your left elbow on your thigh. Your arm does the work.' },
  { time: 305, text: 'Squeeze at the base and let the clay rise into a cone.' },
  { time: 450, text: 'Now push the top down and slightly towards you.' },
  { time: 600, text: 'Do that two or three times. You will feel the clay calm down.' },
  { time: 680, text: 'Rest your hands without pressing. Are they still?' },
  { time: 780, text: 'If they are, you are centred. Ease off over a few turns.' },
];

export const steps = [
  {
    title: 'Wet the clay and the wheel head',
    text: 'Use a sponge, not your hands. A thin film of water lets your palms slide instead of drag.',
    at: '1:40',
  },
  {
    title: 'Brace your left elbow on your thigh',
    text: 'Your arm, not your hand, does the work. Lock it in place so the wheel pushes against your body, not the other way round.',
    at: '3:15',
  },
  {
    title: 'Cone the clay up',
    text: 'Squeeze with both palms at the base and let the clay rise into a cone. This mixes the clay and finds the soft spots.',
    at: '5:05',
  },
  {
    title: 'Press it back down',
    text: 'Push the top of the cone down and forward with the heel of your right hand, while your left hand holds the side. Repeat the cone two or three times.',
    at: '7:30',
  },
  {
    title: 'Check with still hands',
    text: 'Rest your hands on the clay without pressing. If they stay still while the wheel turns, you are centred. If they rock, go back to step 4.',
    at: '11:20',
  },
];

export const resources = [
  {
    title: 'Centering, step by step',
    description: 'One-page cheat sheet to pin by your wheel, 2 pages',
  },
  {
    title: 'Wedging and clay weights',
    description: 'How much clay for cups, bowls and plates, 4 pages',
  },
];

export interface Post {
  id: string;
  initials: string;
  author: string;
  time: string;
  body: string;
  votes: number;
  instructor?: boolean;
}

export const posts: Post[] = [
  {
    id: 'ravi',
    initials: 'RB',
    author: 'Ravi Bhatt',
    time: '3 days ago',
    body: 'My clay keeps rising into a cone fine but goes lopsided when I press it down. Am I pushing too hard?',
    votes: 9,
  },
  {
    id: 'akiko',
    initials: 'AN',
    author: 'Akiko Nakamura',
    time: '2 days ago',
    body: 'Probably pushing straight down. Push down and slightly towards you, at about eight o’clock on the wheel, and keep your left hand firm on the side so the clay has nowhere to go but the middle.',
    votes: 14,
    instructor: true,
  },
  {
    id: 'lena',
    initials: 'LF',
    author: 'Lena Fischer',
    time: '1 day ago',
    body: 'Is it normal for my wrists to ache after twenty minutes of this?',
    votes: 4,
  },
];

export const questions = [
  {
    question: 'What tells you the clay is centred?',
    answers: [
      'It looks round from above',
      'Your still hands stay still while the wheel turns',
      'The cone rises without cracking',
    ],
    right: 1,
    why: 'Clay can look round and still be off centre. Your hands feel what your eyes miss.',
  },
  {
    question: 'Which part of your body should take the wheel’s force?',
    answers: ['Your fingertips', 'Your wrists', 'Your braced arm and thigh'],
    right: 2,
    why: 'Bracing your elbow on your thigh lets your whole body resist the clay, so your wrists do not tire.',
  },
  {
    question: 'Roughly how fast should the wheel turn for a 1 kg ball?',
    answers: [
      'About two turns a second',
      'About one turn every two seconds',
      'As fast as it will go',
    ],
    right: 0,
    why: 'Too slow and the clay drags, too fast and it throws water and wobbles.',
  },
];
