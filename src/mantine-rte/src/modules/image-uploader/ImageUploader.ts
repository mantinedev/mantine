interface Options {
  upload(file: File): Promise<string>;
}

export class ImageUploader {
  quill: any;
  options: Options;
  range: any;
  fileHolder: HTMLInputElement;

  constructor(quill: any, options: Options) {
    this.quill = quill;
    this.options = options;
    this.range = null;

    const toolbar = this.quill.getModule('toolbar');
    toolbar.addHandler('image', this.selectLocalImage.bind(this));

    this.handleDrop = this.handleDrop.bind(this);
    this.handlePaste = this.handlePaste.bind(this);

    this.quill.root.addEventListener('drop', this.handleDrop, false);
    this.quill.root.addEventListener('paste', this.handlePaste, false);
  }

  selectLocalImage() {
    this.range = this.quill.getSelection();
    if (this.range) {
      this.fileHolder = document.createElement('input');
      this.fileHolder.setAttribute('type', 'file');
      this.fileHolder.setAttribute('accept', 'image/*');
      this.fileHolder.setAttribute('style', 'visibility:hidden');

      this.fileHolder.onchange = this.fileChanged.bind(this);

      document.body.appendChild(this.fileHolder);

      this.fileHolder.click();

      window.requestAnimationFrame(() => {
        document.body.removeChild(this.fileHolder);
      });
    }
  }

  handleDrop(event: any) {
    event.stopPropagation();
    event.preventDefault();

    if (event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files.length) {
      if (document.caretRangeFromPoint) {
        const selection = document.getSelection();
        const range = document.caretRangeFromPoint(event.clientX, event.clientY);
        if (selection && range) {
          selection.setBaseAndExtent(
            range.startContainer,
            range.startOffset,
            range.startContainer,
            range.startOffset
          );
        }
      } else {
        const selection = document.getSelection();
        const range = (document as any).caretPositionFromPoint(event.clientX, event.clientY);
        if (selection && range) {
          selection.setBaseAndExtent(
            range.offsetNode,
            range.offset,
            range.offsetNode,
            range.offset
          );
        }
      }

      this.range = this.quill.getSelection();
      const file = event.dataTransfer.files[0];

      setTimeout(() => {
        this.range = this.quill.getSelection();
        this.readAndUploadFile(file);
      }, 0);
    }
  }

  handlePaste(event: any) {
    const clipboard = event.clipboardData || (window as any).clipboardData;

    if (clipboard && (clipboard.items || clipboard.files)) {
      const items = clipboard.items || clipboard.files;
      const IMAGE_MIME_REGEX = /^image\/(jpe?g|gif|png|svg|webp)$/i;

      for (let i = 0; i < items.length; i += 1) {
        if (IMAGE_MIME_REGEX.test(items[i].type)) {
          const file = items[i].getAsFile ? items[i].getAsFile() : items[i];

          if (file) {
            this.range = this.quill.getSelection();
            event.preventDefault();
            setTimeout(() => {
              this.range = this.quill.getSelection();
              this.readAndUploadFile(file);
            }, 0);
          }
        }
      }
    }
  }

  readAndUploadFile(file: File) {
    let isUploadReject = false;

    const fileReader = new FileReader();

    fileReader.addEventListener(
      'load',
      () => {
        if (!isUploadReject) {
          const base64ImageSrc = fileReader.result;
          this.insertBase64Image(base64ImageSrc as string);
        }
      },
      false
    );

    if (file) {
      fileReader.readAsDataURL(file);
    }

    this.options.upload(file).then(
      (imageUrl) => {
        this.insertToEditor(imageUrl);
      },
      () => {
        isUploadReject = true;
        this.removeBase64Image();
      }
    );
  }

  fileChanged() {
    const file = this.fileHolder.files[0];
    this.readAndUploadFile(file);
  }

  insertBase64Image(url: string) {
    const { range } = this;
    this.quill.insertEmbed(range.index, 'imageBlot', `${url}`, 'user');
  }

  insertToEditor(url: string) {
    const { range } = this;
    this.quill.deleteText(range.index, 3, 'user');
    this.quill.insertEmbed(range.index, 'image', `${url}`, 'user');

    range.index += 1;
    this.quill.setSelection(range, 'user');
  }

  removeBase64Image() {
    const { range } = this;
    this.quill.deleteText(range.index, 3, 'user');
  }
}
