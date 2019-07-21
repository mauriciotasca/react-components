import React from 'react';
import { shallow } from 'enzyme';
import LoadingBar from './LoadingBar';

describe('Component', () => {
  const wrapper = shallow(<LoadingBar isLoading={false} />);

  it('should render without error', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render empty placeholder component when `isLoading` is false', () => {
    expect(wrapper.hasClass('ac-loading-bar ac-loading-bar--not-loading')).toBeTruthy();
    expect(wrapper.children().length).toEqual(0);
  });

  it('should render 3 child components when `isLoading` is true', () => {
    wrapper.setProps({ isLoading: true });
    expect(wrapper.hasClass('ac-loading-bar')).toBeTruthy();
    expect(wrapper.children().length).toEqual(3);
  });
});
