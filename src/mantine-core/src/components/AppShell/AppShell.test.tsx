import React from 'react';
import { shallow } from 'enzyme';
import {
  itRendersChildren,
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsRef,
  itSupportsStylesApi,
} from '@mantine/tests';
import { Header } from './Header/Header';
import { Navbar } from './Navbar/Navbar';
import { AppShell } from './AppShell';
import { AppShell as AppShellStylesAPi } from './styles.api';

const defaultProps = { children: 'test' };

describe('@mantine/core/AppShell', () => {
  itRendersChildren(AppShell, defaultProps);
  itSupportsClassName(AppShell, defaultProps);
  itSupportsStyle(AppShell, defaultProps);
  itSupportsOthers(AppShell, defaultProps);
  itSupportsRef(AppShell, defaultProps, HTMLDivElement);
  itSupportsStylesApi(AppShell, defaultProps, Object.keys(AppShellStylesAPi), 'AppShell');

  it('passes fixed and zIndex props to Header', () => {
    const fixed = shallow(
      <AppShell fixed zIndex={476} header={<Header height={60}>test-header</Header>}>
        test-shell
      </AppShell>
    );

    const _static = shallow(
      <AppShell fixed={false} header={<Header height={60}>test-header</Header>}>
        test-shell
      </AppShell>
    );

    expect(fixed.find(Header).prop('zIndex')).toBe(476);
    expect(fixed.find(Header).prop('fixed')).toBe(true);
    expect(_static.find(Header).prop('fixed')).toBe(false);
  });

  it('passes fixed and zIndex props to Navbar', () => {
    const fixed = shallow(
      <AppShell fixed zIndex={476} navbar={<Navbar>test-navbar</Navbar>}>
        test-shell
      </AppShell>
    );

    const _static = shallow(
      <AppShell fixed={false} navbar={<Navbar>test-navbar</Navbar>}>
        test-shell
      </AppShell>
    );

    expect(fixed.find(Navbar).prop('zIndex')).toBe(476);
    expect(fixed.find(Navbar).prop('fixed')).toBe(true);
    expect(_static.find(Navbar).prop('fixed')).toBe(false);
  });

  it('sets Navbar height and position based on Header height', () => {
    const element = shallow(
      <AppShell
        header={<Header height={87}>test-header</Header>}
        navbar={<Navbar width={{ base: 200 }}>test-navbar</Navbar>}
      >
        test-shell
      </AppShell>
    );

    expect(element.find(Navbar).prop('height')).toBe('calc(100vh - 87px)');
    expect(element.find(Navbar).prop('position')).toEqual({ top: '87px', left: 0 });
  });

  it('has correct displayName', () => {
    expect(AppShell.displayName).toEqual('@mantine/core/AppShell');
  });
});
