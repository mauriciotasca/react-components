import React from 'react';
import { mount } from 'enzyme';
import AlertModal from './AlertModal';

describe('Component', () => {
  const defaultProps = {
    isOpen: false,
    onClose: jest.fn(),
    title: 'Example Alert',
    description: 'This is an alert!',
  };
  const wrapper = mount(<AlertModal {...defaultProps} />);

  it('should render without error', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('When modal is open', () => {
    beforeEach(() => {
      wrapper.setProps({ isOpen: true });
      wrapper.update();
    });

    it('should have a aria-label `Alert Modal` for the content container', () => {
      expect(wrapper.find('.ReactModal__Content').prop('aria-label')).toEqual('Alert Modal');
    });

    it('should add .ReactModal__Body--open class to the page body', () => {
      expect(document.body.classList).toContain('ReactModal__Body--open');
    });

    it('modal content should be focused', () => {
      expect(document.activeElement.classList).toContain('ReactModal__Content');
    });

    it('should contain a content title', () => {
      expect(wrapper.find('.ac-modal--alert__title')).toBeTruthy();
      expect(wrapper.find('.ac-modal--alert__title').text()).toEqual(defaultProps.title);
    });

    it('should contain a content description', () => {
      expect(wrapper.find('.ac-modal--alert__desc')).toBeTruthy();
      expect(wrapper.find('.ac-modal--alert__desc').text()).toEqual(defaultProps.description);
    });

    it('should call onClose when clicking on Modal overlay', () => {
      wrapper.find('.ReactModal__Overlay').simulate('click');
      expect(wrapper.prop('onClose')).toHaveBeenCalled();
    });
  });
});
