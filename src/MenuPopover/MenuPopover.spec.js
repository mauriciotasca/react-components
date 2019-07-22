import React from 'react';
import { mount } from 'enzyme';
import MenuPopover from './MenuPopover';

const MENU_POPOVER_WRAPPER = '.ac-menu-popover-wrapper';
const defaultProps = {
  isOpen: true,
  onClose: jest.fn(),
};

describe('Component when open', () => {
  const wrapper = mount(<MenuPopover {...defaultProps}>Popover Content</MenuPopover>);

  it('should render without error', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should have focus', () => {
    expect(wrapper.getDOMNode()).toEqual(document.activeElement);
  });

  it('wrapper should receive classes when passed in a classList', () => {
    const classList = ['custom', 'custom-popover'];

    wrapper.setProps({ classList });

    classList.forEach((className) => {
      expect(wrapper.find(MENU_POPOVER_WRAPPER).prop('className')).toContain(className);
    });
  });
});

describe('When interacting with component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<MenuPopover {...defaultProps}>Popover Content</MenuPopover>);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should call onClose when popover focus is lost', () => {
    wrapper.find(MENU_POPOVER_WRAPPER).simulate('blur');
    expect(wrapper.prop('onClose')).toHaveBeenCalled();
  });
});
