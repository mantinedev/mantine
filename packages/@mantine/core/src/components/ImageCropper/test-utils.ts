export function fakeImage(naturalWidth: number, naturalHeight: number, src = 'image.png') {
  return { naturalWidth, naturalHeight, src, currentSrc: src } as HTMLImageElement;
}
