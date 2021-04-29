import React, { useState, useEffect, useRef } from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme, MantineNumberSize } from '@mantine/theme';
import { ImageIcon } from './ImageIcon';
import useStyles from './Image.styles';

interface ImageProps
  extends DefaultProps,
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
  imageProps?: Record<string, any>;

  /** Get root element ref */
  elementRef?: React.ForwardedRef<HTMLDivElement>;

  /** Get image element ref */
  imageRef?: React.ForwardedRef<HTMLImageElement>;
}

export function Image({
  className,
  themeOverride,
  alt,
  src,
  fit = 'cover',
  width = '100%',
  height = 'auto',
  radius = 0,
  style,
  imageProps,
  withPlaceholder = false,
  placeholder,
  imageRef,
  elementRef,
  ...others
}: ImageProps) {
  const classes = useStyles({ radius, theme: useMantineTheme(themeOverride) });
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
      data-mantine-image
      className={cx(classes.wrapper, className)}
      style={{ width, height, ...style }}
      ref={elementRef}
      {...others}
    >
      {isPlaceholder && (
        <div data-mantine-image-placeholder className={classes.placeholderIcon} title={alt}>
          {placeholder || <ImageIcon style={{ width: 40, height: 40 }} />}
        </div>
      )}

      <img
        className={cx(classes.image, imageProps?.className)}
        src={src}
        alt={alt}
        style={{ ...imageProps?.style, objectFit: fit }}
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
    </div>
  );
}

Image.displayName = '@mantine/core/Image';
