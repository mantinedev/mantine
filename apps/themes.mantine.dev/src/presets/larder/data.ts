export type ArticleStatus = 'draft' | 'scheduled' | 'published';

export interface Article {
  id: string;
  status: ArticleStatus;
  title: string;
  standfirst: string;
  section: string;
  author: string;
  when: string;
  crumb: string;
  body: string;
  recipe: boolean;
  tags: string[];
}

export interface Ingredient {
  id: number;
  qty: string;
  name: string;
}

export interface Recipe {
  title: string;
  serves: string;
  prep: string;
  cook: string;
  ingredients: Ingredient[];
}

export const STATUSES: { value: ArticleStatus; label: string }[] = [
  { value: 'draft', label: 'Drafts' },
  { value: 'scheduled', label: 'Scheduled' },
  { value: 'published', label: 'Published' },
];

export const SECTIONS = ['Recipes', 'Long reads', 'In season', 'Producers'];
export const AUTHORS = ['Nell Achterberg', 'Kwame Mensah', 'Lou Ferrand'];
export const MAX_TAGS = 8;

const quinceBody =
  '<p>For most of the year a quince is a useless thing. It is hard enough to bruise a thumb, too sour to eat raw, and covered in a grey down that comes off on your coat. Then you put it in a low oven for three hours and it turns the colour of a garnet, smells of roses and pear drops, and becomes the best thing you will eat all autumn.</p>' +
  '<p>The trick is time, not heat. At 140°C the pectin and tannins in the fruit slowly break down and the flesh turns from cream to pink to a deep, translucent red. Rush it at a higher temperature and you get soft, beige fruit that tastes of very little. I roast them whole for the first hour, then halve them and baste every forty minutes with the honeyed juices.</p>' +
  '<blockquote>Buy them hard and yellow, with no green left at the stalk. The ugliest ones often have the most scent.</blockquote>' +
  '<p>Quinces arrive in British greengrocers from late September and are usually gone by December. Turkish and Cypriot shops tend to have them first, and cheapest. If you have more than you can roast, the cores and peel make a clear, pink jelly that sets without any added pectin. Keep a jar back for cheese.</p>';

