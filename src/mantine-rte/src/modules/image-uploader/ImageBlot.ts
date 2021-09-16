export function createImageBlot(InlineBlot: any) {
  return class ImageBlot extends InlineBlot {
    static blotName = 'imageBlot';
    static className = 'ql-image-uploading';
    static tagName = 'span';

    static create(src: string) {
      const node = super.create(src);

      if (typeof src === 'boolean' && src) {
        return node;
      }

      const image = document.createElement('img');
      image.setAttribute('src', src);
      node.appendChild(image);
      return node;
    }

    static value(domNode: HTMLElement) {
      const { src, custom } = domNode.dataset;
      return { src, custom };
    }

    deleteAt(index: number, length: number) {
      super.deleteAt(index, length);
      this.cache = {};
    }
  };
}
