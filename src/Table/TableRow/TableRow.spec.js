import React from 'react';
import { mount } from 'enzyme';
import TableRow from './TableRow';
import { CustomTableRow } from '../examples';

describe('Component', () => {
  const wrapper = mount(<table><tbody><TableRow /></tbody></table>);

  it('should not render when rowData or CustomTableRow are not passes in', () => {
    expect(wrapper.find('tr').length).toEqual(0);
  });
});

describe('Component when passed in row data', () => {
  const rowData = ['John Appleseed', '40', '$1010.00'];

  const wrapper = mount(<table><tbody><TableRow rowData={rowData} /></tbody></table>);

  it('should render a tr element', () => {
    expect(wrapper.find('tr').length).toEqual(1);
  });
});

describe('Component when passed in a custom table row', () => {
  const wrapper = mount(<table><tbody><TableRow CustomTableRow={CustomTableRow} /></tbody></table>);

  it('should render a tr element', () => {
    expect(wrapper.find('tr').length).toEqual(1);
  });
});

describe('Component when passed in classList along with row data', () => {
  const classList = ['custom', 'custom-table-row'];
  const rowData = ['John Appleseed', '40', '$1010.00'];

  const wrapper = mount(
    <table><tbody><TableRow classList={classList} rowData={rowData} /></tbody></table>,
  );

  it('hould receive additional classes', () => {
    classList.forEach((className) => {
      expect(wrapper.find('tr').prop('className')).toContain(className);
    });
  });
});
