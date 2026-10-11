import TipTapLink from '@tiptap/extension-link';

export const Link = TipTapLink.extend({
  addKeyboardShortcuts() {
    return {
      'Mod-k': () => {
        (this.editor as any).emit('edit-link');
        return true;
      },
    };
  },
}).configure({ openOnClick: false });
