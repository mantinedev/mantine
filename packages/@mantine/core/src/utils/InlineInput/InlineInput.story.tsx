import { InlineInput, InlineInputProps } from './InlineInput';

export default { title: 'InlineInput' };

const defaultProps: InlineInputProps = {
  __staticSelector: 'InlineInput',
  __stylesApiProps: {},
  label: 'Label',
  description: 'Description',
  error: 'Error',
  id: 'id',
  disabled: false,
  size: 'sm',
  labelPosition: 'left',
  children: <input type="checkbox" style={{ order: 2 }} />,
};

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <InlineInput {...defaultProps} labelPosition="right" />
      <InlineInput {...defaultProps} labelPosition="left" />
    </div>
  );
}
