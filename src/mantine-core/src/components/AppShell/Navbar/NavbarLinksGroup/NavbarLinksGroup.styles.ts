import { createStyles, MantineNumberSize, getSizeValue } from '@mantine/styles';

interface NavbarLinksGroupStyles {
  offset: MantineNumberSize;
  transitionDuration: number;
}

export default createStyles((theme, { offset, transitionDuration }: NavbarLinksGroupStyles) => ({
  linksGroup: {},

  linksGroupLinkWrapper: {
    marginLeft: getSizeValue({ size: offset, sizes: theme.spacing }),
    paddingLeft: 13,
    borderLeft: `1px solid ${theme.colors.gray[2]}`,
  },

  linksGroupLink: {},

  linksGroupChevron: {
    transition: `transform ${transitionDuration}ms ease`,
  },
}));
