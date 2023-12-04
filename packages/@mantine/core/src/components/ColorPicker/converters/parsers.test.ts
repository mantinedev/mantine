import { parseHex, parseHexa } from './parsers';

describe('@mantine/core/ColorPicker/converters/parsers', () => {
  it('distinguishably parses nearly identical 24bit hex colors', () => {
    expect(parseHex('#123456')).not.toStrictEqual(parseHex('#123457'));
    expect(parseHex('#123456')).not.toStrictEqual(parseHex('#123455'));

    expect(parseHex('#123456')).not.toStrictEqual(parseHex('#123556'));
    expect(parseHex('#123456')).not.toStrictEqual(parseHex('#123356'));

    expect(parseHex('#123456')).not.toStrictEqual(parseHex('#133456'));
    expect(parseHex('#123456')).not.toStrictEqual(parseHex('#113456'));
  });

  it('distinguishably parses nearly identical 32bit hex colors', () => {
    expect(parseHexa('#12345678')).not.toStrictEqual(parseHexa('#12345679'));
    expect(parseHexa('#12345678')).not.toStrictEqual(parseHexa('#12345677'));

    expect(parseHexa('#12345678')).not.toStrictEqual(parseHexa('#12345778'));
    expect(parseHexa('#12345678')).not.toStrictEqual(parseHexa('#12345578'));

    expect(parseHexa('#12345678')).not.toStrictEqual(parseHexa('#12355678'));
    expect(parseHexa('#12345678')).not.toStrictEqual(parseHexa('#12335678'));

    expect(parseHexa('#12345678')).not.toStrictEqual(parseHexa('#13345678'));
    expect(parseHexa('#12345678')).not.toStrictEqual(parseHexa('#11345678'));
  });
});
