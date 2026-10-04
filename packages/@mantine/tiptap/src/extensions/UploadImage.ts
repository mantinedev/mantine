import { Plugin, PluginKey } from '@tiptap/pm/state';

export interface ImageUploadResult {
  /** URL of the uploaded image, set as `src` attribute */
  src: string;

  /** Alternative text of the uploaded image, set as `alt` attribute */
  alt?: string;

  /** Title of the uploaded image, set as `title` attribute */
  title?: string;
}

export interface UploadImageOptions {
  /** Called for every image file that is picked, dropped or pasted, must return a promise that resolves to the uploaded image URL or to an object with `src` and optional `alt` and `title` */
  onImageUpload: (file: File) => Promise<string | ImageUploadResult>;

  /** Called when image upload fails */
  onImageUploadError?: (file: File, error: unknown) => void;
}

interface SuccessfulUpload {
  status: 'success';
  attrs: ImageUploadResult;
}

interface FailedUpload {
  status: 'error';
  blobUrl: string | null;
  removalTimer: ReturnType<typeof setTimeout> | null;
}

type SettledUpload = SuccessfulUpload | FailedUpload;

const FAILED_UPLOAD_REMOVAL_DELAY = 3000;
const uploadImagePluginKey = new PluginKey('uploadImage');
const settledUploads = new WeakMap<object, Map<string, SettledUpload>>();
let missingExtensionWarned = false;

function warnMissingUploadExtension() {
  if (missingExtensionWarned) {
    return;
  }

  missingExtensionWarned = true;
  // oxlint-disable-next-line no-console
  console.warn(
    '[@mantine/tiptap] Image upload requires the image extension created with getUploadImageExtension'
  );
}

function getSettledUploads(view: any): Map<string, SettledUpload> {
  let settled = settledUploads.get(view);

  if (!settled) {
    settled = new Map();
    settledUploads.set(view, settled);
  }

  return settled;
}

function findUploadNode(doc: any, uploadId: string): { node: any; pos: number } | null {
  let result: { node: any; pos: number } | null = null;

  doc.descendants((node: any, pos: number) => {
    if (result) {
      return false;
    }

    if (node.type.name === 'image' && node.attrs.uploadId === uploadId) {
      result = { node, pos };
      return false;
    }

    return true;
  });

  return result;
}

function revokeBlobUrl(upload: FailedUpload) {
  if (upload.blobUrl) {
    URL.revokeObjectURL(upload.blobUrl);
    upload.blobUrl = null;
  }
}

function settleUploadNode(tr: any, pos: number, node: any, upload: SettledUpload) {
  if (upload.status === 'success') {
    return tr.setNodeMarkup(pos, undefined, {
      ...node.attrs,
      ...upload.attrs,
      uploading: false,
      uploadError: false,
      uploadId: null,
    });
  }

  return tr.setNodeMarkup(pos, undefined, { ...node.attrs, uploading: false, uploadError: true });
}

function scheduleFailedUploadRemoval(view: any, uploadId: string, upload: FailedUpload) {
  upload.removalTimer = setTimeout(() => {
    upload.removalTimer = null;
    revokeBlobUrl(upload);

    if (view.isDestroyed) {
      return;
    }

    const found = findUploadNode(view.state.doc, uploadId);
    if (found) {
      getSettledUploads(view).delete(uploadId);
      view.dispatch(
        view.state.tr
          .delete(found.pos, found.pos + found.node.nodeSize)
          .setMeta('addToHistory', false)
      );
    }
  }, FAILED_UPLOAD_REMOVAL_DELAY);
}

function repairSettledUploads(view: any, transactions: readonly any[], newState: any) {
  if (!view || !transactions.some((tr) => tr.docChanged)) {
    return null;
  }

  const settled = settledUploads.get(view);
  if (!settled || settled.size === 0) {
    return null;
  }

  let tr: any = null;

  newState.doc.descendants((node: any, pos: number) => {
    if (node.type.name !== 'image') {
      return true;
    }

    const upload = node.attrs.uploadId ? settled.get(node.attrs.uploadId) : undefined;
    if (!upload) {
      return false;
    }

    if (upload.status === 'success') {
      tr = settleUploadNode(tr ?? newState.tr, pos, node, upload);
      settled.delete(node.attrs.uploadId);
      return false;
    }

    if (!node.attrs.uploadError) {
      tr = settleUploadNode(tr ?? newState.tr, pos, node, upload);
    }

    if (!upload.removalTimer) {
      scheduleFailedUploadRemoval(view, node.attrs.uploadId, upload);
    }

    return false;
  });

  return tr ? tr.setMeta('addToHistory', false) : null;
}

