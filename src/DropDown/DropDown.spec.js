import React from 'react';
import { shallow } from 'enzyme';
import DropDown from './DropDown';

const setup = props => shallow(<DropDown {...props} />);

describe('DropDown', () => {
  const noItemsText = 'No items found';
  const dummyOptionText = 'Please select an option';
  const defaultProps = {
    dummyOptionText,
    noItemsText,
    field: { name: 'activityId' },
    idKey: 'id',
    valueKey: 'name',
  };
  const items = [{ id: 1, name: 'Dummy Option' }];

  describe('when rendered without items', () => {
    const wrapper = setup(defaultProps);
    const select = wrapper.find('select');

    test(`contains a select with '${noItemsText}' text`, () => {
      expect(select.text()).toContain(noItemsText);
    });
  });

  describe('when rendered with items', () => {
    const enhancedProps = {
      ...defaultProps,
      items,
    };
    const wrapper = setup(enhancedProps);
    const select = wrapper.find('select');

    test(`contains a select with '${dummyOptionText}' text`, () => {
      expect(select.text()).toContain(dummyOptionText);
    });
  });
});
