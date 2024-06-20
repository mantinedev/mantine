import classes from '../RichTextEditor.module.css';

export const getTaskListExtension = <T>(TipTapTaskList: T): T =>
  (TipTapTaskList as any)
    .extend({
      addKeyboardShortcuts: () => ({
        'Mod-[': ({ editor }: any) => {
          editor.chain().focus().liftListItem('taskItem').run();
          return true;
        },
        'Mod-]': ({ editor }: any) => {
          editor.chain().focus().sinkListItem('taskItem').run();
          return true;
        },
      }),
    })
    .configure({
      HTMLAttributes: {
        class: `${classes.taskList} mantine-RichTextEditor-taskList`,
      },
    });
