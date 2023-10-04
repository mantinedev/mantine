import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../render-demo';

const meta: Meta = {
  title: 'Form',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoLists: Story = {
  name: '⭐ Demo: lists',
  render: renderDemo(demos.lists),
};

export const DemoDnd: Story = {
  name: '⭐ Demo: dnd',
  render: renderDemo(demos.dnd),
};

export const DemoZod: Story = {
  name: '⭐ Demo: zod',
  render: renderDemo(demos.zod),
};

export const DemoPassword: Story = {
  name: '⭐ Demo: password',
  render: renderDemo(demos.password),
};

export const DemoValidateFunction: Story = {
  name: '⭐ Demo: validateFunction',
  render: renderDemo(demos.validateFunction),
};

export const DemoJoi: Story = {
  name: '⭐ Demo: joi',
  render: renderDemo(demos.joi),
};

export const DemoYup: Story = {
  name: '⭐ Demo: yup',
  render: renderDemo(demos.yup),
};

export const DemoLocalStorage: Story = {
  name: '⭐ Demo: localStorage',
  render: renderDemo(demos.localStorage),
};

export const DemoNested: Story = {
  name: '⭐ Demo: nested',
  render: renderDemo(demos.nested),
};

export const DemoRulesValidation: Story = {
  name: '⭐ Demo: rulesValidation',
  render: renderDemo(demos.rulesValidation),
};

export const DemoLiveValidation: Story = {
  name: '⭐ Demo: liveValidation',
  render: renderDemo(demos.liveValidation),
};

export const DemoLiveFieldValidation: Story = {
  name: '⭐ Demo: liveFieldValidation',
  render: renderDemo(demos.liveFieldValidation),
};

export const DemoClearErrorOnChange: Story = {
  name: '⭐ Demo: clearErrorOnChange',
  render: renderDemo(demos.clearErrorOnChange),
};

export const DemoOnSubmitErrors: Story = {
  name: '⭐ Demo: onSubmitErrors',
  render: renderDemo(demos.onSubmitErrors),
};

export const DemoAsyncSetValues: Story = {
  name: '⭐ Demo: asyncSetValues',
  render: renderDemo(demos.asyncSetValues),
};

export const DemoStepper: Story = {
  name: '⭐ Demo: stepper',
  render: renderDemo(demos.stepper),
};

export const DemoSetFieldValue: Story = {
  name: '⭐ Demo: setFieldValue',
  render: renderDemo(demos.setFieldValue),
};

export const DemoSetValues: Story = {
  name: '⭐ Demo: setValues',
  render: renderDemo(demos.setValues),
};

export const DemoReset: Story = {
  name: '⭐ Demo: reset',
  render: renderDemo(demos.reset),
};

export const DemoStatus: Story = {
  name: '⭐ Demo: status',
  render: renderDemo(demos.status),
};

export const DemoBlurValidation: Story = {
  name: '⭐ Demo: blurValidation',
  render: renderDemo(demos.blurValidation),
};

export const DemoBlurFieldValidation: Story = {
  name: '⭐ Demo: blurFieldValidation',
  render: renderDemo(demos.blurFieldValidation),
};

export const DemoTransformValues: Story = {
  name: '⭐ Demo: transformValues',
  render: renderDemo(demos.transformValues),
};

export const DemoValidators: Story = {
  name: '⭐ Demo: validators',
  render: renderDemo(demos.validators),
};

export const DemoValidatorsEmpty: Story = {
  name: '⭐ Demo: validatorsEmpty',
  render: renderDemo(demos.validatorsEmpty),
};

export const DemoSuperstruct: Story = {
  name: '⭐ Demo: superstruct',
  render: renderDemo(demos.superstruct),
};
