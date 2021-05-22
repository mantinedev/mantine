import React from 'react';
import { mount } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itRendersChildren,
  itSupportsStyle,
  itSupportsOthers,
} from '@mantine/tests';
import { ActionIcon } from '../ActionIcon/ActionIcon';
import { Overlay } from '../Overlay/Overlay';
import { MantineModal, Modal } from './Modal';

describe('@mantine/core/Modal', () => {
  // Clean up dom as jest does not do this automatically
  afterEach(() => {
    document.getElementsByTagName('body')[0].innerHTML = '';
  });

  checkAccessibility([
    mount(
      <MantineModal opened onClose={() => {}} closeButtonLabel="Close modal" title="test-title">
        test-modal
      </MantineModal>
    ),
  ]);

  itSupportsOthers(MantineModal, { opened: true, onClose: () => {} });
  itSupportsClassName(MantineModal, { opened: true, onClose: () => {} });
  itRendersChildren(MantineModal, { opened: true, onClose: () => {} });
  itSupportsStyle(MantineModal, { opened: true, onClose: () => {} });

  it('has correct displayName', () => {
    expect(Modal.displayName).toEqual('@mantine/core/Modal');
  });

  it('sets document.body overflow to hidden when opened', () => {
    // reset overflow from previous tests
    document.body.style.overflow = 'auto';
    expect(document.body.style.overflow).toBe('auto');

    mount(
      <MantineModal opened onClose={() => {}}>
        test-modal
      </MantineModal>
    );

    expect(document.body.style.overflow).toBe('hidden');
  });

  it('closes modal on close button click', () => {
    const spy = jest.fn();
    const element = mount(
      <MantineModal opened onClose={spy}>
        test-modal
      </MantineModal>
    );
    element.find(ActionIcon).simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('renders correct title', () => {
    const element = mount(
      <MantineModal opened onClose={() => {}} title="test-title">
        test-modal
      </MantineModal>
    );

    expect(element.render().find('[data-mantine-modal-title]').text()).toBe('test-title');
  });

  it('allows to hide close button with hideCloseButton prop', () => {
    const withButton = mount(<MantineModal opened onClose={() => {}} />);
    const withoutButton = mount(<MantineModal opened onClose={() => {}} hideCloseButton />);

    expect(withButton.find(ActionIcon)).toHaveLength(1);
    expect(withoutButton.find(ActionIcon)).toHaveLength(0);
  });

  it('does not render modal header if close button is hidden and title is not passed', () => {
    const withHeader = mount(<MantineModal opened onClose={() => {}} title="With header" />);
    const withoutHeader = mount(<MantineModal opened onClose={() => {}} hideCloseButton />);

    expect(withHeader.render().find('[data-mantine-modal-header]')).toHaveLength(1);
    expect(withoutHeader.render().find('[data-mantine-modal-header]')).toHaveLength(0);
  });

  it('passes overlayOpacity and overlayColor to Overlay component', () => {
    const element = mount(
      <MantineModal opened onClose={() => {}} overlayColor="#fff" overlayOpacity={0.99} />
    );
    expect(element.find(Overlay).prop('opacity')).toBe(0.99);
    expect(element.find(Overlay).prop('color')).toBe('#fff');
  });

  it('sets correct z-index based on zIndex prop', () => {
    const element = mount(<MantineModal opened onClose={() => {}} zIndex={87} />);
    expect(element.find(Overlay).prop('zIndex')).toBe(87);
    expect(element.render().find('[data-mantine-modal-inner]').css('z-index')).toBe('88');
  });

  it('locks scroll on mount', () => {
    mount(<MantineModal opened onClose={() => {}} zIndex={87} />);
    expect(document.body.style.overflow).toBe('hidden');
  });
});
