import React, { useState, forwardRef, useEffect, useRef } from 'react';
import { DefaultProps, MantineNumberSize, ClassNames } from '@mantine/styles';
import { useDidUpdate, useMergedRef } from '@mantine/hooks';
import { Text } from '../Text';
import { Box } from '../Box';
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
      ...others
    }: ImageProps,
    ref
  ) => {
    const { classes, cx } = useStyles({ radius }, { classNames, styles, name: 'Image' });
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(!src);
    const isPlaceholder = withPlaceholder && (!loaded || error);
    const internalImgRef = useRef<HTMLImageElement>(null);
    const mergedImgRef = useMergedRef(...[...(imageRef ? [imageRef] : []), internalImgRef]);

    useEffect(() => {
      const { current } = internalImgRef;
      if (current?.complete) {
        setError(current.naturalHeight === 0);
        setLoaded(current.naturalHeight !== 0);
      }
    }, [src]);

    useDidUpdate(() => {
      setLoaded(false);
      setError(false);
    }, [src]);

    return (
      <Box className={cx(classes.root, className)} ref={ref} {...others}>
        <figure className={classes.figure}>
          <div className={classes.imageWrapper}>
            <img
              className={classes.image}
              src={src}
              alt={alt}
              style={{ objectFit: fit, width, height }}
              ref={mergedImgRef}
              {...imageProps}
              onLoad={(event) => {
                setLoaded(true);
                typeof imageProps?.onLoad === 'function' && imageProps.onLoad(event);
              }}
              onError={(event) => {
                setError(true);
                typeof imageProps?.onError === 'function' && imageProps.onError(event);
              }}
            />

            {isPlaceholder && (
              <div className={classes.placeholder} title={alt}>
                {placeholder || <ImageIcon style={{ width: 40, height: 40 }} />}
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
  }
);

Image.displayName = '@mantine/core/Image';
