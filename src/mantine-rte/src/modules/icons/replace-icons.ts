const ICONS = {
  list: {},
  strike: {},
  underline: {},
  link: {},
  bold: {},
  italic: {},
  image: {},
  clean: {},
};

export function replaceIcons(quillIconsModule: any) {
  Object.keys(ICONS).forEach((icon) => {
    // eslint-disable-next-line no-param-reassign
    quillIconsModule[icon] = ICONS[icon];
  });
}
