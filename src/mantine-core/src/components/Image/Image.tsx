import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { DefaultProps, MantineNumberSize, ClassNames, useExtractedMargins } from '@mantine/styles';
import { Text } from '../Text/Text';
import { ImageIcon } from './ImageIcon';
import useStyles from './Image.styles';

export type ImageStylesNames = ClassNames<typeof useStyles>;

export interface ImageProps
  extends DefaultProps<ImageStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'placeholder'> {
  /** Image src */
  src?: string;

  /** Image alt text, used as title for placeholder if image was not loaded */
  alt?: string;

  /** Image object-fit property */
  fit?: 'contain' | 'cover';

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

  /** Image figcaption, displayed bellow image */
  caption?: React.ReactNode;
}

export const Image = forwardRef<HTMLDivElement, ImageProps>(
  (
    {
      className,
      style,
      alt,
      src,
      fit = 'cover',
      width = '100%',
      height = 'auto',
      radius = 0,
      imageProps,
      withPlaceholder = false,
      placeholder,
      imageRef,
      classNames,
      styles,
      caption,
      sx,
      ...others
    }: ImageProps,
    ref
  ) => {
    const { classes, cx } = useStyles({ radius }, { sx, classNames, styles, name: 'Image' });
    const { mergedStyles, rest } = useExtractedMargins({ others, style });
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(!src);
    const isPlaceholder = withPlaceholder && (!loaded || error);
    const firstUpdate = useRef(true);

    useEffect(() => {
      if (firstUpdate.current) {
        firstUpdate.current = false;
      } else {
        setLoaded(false);
        setError(false);
      }
    }, [src]);

    return (
      <div
        className={cx(classes.root, className)}
        style={{ width, height, ...mergedStyles }}
        ref={ref}
        {...rest}
      >
        {isPlaceholder && (
          <div className={classes.placeholder} title={alt}>
            {placeholder || <ImageIcon style={{ width: 40, height: 40 }} />}
          </div>
        )}

        <figure className={classes.figure}>
          <img
            className={classes.image}
            src={src}
            alt={alt}
            style={{ objectFit: fit }}
            ref={imageRef}
            onLoad={(event) => {
              setLoaded(true);
              typeof imageProps?.onLoad === 'function' && imageProps.onLoad(event);
            }}
            onError={(event) => {
              setError(true);
              typeof imageProps?.onError === 'function' && imageProps.onError(event);
            }}
            {...imageProps}
          />

          {!!caption && (
            <Text component="figcaption" size="sm" align="center" className={classes.caption}>
              {caption}
            </Text>
          )}
        </figure>
      </div>
    );
  }
);

Image.displayName = '@mantine/core/Image';