function startUpload(
  view: any,
  file: File,
  blobUrl: string,
  uploadId: string,
  options: UploadImageOptions
) {
  options
    .onImageUpload(file)
    .then((result) => {
      URL.revokeObjectURL(blobUrl);

      if (view.isDestroyed) {
        return;
      }

      const upload: SuccessfulUpload = {
        status: 'success',
        attrs: typeof result === 'string' ? { src: result } : result,
      };

      const found = findUploadNode(view.state.doc, uploadId);
      if (!found) {
        getSettledUploads(view).set(uploadId, upload);
        return;
      }

      view.dispatch(
        settleUploadNode(view.state.tr, found.pos, found.node, upload).setMeta(
          'addToHistory',
          false
        )
      );
    })
    .catch((error: unknown) => {
      options.onImageUploadError?.(file, error);
      const upload: FailedUpload = { status: 'error', blobUrl, removalTimer: null };

      if (view.isDestroyed) {
        revokeBlobUrl(upload);
        return;
      }

      getSettledUploads(view).set(uploadId, upload);

      const found = findUploadNode(view.state.doc, uploadId);
      if (!found) {
        revokeBlobUrl(upload);
        return;
      }

      view.dispatch(
        settleUploadNode(view.state.tr, found.pos, found.node, upload).setMeta(
          'addToHistory',
          false
        )
      );
      scheduleFailedUploadRemoval(view, uploadId, upload);
    });
}

export function getImageFiles(files: FileList | File[] | null | undefined): File[] {
  return Array.from(files ?? []).filter((file) => file.type.startsWith('image/'));
}

export function insertImageFilesWithUpload(
  view: any,
  files: File[],
  pos: number,
  options: UploadImageOptions
) {
  if (files.length === 0) {
    return;
  }

  const { schema } = view.state;
  if (!schema.nodes.image?.spec.attrs?.uploadId) {
    warnMissingUploadExtension();
    return;
  }

  const uploads = files.map((file) => ({
    file,
    blobUrl: URL.createObjectURL(file),
    uploadId: Math.random().toString(36).slice(2, 10),
  }));

  view.dispatch(
    view.state.tr.insert(
      pos,
      uploads.map(({ blobUrl, uploadId }) =>
        schema.nodes.image.create({ src: blobUrl, uploading: true, uploadError: false, uploadId })
      )
    )
  );

  uploads.forEach(({ file, blobUrl, uploadId }) => {
    startUpload(view, file, blobUrl, uploadId, options);
  });
}

export function insertImageWithUpload(
  view: any,
  file: File,
  pos: number,
  options: UploadImageOptions
) {
  insertImageFilesWithUpload(view, [file], pos, options);
}

export function getUploadImageExtensionOptions(editor: any): Partial<UploadImageOptions> {
  const extension = editor?.extensionManager?.extensions?.find(
    (item: any) => item.name === 'image'
  );

  return {
    onImageUpload: extension?.options?.onImageUpload,
    onImageUploadError: extension?.options?.onImageUploadError,
  };
}

export function getUploadImageExtension(TipTapImage: any, options: UploadImageOptions) {
  return TipTapImage.extend({
    addOptions() {
      return {
        ...this.parent?.(),
        onImageUpload: options.onImageUpload,
        onImageUploadError: options.onImageUploadError,
      };
    },

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
      const uploadOptions: UploadImageOptions = {
        onImageUpload: this.options.onImageUpload,
        onImageUploadError: this.options.onImageUploadError,
      };
      let editorView: any = null;

      return [
        new Plugin({
          key: uploadImagePluginKey,

          view(view) {
            editorView = view;
            return {
              destroy: () => {
                editorView = null;
              },
            };
          },

          appendTransaction(transactions, _oldState, newState) {
            return repairSettledUploads(editorView, transactions, newState);
          },

          props: {
            handleDrop(view, event) {
              if (!event.dataTransfer || !uploadOptions.onImageUpload) {
                return false;
              }

              const files = getImageFiles(event.dataTransfer.files);
              if (files.length === 0) {
                return false;
              }

              event.preventDefault();
              const pos = view.posAtCoords({
                left: event.clientX,
                top: event.clientY,
              });

              if (pos) {
                insertImageFilesWithUpload(view, files, pos.pos, uploadOptions);
              }

              return true;
            },

            handlePaste(view, event) {
              if (!event.clipboardData || !uploadOptions.onImageUpload) {
                return false;
              }

              const files = getImageFiles(event.clipboardData.files);
              if (files.length === 0) {
                return false;
              }

              event.preventDefault();
              insertImageFilesWithUpload(view, files, view.state.selection.from, uploadOptions);

              return true;
            },
          },
        }),
      ];
    },
  });
}
