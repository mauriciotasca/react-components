import React from 'react';
import { mount } from 'enzyme';
import TableHeader from './TableHeader';

const headerNames = ['Name', 'Billable Hours', 'Total Pay'];

describe('Component', () => {
  const wrapper = mount(<table><TableHeader headerNames={headerNames} /></table>);

  it('should render without error', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render a thead element', () => {
    expect(wrapper.find('thead').length).toEqual(1);
  });

  it('should render th elements equal to length of header names passed in', () => {
    expect(wrapper.find('th').length).toEqual(headerNames.length);
  });
});

describe('Component when passed in classList', () => {
  const classList = ['custom', 'custom-table-header'];

  const wrapper = mount(
    <table><TableHeader headerNames={headerNames} classList={classList} /></table>,
  );

  it('hould receive additional classes', () => {
    classList.forEach((className) => {
      expect(wrapper.find('thead').prop('className')).toContain(className);
    });
  });
});
