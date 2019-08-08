import React from 'react';
import { mount } from 'enzyme';
import TableBody from './TableBody';
// eslint-disable-next-line import/no-unresolved
import { CustomTableBody } from '../examples';

describe('Component', () => {
  const wrapper = mount(<table><TableBody /></table>);

  it('should render without error', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should not render tbody element when tableData or CustomTableBody are not passed in', () => {
    expect(wrapper.find('tbody').length).toEqual(0);
  });
});

describe('Component when passed in table data', () => {
  const tableData = [
    ['John Doe', '80', '$2020.00'],
    ['Jane Smith', '55', '$1388.75'],
    ['John Appleseed', '40', '$1010.00'],
  ];

  const wrapper = mount(<table><TableBody tableData={tableData} /></table>);

  it('should render a tbody element', () => {
    expect(wrapper.find('tbody').length).toEqual(1);
  });

  it('should render tr elements equal to length of data', () => {
    expect(wrapper.find('tr').length).toEqual(tableData.length);
  });
});

describe('Component when passed in a custom table body', () => {
  const wrapper = mount(<table><TableBody CustomTableBody={CustomTableBody} /></table>);

  it('should render a tbody element', () => {
    expect(wrapper.find('tbody').length).toEqual(1);
  });

  it('should render children within tbody element', () => {
    expect(wrapper.find('tbody').children()).toBeTruthy();
  });
});

describe('Component when passed in classList along with table data', () => {
  const classList = ['custom', 'custom-table-body'];
  const tableData = [
    ['John Doe', '80', '$2020.00'],
    ['Jane Smith', '55', '$1388.75'],
    ['John Appleseed', '40', '$1010.00'],
  ];

  const wrapper = mount(<table><TableBody classList={classList} tableData={tableData} /></table>);

  it('hould receive additional classes', () => {
    classList.forEach((className) => {
      expect(wrapper.find('tbody').prop('className')).toContain(className);
    });
  });
});
