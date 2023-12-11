import React from 'react';

interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {}

export function IconBase(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

export function IconBold(props: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 5h6a3.5 3.5 0 0 1 0 7h-6z" />
      <path d="M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7" />
    </IconBase>
  );
}

export function IconItalic(props: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11 5l6 0" />
      <path d="M7 19l6 0" />
      <path d="M14 5l-4 14" />
    </IconBase>
  );
}

export function IconUnderline(props: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 5v5a5 5 0 0 0 10 0v-5" />
      <path d="M5 19h14" />
    </IconBase>
  );
}

export function IconStrikethrough(props: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l14 0" />
      <path d="M16 6.5a4 2 0 0 0 -4 -1.5h-1a3.5 3.5 0 0 0 0 7h2a3.5 3.5 0 0 1 0 7h-1.5a4 2 0 0 1 -4 -1.5" />
    </IconBase>
  );
}

export function IconClearFormatting(props: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 15l4 4m0 -4l-4 4" />
      <path d="M7 6v-1h11v1" />
      <path d="M7 19l4 0" />
      <path d="M13 5l-4 14" />
    </IconBase>
  );
}

export function IconH1(props: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M19 18v-8l-2 2" />
      <path d="M4 6v12" />
      <path d="M12 6v12" />
      <path d="M11 18h2" />
      <path d="M3 18h2" />
      <path d="M4 12h8" />
      <path d="M3 6h2" />
      <path d="M11 6h2" />
    </IconBase>
  );
}

export function IconH2(props: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 12a2 2 0 1 1 4 0c0 .591 -.417 1.318 -.816 1.858l-3.184 4.143l4 0" />
      <path d="M4 6v12" />
      <path d="M12 6v12" />
      <path d="M11 18h2" />
      <path d="M3 18h2" />
      <path d="M4 12h8" />
      <path d="M3 6h2" />
      <path d="M11 6h2" />
    </IconBase>
  );
}

export function IconH3(props: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M19 14a2 2 0 1 0 -2 -2" />
      <path d="M17 16a2 2 0 1 0 2 -2" />
      <path d="M4 6v12" />
      <path d="M12 6v12" />
      <path d="M11 18h2" />
      <path d="M3 18h2" />
      <path d="M4 12h8" />
      <path d="M3 6h2" />
      <path d="M11 6h2" />
    </IconBase>
  );
}

export function IconH4(props: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 18v-8l-4 6h5" />
      <path d="M4 6v12" />
      <path d="M12 6v12" />
      <path d="M11 18h2" />
      <path d="M3 18h2" />
      <path d="M4 12h8" />
      <path d="M3 6h2" />
      <path d="M11 6h2" />
    </IconBase>
  );
}

export function IconH5(props: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 18h2a2 2 0 1 0 0 -4h-2v-4h4" />
      <path d="M4 6v12" />
      <path d="M12 6v12" />
      <path d="M11 18h2" />
      <path d="M3 18h2" />
      <path d="M4 12h8" />
      <path d="M3 6h2" />
      <path d="M11 6h2" />
    </IconBase>
  );
}

export function IconH6(props: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M19 14a2 2 0 1 0 0 4a2 2 0 0 0 0 -4z" />
      <path d="M21 12a2 2 0 1 0 -4 0v4" />
      <path d="M4 6v12" />
      <path d="M12 6v12" />
      <path d="M11 18h2" />
      <path d="M3 18h2" />
      <path d="M4 12h8" />
      <path d="M3 6h2" />
      <path d="M11 6h2" />
    </IconBase>
  );
}

export function IconList(props: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 6l11 0" />
      <path d="M9 12l11 0" />
      <path d="M9 18l11 0" />
      <path d="M5 6l0 .01" />
      <path d="M5 12l0 .01" />
      <path d="M5 18l0 .01" />
    </IconBase>
  );
}

export function IconListNumbers(props: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11 6h9" />
      <path d="M11 12h9" />
      <path d="M12 18h8" />
      <path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4" />
      <path d="M6 10v-6l-2 2" />
    </IconBase>
  );
}

export function IconUnlink(props: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 22v-2" />
      <path d="M9 15l6 -6" />
      <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
      <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
      <path d="M20 17h2" />
      <path d="M2 7h2" />
      <path d="M7 2v2" />
    </IconBase>
  );
}

export function IconBlockquote(props: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 15h15" />
      <path d="M21 19h-15" />
      <path d="M15 11h6" />
      <path d="M21 7h-6" />
      <path d="M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" />
      <path d="M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" />
    </IconBase>
  );
}

export function IconAlignLeft(props: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 6l16 0" />
      <path d="M4 12l10 0" />
      <path d="M4 18l14 0" />
    </IconBase>
  );
}

export function IconAlignRight(props: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 6l16 0" />
      <path d="M10 12l10 0" />
      <path d="M6 18l14 0" />
    </IconBase>
  );
}

export function IconAlignCenter(props: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 6l16 0" />
      <path d="M8 12l8 0" />
      <path d="M6 18l12 0" />
    </IconBase>
  );
}

export function IconAlignJustified(props: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 6l16 0" />
      <path d="M4 12l16 0" />
      <path d="M4 18l12 0" />
    </IconBase>
  );
}

export function IconSubscript(props: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 7l8 10m-8 0l8 -10" />
      <path d="M21 20h-4l3.5 -4a1.73 1.73 0 0 0 -3.5 -2" />
    </IconBase>
  );
}

export function IconSuperscript(props: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 7l8 10m-8 0l8 -10" />
      <path d="M21 11h-4l3.5 -4a1.73 1.73 0 0 0 -3.5 -2" />
    </IconBase>
  );
}

export function IconCode(props: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 8l-4 4l4 4" />
      <path d="M17 8l4 4l-4 4" />
      <path d="M14 4l-4 16" />
    </IconBase>
  );
}

export function IconHighlight(props: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 19h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
      <path d="M12.5 5.5l4 4" />
      <path d="M4.5 13.5l4 4" />
      <path d="M21 15v4h-8l4 -4z" />
    </IconBase>
  );
}

export function IconLineDashed(props: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12h2" />
      <path d="M17 12h2" />
      <path d="M11 12h2" />
    </IconBase>
  );
}

export function IconCircleOff(props: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20.042 16.045a9 9 0 0 0 -12.087 -12.087m-2.318 1.677a9 9 0 1 0 12.725 12.73" />
      <path d="M3 3l18 18" />
    </IconBase>
  );
}

export function IconColorPicker(props: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11 7l6 6" />
      <path d="M4 16l11.7 -11.7a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-11.7 11.7h-4v-4z" />
    </IconBase>
  );
}

export function IconX(props: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </IconBase>
  );
}

export function IconPalette(props: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
      <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </IconBase>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l5 5l10 -10" />
    </IconBase>
  );
}

export function IconLink(props: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 15l6 -6" />
      <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
      <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
    </IconBase>
  );
}

export function IconExternalLink(props: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
      <path d="M11 13l9 -9" />
      <path d="M15 4h5v5" />
    </IconBase>
  );
}

export function IconArrowBackUp(props: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 14l-4 -4l4 -4" />
      <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
    </IconBase>
  );
}
export function IconArrowForwardUp(props: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 14l4 -4l-4 -4" />
      <path d="M19 10h-11a4 4 0 1 0 0 8h1" />
    </IconBase>
  );
}
