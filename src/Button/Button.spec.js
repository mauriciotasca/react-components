import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Component', () => {
  const wrapper = shallow(<Button>Click me!</Button>);

  it('should render without error', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should receive classes when passed in a classList', () => {
    const classList = ['custom', 'custom-button'];

    wrapper.setProps({ classList });

    classList.forEach((className) => {
      expect(wrapper.prop('className')).toContain(className);
    });
  });

  describe('When passed in an onClick event handler', () => {
    const onClick = jest.fn();
    wrapper.setProps({ onClick });

    it('should call the onClick handler when clicked', () => {
      wrapper.simulate('click');
      expect(wrapper.props().onClick).toHaveBeenCalled();
    });
  });
});
