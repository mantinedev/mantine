import { Plugin, PluginKey } from '@tiptap/pm/state';

export interface UploadImageOptions {
  onImageUpload?: (file: File) => Promise<string>;
  onImageUploadError?: (file: File, error: unknown) => void;
}

export function insertImageWithUpload(
  view: any,
  file: File,
  pos: number,
  options: UploadImageOptions
) {
  if (!options.onImageUpload) {
    return;
  }

  const blobUrl = URL.createObjectURL(file);
  const uploadId = Math.random().toString(36).slice(2, 10);
  const { schema } = view.state;
  const node = schema.nodes.image.create({
    src: blobUrl,
    uploading: true,
    uploadError: false,
    uploadId,
  });

  const tr = view.state.tr.insert(pos, node);
  view.dispatch(tr);

  options
    .onImageUpload(file)
    .then((url: string) => {
      if (view.isDestroyed) {
        return;
      }
      const { state } = view;
      state.doc.descendants((descNode: any, descPos: number) => {
        if (descNode.type.name === 'image' && descNode.attrs.uploadId === uploadId) {
          const transaction = view.state.tr
            .setNodeMarkup(descPos, undefined, {
              ...descNode.attrs,
              src: url,
              uploading: false,
              uploadId: null,
            })
            .setMeta('addToHistory', false);
          view.dispatch(transaction);
        }
      });
      URL.revokeObjectURL(blobUrl);
    })
    .catch((error: unknown) => {
      options.onImageUploadError?.(file, error);
      if (view.isDestroyed) {
        return;
      }
      const { state } = view;
      state.doc.descendants((descNode: any, descPos: number) => {
        if (descNode.type.name === 'image' && descNode.attrs.uploadId === uploadId) {
          const transaction = view.state.tr
            .setNodeMarkup(descPos, undefined, {
              ...descNode.attrs,
              uploading: false,
              uploadError: true,
              uploadId: null,
            })
            .setMeta('addToHistory', false);
          view.dispatch(transaction);

          setTimeout(() => {
            if (view.isDestroyed) {
              return;
            }
            const currentState = view.state;
            currentState.doc.descendants((currentNode: any, currentPos: number) => {
              if (
                currentNode.type.name === 'image' &&
                currentNode.attrs.src === blobUrl &&
                currentNode.attrs.uploadError
              ) {
                const deleteTr = view.state.tr
                  .delete(currentPos, currentPos + currentNode.nodeSize)
                  .setMeta('addToHistory', false);
                view.dispatch(deleteTr);
                URL.revokeObjectURL(blobUrl);
              }
            });
          }, 3000);
        }
      });
    });
}

function getImageFiles(dataTransfer: DataTransfer): File[] {
  const files: File[] = [];
  for (let i = 0; i < dataTransfer.files.length; i += 1) {
    const file = dataTransfer.files[i];
    if (file.type.startsWith('image/')) {
      files.push(file);
    }
  }
  return files;
}

const uploadImagePluginKey = new PluginKey('uploadImage');

export function getUploadImageExtension(TipTapImage: any, options: UploadImageOptions) {
  return TipTapImage.extend({
    addAttributes() {
      return {
        ...this.parent?.(),
        uploading: {
          default: false,
          renderHTML: (attrs: any) => (attrs.uploading ? { 'data-uploading': '' } : {}),
        },
        uploadError: {
          default: false,
          renderHTML: (attrs: any) => (attrs.uploadError ? { 'data-upload-error': '' } : {}),
        },
        uploadId: { default: null, renderHTML: () => ({}) },
      };
    },

    addNodeView() {
      const parentNodeView = this.parent?.();
      return (props: any) => {
        const { node, HTMLAttributes } = props;
        if (!node.attrs.uploading && !node.attrs.uploadError) {
          if (parentNodeView) {
            return parentNodeView(props);
          }
          const img = document.createElement('img');
          Object.entries(HTMLAttributes).forEach(([key, value]) => {
            if (value !== null && value !== undefined) {
              img.setAttribute(key, String(value));
            }
          });
          img.src = node.attrs.src;
          return { dom: img };
        }

        const isInline = this.options?.inline;
        const wrapper = document.createElement(isInline ? 'span' : 'div');
        wrapper.classList.add('mantine-upload-image-wrapper');

        if (node.attrs.uploading) {
          wrapper.setAttribute('data-uploading', '');
        }

        if (node.attrs.uploadError) {
          wrapper.setAttribute('data-upload-error', '');
        }

        const img = document.createElement('img');
        Object.entries(HTMLAttributes).forEach(([key, value]) => {
          if (
            value !== null &&
            value !== undefined &&
            key !== 'data-uploading' &&
            key !== 'data-upload-error'
          ) {
            img.setAttribute(key, String(value));
          }
        });
        img.src = node.attrs.src;
        if (node.attrs.alt) {
          img.alt = node.attrs.alt;
        }
        if (node.attrs.title) {
          img.title = node.attrs.title;
        }

        wrapper.appendChild(img);
        return { dom: wrapper };
      };
    },

    addProseMirrorPlugins() {
      return [
        new Plugin({
          key: uploadImagePluginKey,
          props: {
            handleDrop(view, event) {
              if (!event.dataTransfer) {
                return false;
              }

              const files = getImageFiles(event.dataTransfer);
              if (files.length === 0) {
                return false;
              }

              event.preventDefault();
              const pos = view.posAtCoords({
                left: event.clientX,
                top: event.clientY,
              });

              if (pos) {
                files.forEach((file) => {
                  insertImageWithUpload(view, file, pos.pos, options);
                });
              }

              return true;
            },

            handlePaste(view, event) {
              if (!event.clipboardData) {
                return false;
              }

              const files = getImageFiles(event.clipboardData);
              if (files.length === 0) {
                return false;
              }

              event.preventDefault();
              const { from } = view.state.selection;
              files.forEach((file) => {
                insertImageWithUpload(view, file, from, options);
              });

              return true;
            },
          },
        }),
      ];
    },
  });
}
