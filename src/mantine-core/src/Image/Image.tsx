import React, { useState, forwardRef } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  Selectors,
  useComponentDefaultProps,
} from '@mantine/styles';
import { useDidUpdate } from '@mantine/hooks';
import { Text } from '../Text';
import { Box } from '../Box';
import { ImageIcon } from './ImageIcon';
import useStyles, { ImageStylesParams } from './Image.styles';

export type ImageStylesNames = Selectors<typeof useStyles>;

export interface ImageProps
  extends DefaultProps<ImageStylesNames, ImageStylesParams>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'placeholder'> {
  /** Image src */
  src?: string | null;

  /** Image alt text, used as title for placeholder if image was not loaded */
  alt?: string;

  /** Image object-fit property */
  fit?: React.CSSProperties['objectFit'];

  /** Image width, defaults to 100%, cannot exceed 100% */
  width?: number | string;

  /** Image height, defaults to original image height adjusted to given width */
  height?: number | string;

  /** Predefined border-radius value from theme.radius or number for border-radius in px */
  radius?: MantineNumberSize;

  /** Enable placeholder when image is loading and when image fails to load */
  withPlaceholder?: boolean;

  /** Customize placeholder content */
  placeholder?: React.ReactNode;

  /** Props spread to img element */
  imageProps?: React.ComponentPropsWithoutRef<'img'>;

  /** Get image element ref */
  imageRef?: React.ForwardedRef<HTMLImageElement>;

  /** Image figcaption, displayed below image */
  caption?: React.ReactNode;
}

const defaultProps: Partial<ImageProps> = {
  fit: 'cover',
  width: '100%',
  height: 'auto',
  radius: 0,
};

export const Image = forwardRef<HTMLDivElement, ImageProps>((props: ImageProps, ref) => {
  const {
    className,
    alt,
    src,
    fit,
    width,
    height,
    radius,
    imageProps,
    withPlaceholder,
    placeholder,
    imageRef,
    classNames,
    styles,
    caption,
    unstyled,
    style,
    ...others
  } = useComponentDefaultProps('Image', defaultProps, props);
  const { classes, cx } = useStyles({ radius }, { classNames, styles, unstyled, name: 'Image' });
  const [error, setError] = useState(!src);
  const isPlaceholder = withPlaceholder && error;

  useDidUpdate(() => {
    setError(!src);
  }, [src]);

  return (
    <Box className={cx(classes.root, className)} ref={ref} style={{ width, ...style }} {...others}>
      <figure className={classes.figure}>
        <div className={classes.imageWrapper}>
          <img
            className={classes.image}
            src={src}
            alt={alt}
            style={{ objectFit: fit, width, height }}
            ref={imageRef}
            onError={(event) => {
              setError(true);
              typeof imageProps?.onError === 'function' && imageProps.onError(event);
            }}
            {...imageProps}
          />

          {isPlaceholder && (
            <div className={classes.placeholder} title={alt}>
              {placeholder || (
                <div>
                  <ImageIcon style={{ width: 40, height: 40 }} />
                </div>
              )}
            </div>
          )}
        </div>

        {!!caption && (
          <Text component="figcaption" size="sm" align="center" className={classes.caption}>
            {caption}
          </Text>
        )}
      </figure>
    </Box>
  );
});

Image.displayName = '@mantine/core/Image';
