import { MantineProvider } from '@mantine/styles';
import React from 'react';
import { List } from './List';
import { ListStylesParams } from './List.styles';

export default { title: 'List' };

export function WithinProvider() {
  return (
    <div style={{ padding: 40 }}>
      <MantineProvider
        theme={{
          components: {
            List: {
              styles: (theme, params: ListStylesParams) => {
                const { listStyleType } = params;
                let maxWidth = 'inherit';
                if (listStyleType === 'disc' || listStyleType === 'circle') {
                  maxWidth = 'calc(100% - 1.5em)';
                }

                return {
                  itemWrapper: {
                    display: 'inline-flex',
                    flexDirection: 'column',
                    maxWidth,
                  },
                };
              },
            },
          },
        }}
      >
        <List size="sm" type="ordered" start={5}>
          <List.Item>Clone or download repository from GitHub</List.Item>
          <List.Item>Install dependencies with yarn</List.Item>
          <List.Item>To start development server run npm start command</List.Item>
        </List>
      </MantineProvider>
    </div>
  );
}
