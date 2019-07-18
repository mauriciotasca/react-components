import React from 'react';
import { mount } from 'enzyme';
import Modal from './Modal';

describe('Component', () => {
  const content = '<div>Modal Content</div>';
  const defaultProps = {
    isOpen: false,
    onClose: jest.fn(),
    ariaAttributes: {},
  };
  const wrapper = mount(<Modal {...defaultProps}>{content}</Modal>);

  it('should render without error', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should not render modal content when isOpen is false', () => {
    expect(wrapper.contains(content)).toBeFalsy();
  });

  describe('When modal is open', () => {
    beforeEach(() => {
      wrapper.setProps({ isOpen: true });
      wrapper.update();
    });

    it('should render modal content', () => {
      expect(wrapper.contains(content)).toBeTruthy();
    });

    it('should add .ReactModal__Body--open class to the page body', () => {
      expect(document.body.classList).toContain('ReactModal__Body--open');
    });

    it('modal content should be focused', () => {
      expect(document.activeElement.classList).toContain('ReactModal__Content');
    });

    it('should call onClose when clicking on Modal overlay', () => {
      wrapper.find('.ReactModal__Overlay').simulate('click');
      expect(wrapper.prop('onClose')).toHaveBeenCalled();
    });
  });
});
