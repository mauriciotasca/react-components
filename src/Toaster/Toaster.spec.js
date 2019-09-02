import React from 'react';
import { mount } from 'enzyme';
import Toaster from './Toaster';

describe('Component', () => {
  const defaultProps = {
    timeout: 1000,
    visible: false,
    title: 'Toaster Title',
    subtitle: 'Toaster Subtitle',
    hasCloseIcon: true,
    icon: undefined,
    classNames: 'bg-success text-white',
    onToasterDismissed: null
  };
  const wrapper = mount(<Toaster {...defaultProps} />);

  it('should render without error', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('When toast is open', () => {
    beforeAll(() => {
      wrapper.setProps({ onToasterDismissed: () => { wrapper.setProps({ visible: false }); } });
      wrapper.update();
    });

    beforeEach(() => {
      wrapper.setProps({ visible: true });
      wrapper.update();
    });

    it('should render toaster title', () => {
      expect(wrapper.find('#toaster-title').text()).toEqual(defaultProps.title);
    });

    it('should render toaster subtitle', () => {
      expect(wrapper.find('#toaster-subtitle').text()).toEqual(defaultProps.subtitle);
    });

    it('should render toaster close icon', () => {
      expect(wrapper.find('.clickable').exists()).toBeTruthy();
    });

    it('should hide toaster when clicking on close icon', () => {
      expect(wrapper.prop('visible')).toBe(true);
      wrapper.find('.clickable').simulate('click');
      expect(wrapper.prop('visible')).toBe(false);
    });

    it('should not render toaster close icon', () => {
      wrapper.setProps({ hasCloseIcon: false });
      expect(wrapper.find('.clickable').exists()).toBeFalsy();
    });

    it('should hide toaster when timeout is up', (done) => {
      setTimeout(() => {
        expect(wrapper.find('.ac-toaster').hasClass('hide')).toBeTruthy();
        done();
      }, defaultProps.timeout + 5);
    });

    it('should keep toaster when mouse is on', (done) => {
      wrapper.find('.ac-toaster').simulate('mouseenter');
      setTimeout(() => {
        expect(wrapper.find('.ac-toaster').hasClass('show')).toBeTruthy();
        done();
      }, defaultProps.timeout + 5);
    });

    it('should hide toaster after the timeout when mouse leaves', (done) => {
      wrapper.find('.ac-toaster').simulate('mouseenter');
      wrapper.find('.ac-toaster').simulate('mouseleave');
      setTimeout(() => {
        expect(wrapper.find('.ac-toaster').hasClass('hide')).toBeTruthy();
        done();
      }, defaultProps.timeout + 5);
    });
  });
});
