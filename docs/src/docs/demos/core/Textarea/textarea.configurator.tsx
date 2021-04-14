import React from 'react';
import { Textarea } from '@mantine/core';
import Configurator from '../../../../components/Configurator/Configurator';

const codeTemplate = (props: string) => `<Textarea
 ${props}
/>`;

export function TextareaConfigurator() {
  return (
    <Configurator
      component={Textarea}
      codeTemplate={codeTemplate}
      multiline
      props={[
        { name: 'placeholder', type: 'string', initialValue: 'Product review' },
        {
          name: 'label',
          type: 'string',
          initialValue: 'Product review',
        },
        {
          name: 'description',
          type: 'string',
          initialValue: '',
        },
        {
          name: 'error',
          type: 'string',
          initialValue: '',
        },
        {
          name: 'variant',
          type: 'select',
          data: [
            { label: 'default', value: 'default' },
            { label: 'filled', value: 'filled' },
            { label: 'unstyled', value: 'unstyled' },
          ],
          initialValue: 'default',
          defaultValue: 'default',
        },
        { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
        { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
        {
          name: 'required',
          type: 'boolean',
          initialValue: true,
          defaultValue: false,
        },
      ]}
    />
  );
}
