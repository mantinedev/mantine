import TipTapTaskList from '@tiptap/extension-task-list';
import classes from '../RichTextEditor.module.css';

export const TaskList = TipTapTaskList.extend({
  addKeyboardShortcuts: () => ({
    'Mod-[': ({ editor }) => {
      editor.chain().focus().liftListItem('taskItem').run();
      return true;
    },
    'Mod-]': ({ editor }) => {
      editor.chain().focus().sinkListItem('taskItem').run();
      return true;
    },
    Tab: ({ editor }) => {
      editor.chain().focus().sinkListItem('taskItem').run();
      return true;
    },
  }),
}).configure({
  HTMLAttributes: {
    class: `${classes.taskList} mantine-RichTextEditor-taskList`,
  },
});
