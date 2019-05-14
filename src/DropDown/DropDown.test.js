import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import DropDown from './ACDropDown';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = null) => shallow(<DropDown />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

describe('ACDropDown', () => {
  const wrapper = setup({ field: { name: 'activityId' }, idKey: 'id', valueKey: 'name', items: [{ id: 1, name: 'fakeOption' }] });
  const component = findByTestAttr(wrapper, 'component-acdropdown');

  console.log(wrapper.text());
  console.log(component.text());

  test('renders ACDropDown without crashing', () => {
    expect(component.length).toBe(1);
  });

  test('contains a select with "No items found" option', () => {
    expect(component.text()).toContain('-- No items found --')
  });

});
