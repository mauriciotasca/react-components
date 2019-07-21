import React from 'react';
import { shallow, mount } from 'enzyme';
import MenuPopover from './MenuPopover';

const MENU_POPOVER_WRAPPER = '.ac-menu-popover-wrapper';
const MENU_POPOVER_TOGGLE_BUTTON = '.ac-menu-popover__button';
const MENU_POPOVER_DROPDOWN = '.ac-menu-popover__dropdown';

describe('Component (MenuPopover)', () => {
  const defaultProps = {
    content: 'Button content',
  };
  const wrapper = shallow(<MenuPopover {...defaultProps} />);

  it('should render without error', () => {
    expect(wrapper).toBeTruthy();
  });

  it('wrapper should receive classes when passed in a classList', () => {
    const classList = ['custom', 'custom-popover'];

    wrapper.setProps({ classList });

    classList.forEach((className) => {
      expect(wrapper.find(MENU_POPOVER_WRAPPER).prop('className')).toContain(className);
    });
  });

  it('toggle button should display button content', () => {
    expect(wrapper.find(MENU_POPOVER_TOGGLE_BUTTON).contains(defaultProps.content)).toBeTruthy();
  });
});

describe('When interacting with component', () => {
  describe('And MenuPopover toggle button is clicked', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(<MenuPopover content="Button content" />);
    });

    afterEach(() => {
      wrapper.unmount();
    });

    it('should not open popover/dropdown when nothing is passed in as chilren', () => {
      wrapper.find(MENU_POPOVER_TOGGLE_BUTTON).simulate('click');
      expect(wrapper.find(MENU_POPOVER_DROPDOWN).length).toEqual(0);
    });

    it('should open popover/dropdown when content is passed in as chilren', () => {
      const popoverContent = 'Popover content';
      wrapper.setProps({ children: popoverContent });
      wrapper.find(MENU_POPOVER_TOGGLE_BUTTON).simulate('click');

      expect(wrapper.find(MENU_POPOVER_DROPDOWN).length).toEqual(1);
    });

    it('should remove popover/dropdown when toggle button focus is lost', () => {
      const popoverContent = 'Popover content';
      wrapper.setProps({ children: popoverContent });
      wrapper.find(MENU_POPOVER_TOGGLE_BUTTON).simulate('click');
      wrapper.find(MENU_POPOVER_WRAPPER).simulate('blur');

      expect(wrapper.find(MENU_POPOVER_DROPDOWN).length).toEqual(0);
    });
  });

  describe('And popover/dropdown is open and usePresetStyles is true', () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        usePresetStyles: true,
        children: 'Popover content',
      };
      wrapper = shallow(<MenuPopover {...props} />);
      wrapper.find(MENU_POPOVER_TOGGLE_BUTTON).simulate('click');
    });

    it('popover/dropdown should receive additional classes', () => {
      const additionalClasses = ['dropdown-menu', 'd-block', 'dropdown-menu-left'];

      additionalClasses.forEach((className) => {
        expect(wrapper.find(MENU_POPOVER_DROPDOWN).prop('className')).toContain(className);
      });
    });

    it('popover/dropdown should contain .menu-popover-arrow child', () => {
      expect(wrapper.find(MENU_POPOVER_DROPDOWN).find('.menu-popover-arrow')).toBeTruthy();
    });
  });
});
