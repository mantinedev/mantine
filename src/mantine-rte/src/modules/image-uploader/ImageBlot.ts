export function createImageBlot(InlineBlot: any) {
  return class ImageBlot extends InlineBlot {
    static blotName = 'imageBlot';
    static className = 'image-uploading';
    static tagName = 'span';

    static create(src) {
      const node = super.create(src);
      if (src === true) return node;

      const image = document.createElement('img');
      image.setAttribute('src', src);
      node.appendChild(image);
      return node;
    }

    static value(domNode) {
      const { src, custom } = domNode.dataset;
      return { src, custom };
    }

    deleteAt(index, length) {
      super.deleteAt(index, length);
      this.cache = {};
    }
  };
}