export const initialArticles: Article[] = [
  {
    id: 'quince',
    status: 'draft',
    title: 'The case for cooking quinces slowly',
    standfirst:
      'Hard, sour and covered in fuzz, the quince only gives itself up to patience. Three hours in a low oven is all it asks.',
    section: 'Recipes',
    author: 'Nell Achterberg',
    when: 'Edited 2 minutes ago',
    crumb: 'Slow quinces',
    body: quinceBody,
    recipe: true,
    tags: ['quince', 'autumn', 'baking', 'preserves'],
  },
  {
    id: 'chestnut',
    status: 'draft',
    title: 'Where London’s chestnut sellers went',
    standfirst:
      'There were two hundred roasting barrows on the Strand in 1900. We found the last four.',
    section: 'Long reads',
    author: 'Kwame Mensah',
    when: 'Edited yesterday',
    crumb: 'Chestnut sellers',
    body: '<p>The barrow on the corner of Charing Cross Road has been in the Georgiou family since 1962. Andreas, who runs it now, starts the coals at ten and sells his first bag at half past.</p><p>He buys from a grower in Kent and roasts about forty kilos on a cold Saturday.</p>',
    recipe: false,
    tags: ['london', 'street food'],
  },
  {
    id: 'squash',
    status: 'draft',
    title: 'Seven squash, ranked by an honest grower',
    standfirst: 'Crown Prince wins. Butternut does not make the top five.',
    section: 'In season',
    author: 'Lou Ferrand',
    when: 'Edited 3 days ago',
    crumb: 'Squash ranked',
    body: '<p>Ellie Shaw grows thirty-one varieties of winter squash on two acres outside Totnes. We asked her to taste seven of them roasted plain, with salt and oil, and rank them.</p>',
    recipe: false,
    tags: ['squash', 'growers'],
  },
  {
    id: 'cider',
    status: 'scheduled',
    title: 'Perry is having its moment',
    standfirst: 'Three Herefordshire makers on the pear drink that cider forgot.',
    section: 'Producers',
    author: 'Kwame Mensah',
    when: 'Out 30 Oct, 07:00',
    crumb: 'Perry',
    body: '<p>Tom Oliver has been making perry from the same orchard of hundred-year-old pear trees since 1999.</p>',
    recipe: false,
    tags: ['drinks', 'herefordshire'],
  },
  {
    id: 'soda',
    status: 'scheduled',
    title: 'A soda bread you can make before the kettle boils',
    standfirst: 'No yeast, no proving, ten minutes of work.',
    section: 'Recipes',
    author: 'Nell Achterberg',
    when: 'Out 1 Nov, 07:00',
    crumb: 'Soda bread',
    body: '<p>Buttermilk and bicarbonate do all the lifting. The only rule is to work fast and handle the dough as little as possible.</p>',
    recipe: false,
    tags: ['bread', 'baking'],
  },
  {
    id: 'apples',
    status: 'published',
    title: 'Forty English apples worth seeking out',
    standfirst: 'From Ashmead’s Kernel to Wyken Pippin, a guide for the next orchard visit.',
    section: 'In season',
    author: 'Lou Ferrand',
    when: 'Published 18 Oct',
    crumb: 'English apples',
    body: '<p>England once grew more than two thousand apple varieties. Supermarkets stock about eight.</p>',
    recipe: false,
    tags: ['apples', 'autumn'],
  },
  {
    id: 'miso',
    status: 'published',
    title: 'Making miso in a Somerset barn',
    standfirst: 'How a former chef ended up fermenting four tonnes of soybeans a year.',
    section: 'Producers',
    author: 'Kwame Mensah',
    when: 'Published 11 Oct',
    crumb: 'Somerset miso',
    body: '<p>The barn smells of soy sauce and wet wood.</p>',
    recipe: false,
    tags: ['fermentation'],
  },
  {
    id: 'plums',
    status: 'published',
    title: 'Damsons, two ways',
    standfirst: 'A gin and a cheese, both started this week, both ready by Christmas.',
    section: 'Recipes',
    author: 'Nell Achterberg',
    when: 'Published 4 Oct',
    crumb: 'Damsons',
    body: '<p>Damsons are too sharp to eat from the tree, which is exactly why they are so useful.</p>',
    recipe: false,
    tags: ['damsons', 'preserves'],
  },
];

export const initialRecipe: Recipe = {
  title: 'Slow-roasted quinces with bay and honey',
  serves: '6',
  prep: '20 minutes',
  cook: '3 hours',
  ingredients: [
    { id: 1, qty: '4', name: 'quinces, about 1.2 kg, rubbed clean of fuzz' },
    { id: 2, qty: '150 g', name: 'runny honey' },
    { id: 3, qty: '6', name: 'bay leaves, fresh if possible' },
    { id: 4, qty: '1', name: 'lemon, juiced' },
    { id: 5, qty: '400 ml', name: 'water' },
    { id: 6, qty: '1', name: 'vanilla pod, split' },
  ],
};

export const SEO_TITLE = 'Slow-roasted quinces with bay and honey | Larder';
export const SEO_DESCRIPTION =
  "Three hours in a low oven turns hard, sour quinces into soft, garnet-red fruit. Nell Achterberg's recipe needs only honey, bay and a lemon.";

export function countWords(text: string) {
  return (text.match(/[A-Za-z0-9’'°-]+/g) || []).length;
}

export function formatWordCount(words: number) {
  return `${words.toLocaleString('en-GB')} words, ${Math.max(1, Math.round(words / 230))} min read`;
}

export function htmlToText(html: string) {
  return html.replace(/<[^>]+>/g, ' ');
}

export function statusText(article: Article) {
  if (article.status === 'draft') {
    return 'Draft, not scheduled';
  }
  return article.status === 'scheduled'
    ? `Scheduled, ${article.when.replace('Out ', '')}`
    : article.when;
}
