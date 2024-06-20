import {
  IconAlignCenter,
  IconAlignJustified,
  IconAlignLeft,
  IconAlignRight,
  IconArrowBackUp,
  IconArrowForwardUp,
  IconBlockquote,
  IconBold,
  IconCircleOff,
  IconClearFormatting,
  IconCode,
  IconH1,
  IconH2,
  IconH3,
  IconH4,
  IconH5,
  IconH6,
  IconHighlight,
  IconIndentDecrease,
  IconIndentIncrease,
  IconItalic,
  IconLineDashed,
  IconList,
  IconListCheck,
  IconListNumbers,
  IconStrikethrough,
  IconSubscript,
  IconSuperscript,
  IconUnderline,
  IconUnlink,
} from '../icons/Icons';
import { createControl } from './RichTextEditorControl';

export const BoldControl = createControl({
  label: 'boldControlLabel',
  icon: (props) => <IconBold {...props} />,
  isActive: { name: 'bold' },
  operation: { name: 'toggleBold' },
});

export const ItalicControl = createControl({
  label: 'italicControlLabel',
  icon: (props) => <IconItalic {...props} />,
  isActive: { name: 'italic' },
  operation: { name: 'toggleItalic' },
});

export const UnderlineControl = createControl({
  label: 'underlineControlLabel',
  icon: (props) => <IconUnderline {...props} />,
  isActive: { name: 'underline' },
  operation: { name: 'toggleUnderline' },
});

export const StrikeThroughControl = createControl({
  label: 'strikeControlLabel',
  icon: (props) => <IconStrikethrough {...props} />,
  isActive: { name: 'strike' },
  operation: { name: 'toggleStrike' },
});

export const ClearFormattingControl = createControl({
  label: 'clearFormattingControlLabel',
  icon: (props) => <IconClearFormatting {...props} />,
  operation: { name: 'unsetAllMarks' },
});

export const UnlinkControl = createControl({
  label: 'unlinkControlLabel',
  icon: (props) => <IconUnlink {...props} />,
  operation: { name: 'unsetLink' },
});

export const BulletListControl = createControl({
  label: 'bulletListControlLabel',
  icon: (props) => <IconList {...props} />,
  isActive: { name: 'bulletList' },
  operation: { name: 'toggleBulletList' },
});

export const OrderedListControl = createControl({
  label: 'orderedListControlLabel',
  icon: (props) => <IconListNumbers {...props} />,
  isActive: { name: 'orderedList' },
  operation: { name: 'toggleOrderedList' },
});

export const H1Control = createControl({
  label: 'h1ControlLabel',
  icon: (props) => <IconH1 {...props} />,
  isActive: { name: 'heading', attributes: { level: 1 } },
  operation: { name: 'toggleHeading', attributes: { level: 1 } },
});

export const H2Control = createControl({
  label: 'h2ControlLabel',
  icon: (props) => <IconH2 {...props} />,
  isActive: { name: 'heading', attributes: { level: 2 } },
  operation: { name: 'toggleHeading', attributes: { level: 2 } },
});

export const H3Control = createControl({
  label: 'h3ControlLabel',
  icon: (props) => <IconH3 {...props} />,
  isActive: { name: 'heading', attributes: { level: 3 } },
  operation: { name: 'toggleHeading', attributes: { level: 3 } },
});

export const H4Control = createControl({
  label: 'h4ControlLabel',
  icon: (props) => <IconH4 {...props} />,
  isActive: { name: 'heading', attributes: { level: 4 } },
  operation: { name: 'toggleHeading', attributes: { level: 4 } },
});

export const H5Control = createControl({
  label: 'h5ControlLabel',
  icon: (props) => <IconH5 {...props} />,
  isActive: { name: 'heading', attributes: { level: 5 } },
  operation: { name: 'toggleHeading', attributes: { level: 5 } },
});

export const H6Control = createControl({
  label: 'h6ControlLabel',
  icon: (props) => <IconH6 {...props} />,
  isActive: { name: 'heading', attributes: { level: 6 } },
  operation: { name: 'toggleHeading', attributes: { level: 6 } },
});

