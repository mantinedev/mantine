import { ColorsList } from './ColorsList/ColorsList';

export default { title: 'ColorsGenerator' };

// - [ ] Blue – `#052F5F`, `255C99`, `05299E`
// - [ ] Red – `#E71D36`, `#E5231F`, `#BF211E`
// - [ ] Pink – `#D73767`
// - [ ] Grape
// ---
// - [ ] Violet – `#502274`, `#54457F`, `2A1E5C`
// - [ ] Indigo – `3626A7`
// - [ ] Cyan – `#06A77D`
// - [ ] Teal
// - [ ] Green – `#00AF54`
// - [ ] Lime
// - [ ] Yellow – `#F0C808`
// - [ ] Orange – `#FF9F1C`
// - [ ] ---
// - [ ] Dark – `#2F242C`, `#2A1F2D`

// '#0',
// '#1',
// '#2',
// '#3',
// '#4',
// '#5',
// '#6',
// '#7',
// '#8',
// '#9',

// light color group:
// dark color group: blue, red, pink, grape

const colors = {
  blue: [
    '#EBF3FF',
    '#E0ECFF',
    '#BDD5FF',
    '#94BDFF',
    '#5294FF',
    '#1A71FF',
    '#005CF0',
    '#0054DB',
    '#004AC2',
    '#003FA3',
  ],

  indigo: [
    '#F0EDFC',
    '#DFDDF8',
    '#CCC8F4',
    '#BAB3EF',
    '#A49BE9',
    '#8A7EE2',
    '#6455D8',
    '#5544D5',
    '#412ECC',
    '#3728AF',
  ],

  red: [
    '#FDF1F3',
    '#F9DCDE',
    '#F9C2C9',
    '#F58F9B',
    '#EE5869',
    '#E92F45',
    '#E71D36',
    '#D9172D',
    '#C6152A',
    '#AF1225',
  ],

  pink: [
    '#FCEDF1',
    '#FADCE5',
    '#F4C3D2',
    '#E891AB',
    '#DE5981',
    '#DA4471',
    '#D73767',
    '#C82858',
    '#BB2552',
    '#A62149',
  ],

  grape: [
    '#F8EDF8',
    '#F4DCF4',
    '#EDC5ED',
    '#D98FDC',
    '#C85CCC',
    '#C149C5',
    '#BD3DC2',
    '#AA37AE',
    '#943097',
    '#812A84',
  ],
};

export function Usage() {
  const lists = Object.values(colors).map((colors, index) => (
    <ColorsList key={index} colors={colors} />
  ));
  return <div style={{ padding: 40 }}>{lists}</div>;
}
