/* eslint-disable no-param-reassign */
const ICONS = {
  list: {},
  strike: {},
  underline: {},
  link: {},
  bold: {},
  italic: {},
};

export function replaceIcons(quillIconsModule: any) {
  Object.keys(ICONS).forEach((icon) => {
    quillIconsModule[icon] = ICONS[icon];
  });
}
