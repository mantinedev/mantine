import {
  factory,
  Factory,
  getDefaultZIndex,
  Modal,
  ModalProps,
  ModalStylesNames,
  rem,
  resolveClassNames,
  resolveStyles,
  StylesApiProps,
  useMantineTheme,
  useProps,
  useStyles,
} from '@mantine/core';
import { useDidUpdate, useHotkeys } from '@mantine/hooks';
import { getHotkeys } from './get-hotkeys';
import { SpotlightProvider } from './Spotlight.context';
import { spotlightActions, SpotlightStore, spotlightStore, useSpotlight } from './spotlight.store';
import classes from './Spotlight.module.css';

export type SpotlightRootStylesNames =
  | ModalStylesNames
  | 'search'
  | 'actionsList'
  | 'action'
  | 'empty'
  | 'footer'
  | 'actionBody'
  | 'actionLabel'
  | 'actionDescription'
  | 'actionSection'
  | 'actionsGroup';

export interface SpotlightRootProps
  extends StylesApiProps<SpotlightRootFactory>,
    Omit<
      ModalProps,
      | 'styles'
      | 'classNames'
      | 'vars'
      | 'variant'
      | 'opened'
      | 'onClose'
      | 'closeButtonProps'
      | 'withCloseButton'
    > {
  /** Spotlight store, can be used to create multiple instances of spotlight */
  store?: SpotlightStore;

  /** Controlled Spotlight search query */
  query?: string;

  /** Called when query changes */
  onQueryChange?: (query: string) => void;

  /** Determines whether the search query should be cleared when the spotlight is closed, `true` by default */
  clearQueryOnClose?: boolean;

  /** Keyboard shortcut or a list of shortcuts to trigger spotlight, `'mod + K'` by default */
  shortcut?: string | string[] | null;

  /** A list of tags which when focused will be ignored by shortcut, `['input', 'textarea', 'select']` by default */
  tagsToIgnore?: string[];

  /** Determines whether shortcut should trigger based in contentEditable, `false` by default */
  triggerOnContentEditable?: boolean;

  /** If set, spotlight will not be rendered */
  disabled?: boolean;

  /** Called when spotlight opens */
  onSpotlightOpen?: () => void;

  /** Called when spotlight closes */
  onSpotlightClose?: () => void;

  /** Forces opened state, useful for tests */
  forceOpened?: boolean;

  /** Determines whether spotlight should be closed when one of the actions is triggered, `true` by default */
  closeOnActionTrigger?: boolean;

  /** Spotlight content max-height. Ignored unless `scrollable` prop is set. `400` by default */
  maxHeight?: React.CSSProperties['maxHeight'];

  /** Determines whether the actions list should be scrollable. If not set, `maxHeight` is ignored, `false` by default */
  scrollable?: boolean;
}

export type SpotlightRootFactory = Factory<{
  props: SpotlightRootProps;
  ref: HTMLDivElement;
  stylesNames: SpotlightRootStylesNames;
  compound: true;
}>;

const defaultProps = {
  size: 600,
  yOffset: 80,
  zIndex: getDefaultZIndex('max'),
  overlayProps: { backgroundOpacity: 0.35, blur: 7 },
  transitionProps: { duration: 200, transition: 'pop' },
  store: spotlightStore,
  clearQueryOnClose: true,
  closeOnActionTrigger: true,
  shortcut: 'mod + K',
  maxHeight: 400,
} satisfies Partial<SpotlightRootProps>;

export const SpotlightRoot = factory<SpotlightRootFactory>((_props, ref) => {
  const props = useProps('SpotlightRoot', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    store,
    children,
    query,
    onQueryChange,
    transitionProps,
    clearQueryOnClose,
    shortcut,
    tagsToIgnore,
    triggerOnContentEditable,
    disabled,
    onSpotlightOpen,
    onSpotlightClose,
    forceOpened,
    closeOnActionTrigger,
    maxHeight,
    scrollable,
    ...others
  } = props;

  const theme = useMantineTheme();
  const { opened, query: storeQuery } = useSpotlight(store);
  const _query = typeof query === 'string' ? query : storeQuery;
  const setQuery = (q: string) => {
    onQueryChange?.(q);
    spotlightActions.setQuery(q, store);
  };

  const getStyles = useStyles<SpotlightRootFactory>({
    name: 'Spotlight',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
  });

  useHotkeys(getHotkeys(shortcut, store), tagsToIgnore, triggerOnContentEditable);

  useDidUpdate(() => {
    opened ? onSpotlightOpen?.() : onSpotlightClose?.();
  }, [opened]);

  if (disabled) {
    return null;
  }

  return (
    <SpotlightProvider
      value={{
        getStyles,
        query: _query,
        setQuery,
        store,
        closeOnActionTrigger,
      }}
    >
      <Modal
        ref={ref}
        {...others}
        withCloseButton={false}
        opened={opened || !!forceOpened}
        padding={0}
        onClose={() => spotlightActions.close(store)}
        className={className}
        style={style}
        classNames={resolveClassNames({
          theme,
          classNames: [classes, classNames],
          props,
          stylesCtx: undefined,
        })}
        styles={resolveStyles({ theme, styles, props, stylesCtx: undefined })}
        transitionProps={{
          ...transitionProps,
          onExited: () => {
            clearQueryOnClose && setQuery('');
            spotlightActions.clearSpotlightState({ clearQuery: clearQueryOnClose }, store);
            transitionProps?.onExited?.();
          },
        }}
        __vars={{ '--spotlight-max-height': scrollable ? rem(maxHeight) : undefined }}
        __staticSelector="Spotlight"
        data-scrollable={scrollable || undefined}
      >
        {children}
      </Modal>
    </SpotlightProvider>
  );
});

SpotlightRoot.classes = classes;
SpotlightRoot.displayName = '@mantine/spotlight/SpotlightRoot';
