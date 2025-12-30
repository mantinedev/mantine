import { IconViewportNarrow, IconViewportWide } from '@tabler/icons-react';
import { TableKit } from '@tiptap/extension-table';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '@mantine/tiptap';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { IconViewportNarrow, IconViewportWide } from '@tabler/icons-react';
import { TableKit } from '@tiptap/extension-table';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '@mantine/tiptap';

function Demo() {
  const editor = useEditor({
    shouldRerenderOnTransaction: true,
    extensions: [
      StarterKit,
      TableKit.configure({
        table: {
          resizable: true,
        },
        tableRow: {
          HTMLAttributes: {
            'data-with-row-border': true,
            'data-striped': 'even',
          },
        },
        tableHeader: {
          HTMLAttributes: {
            'data-with-column-border': true,
          },
        },
        tableCell: {
          HTMLAttributes: {
            'data-with-column-border': true,
          },
        },
      }),
    ],
    content: \`
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th colspan="3">Description</th>
            </tr>
            <tr>
              <td>Cyndi Lauper</td>
              <td>Singer</td>
              <td>Songwriter</td>
              <td>Actress</td>
            </tr>
          </tbody>
        </table>
      \`,
  });

  return (
    <div style={{ padding: 40 }}>
      <RichTextEditor editor={editor}>
        <RichTextEditor.Toolbar>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.InsertTable rows={2} cols={4} />
            <RichTextEditor.FixTables />
            <RichTextEditor.DeleteTable />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.AddColumnBefore />
            <RichTextEditor.AddColumnAfter />
            <RichTextEditor.DeleteColumn />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.AddRowBefore />
            <RichTextEditor.AddRowAfter />
            <RichTextEditor.DeleteRow />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.MergeCells />
            <RichTextEditor.SplitCell />
            <RichTextEditor.MergeOrSplit />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.ToggleHeaderRow />
            <RichTextEditor.ToggleHeaderColumn />
            <RichTextEditor.ToggleHeaderCell />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.SetCellAttribute
              attributeKey="colspan"
              attributeValue={(currentValue: any) => currentValue + 1}
              label="Widen"
              icon={<IconViewportWide strokeWidth={1.5} size={16} />}
            />
            <RichTextEditor.SetCellAttribute
              attributeKey="colspan"
              attributeValue={(currentValue: any) => currentValue - 1}
              disabledByValue={(currentValue: any) => currentValue === 1}
              label="Narrow"
              icon={<IconViewportNarrow strokeWidth={1.5} size={16} />}
            />
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content />
      </RichTextEditor>
    </div>
  );
}
`;

function Demo() {
  const editor = useEditor({
    immediatelyRender: false,
    shouldRerenderOnTransaction: true,
    extensions: [
      StarterKit,
      TableKit.configure({
        table: {
          resizable: true,
        },
        tableRow: {
          HTMLAttributes: {
            'data-with-row-border': true,
            'data-striped': 'even',
          },
        },
        tableHeader: {
          HTMLAttributes: {
            'data-with-column-border': true,
          },
        },
        tableCell: {
          HTMLAttributes: {
            'data-with-column-border': true,
          },
        },
      }),
    ],
    content: `
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th colspan="3">Description</th>
            </tr>
            <tr>
              <td>Cyndi Lauper</td>
              <td>Singer</td>
              <td>Songwriter</td>
              <td>Actress</td>
            </tr>
          </tbody>
        </table>
      `,
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.InsertTable rows={2} cols={4} />
          <RichTextEditor.FixTables />
          <RichTextEditor.DeleteTable />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.AddColumnBefore />
          <RichTextEditor.AddColumnAfter />
          <RichTextEditor.DeleteColumn />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.AddRowBefore />
          <RichTextEditor.AddRowAfter />
          <RichTextEditor.DeleteRow />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.MergeCells />
          <RichTextEditor.SplitCell />
          <RichTextEditor.MergeOrSplit />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.ToggleHeaderRow />
          <RichTextEditor.ToggleHeaderColumn />
          <RichTextEditor.ToggleHeaderCell />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.GoToPreviousCell />
          <RichTextEditor.GoToNextCell />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.SetCellAttribute
            attributeKey="colspan"
            attributeValue={(currentValue: any) => currentValue + 1}
            label="Widen"
            icon={<IconViewportWide strokeWidth={1.5} size={16} />}
          />
          <RichTextEditor.SetCellAttribute
            attributeKey="colspan"
            attributeValue={(currentValue: any) => currentValue - 1}
            disabledByValue={(currentValue: any) => currentValue === 1}
            label="Narrow"
            icon={<IconViewportNarrow strokeWidth={1.5} size={16} />}
          />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}

export const table: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
