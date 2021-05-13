export * from '@mantine/theme';

export { ActionIcon, ACTION_ICON_SIZES } from './ActionIcon/ActionIcon';
export { Alert } from './Alert/Alert';
export { Avatar, AVATAR_SIZES } from './Avatar/Avatar';
export { Badge, BADGE_SIZES } from './Badge/Badge';
export { Blockquote } from './Blockquote/Blockquote';
export { Breadcrumbs } from './Breadcrumbs/Breadcrumbs';
export { Burger, BURGER_SIZES } from './Burger/Burger';
export { Button, BUTTON_SIZES } from './Button/Button';
export { Card } from './Card/Card';
export { Checkbox, CHECKBOX_SIZES } from './Checkbox/Checkbox';
export { Code } from './Code/Code';
export { ColorSwatch } from './ColorSwatch/ColorSwatch';
export { Container, CONTAINER_SIZES } from './Container/Container';
export { Drawer, DRAWER_SIZES } from './Drawer/Drawer';
export { Divider, DIVIDER_SIZES } from './Divider/Divider';
export { Grid, Col } from './Grid/Grid';
export { Group } from './Group/Group';
export { Highlight } from './Highlight/Highlight';
export { Image } from './Image/Image';
export { Input } from './Input/Input';
export { InputWrapper } from './InputWrapper/InputWrapper';
export { Kbd } from './Kbd/Kbd';
export { Loader, LOADER_SIZES } from './Loader/Loader';
export { LoadingOverlay } from './LoadingOverlay/LoadingOverlay';
export { Menu, MenuItem, MenuBody, MENU_SIZES } from './Menu/Menu';
export { Modal, MODAL_SIZES } from './Modal/Modal';
export { Notification } from './Notification/Notification';
export { NumberInput } from './NumberInput/NumberInput';
export { Overlay } from './Overlay/Overlay';
export { Paper } from './Paper/Paper';
export { PasswordInput } from './PasswordInput/PasswordInput';
export { Portal } from './Portal/Portal';
export { Progress, PROGRESS_SIZES } from './Progress/Progress';
export { RadioGroup, Radio, RADIO_SIZES } from './RadioGroup/RadioGroup';
export { SegmentedControl } from './SegmentedControl/SegmentedControl';
export { Select } from './Select/Select';
export { Spoiler } from './Spoiler/Spoiler';
export { Switch, SWITCH_SIZES } from './Switch/Switch';
export { Table } from './Table/Table';
export { Tabs, Tab } from './Tabs/Tabs';
export { Text, Anchor } from './Text/Text';
export { Textarea } from './Textarea/Textarea';
export { TextInput } from './TextInput/TextInput';
export { ThemeIcon, THEME_ICON_SIZES } from './ThemeIcon/ThemeIcon';
export { Title } from './Title/Title';
export { Tooltip } from './Tooltip/Tooltip';
export { Transition, GroupedTransition, AVAILABLE_TRANSITIONS } from './Transition/Transition';
export { TypographyStylesProvider } from './TypographyStylesProvider/TypographyStylesProvider';

/** Deprecated – these components will be removed in next major release */

// Hr renamed to Divider to support vertical orientation
export { Divider as Hr, DIVIDER_SIZES as HR_SIZES } from './Divider/Divider';

// ElementsGroup renamed to Group for simplicity
export { Group as ElementsGroup } from './Group/Group';

// CardsGrid replaced with more generic Grid component
export { CardsGrid, CardsGridProps } from './Card/Card';

// Types are exported separately due to build issue: bundled types were not included with regular export
export type { ActionIconProps } from './ActionIcon/ActionIcon';
export type { AlertProps } from './Alert/Alert';
export type { AvatarProps } from './Avatar/Avatar';
export type { BadgeProps } from './Badge/Badge';
export type { BlockquoteProps } from './Blockquote/Blockquote';
export type { BreadcrumbsProps } from './Breadcrumbs/Breadcrumbs';
export type { BurgerProps } from './Burger/Burger';
export type { ButtonProps } from './Button/Button';
export type { CardProps } from './Card/Card';
export type { CheckboxProps } from './Checkbox/Checkbox';
export type { CodeProps } from './Code/Code';
export type { ColorSwatchProps } from './ColorSwatch/ColorSwatch';
export type { ContainerProps } from './Container/Container';
export type { DrawerProps } from './Drawer/Drawer';
export type { DividerProps } from './Divider/Divider';
export type { GridProps, ColProps } from './Grid/Grid';
export type { GroupProps } from './Group/Group';
export type { HighlightProps } from './Highlight/Highlight';
export type { ImageProps } from './Image/Image';
export type { InputProps } from './Input/Input';
export type { InputWrapperBaseProps, InputWrapperProps } from './InputWrapper/InputWrapper';
export type { KbdProps } from './Kbd/Kbd';
export type { LoaderProps } from './Loader/Loader';
export type { LoadingOverlayProps } from './LoadingOverlay/LoadingOverlay';
export type { MenuProps, MenuItemProps, MenuBodyProps } from './Menu/Menu';
export type { ModalProps } from './Modal/Modal';
export type { NotificationProps } from './Notification/Notification';
export type { NumberInputProps } from './NumberInput/NumberInput';
export type { OverlayProps } from './Overlay/Overlay';
export type { PaperProps } from './Paper/Paper';
export type { PasswordInputProps } from './PasswordInput/PasswordInput';
export type { PortalProps } from './Portal/Portal';
export type { ProgressProps } from './Progress/Progress';
export type { RadioGroupProps, RadioProps } from './RadioGroup/RadioGroup';
export type { SegmentedControlProps } from './SegmentedControl/SegmentedControl';
export type { SelectProps } from './Select/Select';
export type { SpoilerProps } from './Spoiler/Spoiler';
export type { SwitchProps } from './Switch/Switch';
export type { TableProps } from './Table/Table';
export type { TabsProps, TabProps } from './Tabs/Tabs';
export type { TextProps, AnchorProps } from './Text/Text';
export type { TextareaProps } from './Textarea/Textarea';
export type { TextInputProps } from './TextInput/TextInput';
export type { ThemeIconProps } from './ThemeIcon/ThemeIcon';
export type { TitleProps } from './Title/Title';
export type { TooltipProps } from './Tooltip/Tooltip';
export type {
  MantineTransition,
  TransitionProps,
  GroupedTransitionProps,
} from './Transition/Transition';
export type { TypographyStylesProviderProps } from './TypographyStylesProvider/TypographyStylesProvider';
