import React from 'react';
import { mount } from 'enzyme';
import DatePicker from './DatePicker';

const TOGGLE_SELECTOR = '.ac-datepicker__input-custom';
const DATEPICKER_SELECTOR = '.ac-datepicker';
const DAY_001_SELECTOR = '.react-datepicker__day--001';

describe('Component', () => {
  const wrapper = mount(<DatePicker onChange={jest.fn()} />);

  it('should render without error', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render open/close toggle', () => {
    expect(wrapper.find(TOGGLE_SELECTOR).length).toEqual(1);
  });

  it('should not render datepicker (calendar)', () => {
    expect(wrapper.find(DATEPICKER_SELECTOR).length).toEqual(0);
  });

  describe('When toggle is clicked', () => {
    beforeEach(() => {
      wrapper.find(TOGGLE_SELECTOR).simulate('click');
    });

    it('should render datepicker (calendar)', () => {
      expect(wrapper.find(DATEPICKER_SELECTOR).last().length).toEqual(1);
    });

    it('should receive classes when passed in a calendarClassList', () => {
      const calendarClassList = ['custom', 'custom-datepicker'];
      wrapper.setProps({ calendarClassList });

      calendarClassList.forEach((className) => {
        expect(wrapper.find(DATEPICKER_SELECTOR).last().prop('className')).toContain(className);
      });
    });
  });

  describe('When a date value is clicked', () => {
    beforeEach(() => {
      wrapper.find(TOGGLE_SELECTOR).simulate('click');
      wrapper.find(DAY_001_SELECTOR).first().simulate('click');
    });

    it('should call the onChange handler', () => {
      expect(wrapper.prop('onChange')).toHaveBeenCalled();
    });

    it('should close the datepicker (calendar)', () => {
      expect(wrapper.find(DATEPICKER_SELECTOR).length).toEqual(0);
    });
  });
});
