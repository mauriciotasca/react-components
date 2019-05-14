import React from 'react';
import { shallow } from 'enzyme';
import DropDown from './Dropdown';

const setup = props => shallow(<DropDown {...props} />);

describe('DropDown', () => {
  const noItemsText = 'No items found';
  const wrapper = setup({
    noItemsText: noItemsText,
    field: { name: 'activityId' },
    idKey: 'id',
    valueKey: 'name'
  });

  const select = wrapper.find('select');

  test('renders DropDown without crashing', () => {
    expect(select.length).toBe(1);
  });

  test('contains a select with "No items found" option', () => {
    expect(select.text()).toContain(noItemsText);
  });
});
