import React from 'react';
import { mount } from 'enzyme';
import Table from './Table';
import { CustomTableBody } from './examples';

const headerNames = ['Name', 'Billable Hours', 'Total Pay'];

describe('Component', () => {
  const wrapper = mount(<Table headerNames={headerNames} />);

  it('should render without error', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render a thead element', () => {
    expect(wrapper.find('thead').length).toEqual(1);
  });

  it('should not render a tbody when data is not passed in', () => {
    expect(wrapper.find('tbody').length).toEqual(0);
  });

  it('should receive classes when passed in a classList', () => {
    const classList = ['custom', 'custom-table'];
    wrapper.setProps({ classList });

    classList.forEach((className) => {
      expect(wrapper.find('table').prop('className')).toContain(className);
    });
  });
});

describe('Component when passed in table data', () => {
  const tableData = [
    ['John Doe', '80', '$2020.00'],
    ['Jane Smith', '55', '$1388.75'],
    ['John Appleseed', '40', '$1010.00'],
  ];

  const wrapper = mount(<Table headerNames={headerNames} tableData={tableData} />);

  it('should render a tbody element', () => {
    expect(wrapper.find('tbody').length).toEqual(1);
  });

  it('should render tr elements equal to length of data', () => {
    expect(wrapper.find('tbody').find('tr').length).toEqual(tableData.length);
  });
});

describe('Component when passed in a custom table body', () => {
  const wrapper = mount(<Table headerNames={headerNames} CustomTableBody={CustomTableBody} />);

  it('should render a tbody element', () => {
    expect(wrapper.find('tbody').length).toEqual(1);
  });

  it('should render children within tbody element', () => {
    expect(wrapper.find('tbody').children()).toBeTruthy();
  });
});
