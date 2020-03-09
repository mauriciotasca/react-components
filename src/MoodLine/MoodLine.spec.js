import React from 'react';
import { moodsPercentage } from '__mocks__/moodsPercentage';
import { shallow, mount } from 'enzyme';
import { Line } from 'components/Line';
import MoodLine from './MoodLine';

describe('MoodLine test section', () => {
  it('Should render the moodline component', () => {
    // prepare
    const wrapper = shallow(<MoodLine />);
    // execution
    expect(wrapper.find('div.progress')).toHaveLength(1);
  });
  it('Should render the line component', () => {
    // prepare
    const wrapper = mount(
      <MoodLine moodsPercentage={moodsPercentage} showPercentage />
    );
    // execution
    expect(wrapper.find(Line)).toHaveLength(8);
  });
});
