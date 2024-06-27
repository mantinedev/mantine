import { stylesToString } from './styles-to-string';

const baseStylesResult = '.test{padding:2vh;border-radius:5px;color:red;}';

const mediaStylesResult = '@media(max-width:50em){.test{padding:2vh;border-radius:5px;color:red;}}';

const allStylesResult =
  '.test{padding:2vh;border-radius:5px;color:red;}@media(max-width:20em){.test{padding:4vh;color:black;}}@media(max-width:40em){.test{padding:6vh;color:white;}}';

const containerResult =
  '.test{padding:2vh;border-radius:5px;color:red;}@container aside (max-width:20em){.test{padding:4vh;color:black;}}@container aside (max-width:40em){.test{padding:6vh;color:white;}}';

describe('@mantine/core/styles-to-string', () => {
  it('converts base styles to string correctly', () => {
    expect(
      stylesToString({
        selector: '.test',
        styles: {
          padding: '2vh',
          borderRadius: '5px',
          color: 'red',
        },
      })
    ).toBe(baseStylesResult);
  });

  it('converts media query styles to string correctly', () => {
    expect(
      stylesToString({
        selector: '.test',
        media: [
          {
            query: '(max-width:50em)',
            styles: {
              padding: '2vh',
              borderRadius: '5px',
              color: 'red',
            },
          },
        ],
      })
    ).toBe(mediaStylesResult);
  });

  it('converts base styles with media queries correctly', () => {
    expect(
      stylesToString({
        selector: '.test',
        styles: {
          padding: '2vh',
          borderRadius: '5px',
          color: 'red',
        },
        media: [
          {
            query: '(max-width:20em)',
            styles: {
              padding: '4vh',
              color: 'black',
            },
          },
          {
            query: '(max-width:40em)',
            styles: {
              padding: '6vh',
              color: 'white',
            },
          },
        ],
      })
    ).toBe(allStylesResult);
  });

  it('converts container queries correctly', () => {
    expect(
      stylesToString({
        selector: '.test',
        styles: {
          padding: '2vh',
          borderRadius: '5px',
          color: 'red',
        },
        container: [
          {
            query: 'aside (max-width:20em)',
            styles: {
              padding: '4vh',
              color: 'black',
            },
          },
          {
            query: 'aside (max-width:40em)',
            styles: {
              padding: '6vh',
              color: 'white',
            },
          },
        ],
      })
    ).toBe(containerResult);
  });
});
