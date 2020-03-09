import React from 'react';
import { shallow } from 'enzyme';
import Line from './Line';

describe('MoodLine test section', () => {
  it('should render the mood line', () => {
    // prepare
    const wrapper = shallow(<Line />);
    // execution
    expect(wrapper.find('div.mood-line')).toHaveLength(1);
  });
  it('should render the tooltip on moodline on focus', () => {
    // prepare
    const wrapper = shallow(<Line showPercentage color="bg-red" />);
    // execution
    wrapper.find('div.mood-line').simulate('focus');
    expect(wrapper.find('div.w-auto').hasClass('visible')).toBe(true);
  });
  it('should render the tooltip on moodline o mouse over and hide on mouse leave', () => {
    // prepare
    const wrapper = shallow(<Line showPercentage color="bg-red" />);
    // execution
    wrapper.find('div.mood-line').simulate('mouseover');
    expect(wrapper.find('div.w-auto').hasClass('visible')).toBe(true);
    wrapper.find('div.mood-line').simulate('mouseleave');
    expect(wrapper.find('div.w-auto').hasClass('invisible')).toBe(true);
  });
  it('should render a red tooltip', () => {
    // prepare
    const wrapper = shallow(<Line color="bg-red" showPercentage />);
    // execution
    expect(wrapper.find('div.w-auto')).toHaveLength(1);
  });
  it('should render a red line', () => {
    // prepare
    const wrapper = shallow(<Line color="bg-red" />);
    // execution
    expect(wrapper.find('div').hasClass('bg-red')).toBe(true);
  });
});