export const BlockquoteControl = createControl({
  label: 'blockquoteControlLabel',
  icon: (props) => <IconBlockquote {...props} />,
  isActive: { name: 'blockquote' },
  operation: { name: 'toggleBlockquote' },
});

export const AlignLeftControl = createControl({
  label: 'alignLeftControlLabel',
  icon: (props) => <IconAlignLeft {...props} />,
  operation: { name: 'setTextAlign', attributes: 'left' },
});

export const AlignRightControl = createControl({
  label: 'alignRightControlLabel',
  icon: (props) => <IconAlignRight {...props} />,
  operation: { name: 'setTextAlign', attributes: 'right' },
});

export const AlignCenterControl = createControl({
  label: 'alignCenterControlLabel',
  icon: (props) => <IconAlignCenter {...props} />,
  operation: { name: 'setTextAlign', attributes: 'center' },
});

export const AlignJustifyControl = createControl({
  label: 'alignJustifyControlLabel',
  icon: (props) => <IconAlignJustified {...props} />,
  operation: { name: 'setTextAlign', attributes: 'justify' },
});

export const SubscriptControl = createControl({
  label: 'subscriptControlLabel',
  icon: (props) => <IconSubscript {...props} />,
  isActive: { name: 'subscript' },
  operation: { name: 'toggleSubscript' },
});

export const SuperscriptControl = createControl({
  label: 'superscriptControlLabel',
  icon: (props) => <IconSuperscript {...props} />,
  isActive: { name: 'superscript' },
  operation: { name: 'toggleSuperscript' },
});

export const CodeControl = createControl({
  label: 'codeControlLabel',
  icon: (props) => <IconCode {...props} />,
  isActive: { name: 'code' },
  operation: { name: 'toggleCode' },
});

export const CodeBlockControl = createControl({
  label: 'codeBlockControlLabel',
  icon: (props) => <IconCode {...props} />,
  isActive: { name: 'codeBlock' },
  operation: { name: 'toggleCodeBlock' },
});

export const HighlightControl = createControl({
  label: 'highlightControlLabel',
  icon: (props) => <IconHighlight {...props} />,
  isActive: { name: 'highlight' },
  operation: { name: 'toggleHighlight' },
});

export const HrControl = createControl({
  label: 'hrControlLabel',
  icon: (props) => <IconLineDashed {...props} />,
  operation: { name: 'setHorizontalRule' },
});

export const UnsetColorControl = createControl({
  label: 'unsetColorControlLabel',
  icon: (props) => <IconCircleOff {...props} />,
  operation: { name: 'unsetColor' },
});

export const UndoControl = createControl({
  label: 'undoControlLabel',
  icon: (props) => <IconArrowBackUp {...props} />,
  isDisabled: (editor) => !editor?.can().undo(),
  operation: { name: 'undo' },
});

export const RedoControl = createControl({
  label: 'redoControlLabel',
  icon: (props) => <IconArrowForwardUp {...props} />,
  isDisabled: (editor) => !editor?.can().redo(),
  operation: { name: 'redo' },
});

export const TaskListControl = createControl({
  label: 'tasksControlLabel',
  icon: (props) => <IconListCheck {...props} />,
  isActive: { name: 'taskList' },
  operation: { name: 'toggleTaskList' },
});

export const TaskListSinkControl = createControl({
  label: 'tasksSinkLabel',
  icon: (props) => <IconIndentIncrease {...props} />,
  operation: { name: 'sinkListItem', attributes: 'taskItem' },
  isDisabled: (editor) => !editor?.can().sinkListItem('taskItem'),
});

export const TaskListLiftControl = createControl({
  label: 'tasksLiftLabel',
  icon: (props) => <IconIndentDecrease {...props} />,
  operation: { name: 'liftListItem', attributes: 'taskItem' },
  isDisabled: (editor) => !editor?.can().liftListItem('taskItem'),
});
