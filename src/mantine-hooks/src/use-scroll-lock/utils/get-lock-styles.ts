import { getScrollWidth } from './get-scroll-width';

export const getLockStyles = ({ disableBodyPadding }: { disableBodyPadding: boolean }) => {
  const scrollWidth = disableBodyPadding ? 0 : getScrollWidth();

  const styles = `body {
        --removed-scroll-width: ${scrollWidth}px;
        ${scrollWidth ? 'padding-right: var(--removed-scroll-width) !important;' : ''}
        `;

  return styles;
};
