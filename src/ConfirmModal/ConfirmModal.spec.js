import React from 'react';
import { mount } from 'enzyme';
import ConfirmModal from './ConfirmModal';

describe('Component', () => {
  const defaultProps = {
    isOpen: false,
    onClose: jest.fn(),
    onConfirm: jest.fn(),
    title: 'Example Confirm',
    subtitle: 'Are you sure?',
    disclaimer: 'This action cannot be undone.',
  };
  const wrapper = mount(<ConfirmModal {...defaultProps} />);

  it('should render without error', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('When modal is open', () => {
    beforeEach(() => {
      wrapper.setProps({ isOpen: true });
      wrapper.update();
    });

    it('should have a aria-label `Confirm Modal` for the content container', () => {
      expect(wrapper.find('.ReactModal__Content').prop('aria-label')).toEqual('Confirm Modal');
    });

    it('should add .ReactModal__Body--open class to the page body', () => {
      expect(document.body.classList).toContain('ReactModal__Body--open');
    });

    it('modal content should be focused', () => {
      expect(document.activeElement.classList).toContain('ReactModal__Content');
    });

    it('should contain a content title', () => {
      expect(wrapper.find('.ac-modal--confirm__title')).toBeTruthy();
      expect(wrapper.find('.ac-modal--confirm__title').text()).toEqual(defaultProps.title);
    });

    it('should contain a content title as h1', () => {
      expect(wrapper.find('.ac-modal--confirm__title').type()).toEqual('h1');
    });

    it('should contain a content subtitle', () => {
      expect(wrapper.find('.ac-modal--confirm__subtitle')).toBeTruthy();
      expect(wrapper.find('.ac-modal--confirm__subtitle').text()).toEqual(defaultProps.subtitle);
    });

    it('should contain a content disclaimer', () => {
      expect(wrapper.find('.ac-modal--confirm__disclaimer')).toBeTruthy();
      expect(wrapper.find('.ac-modal--confirm__disclaimer').text()).toEqual(defaultProps.disclaimer);
    });

    it('should call onClose when clicking on Modal overlay', () => {
      wrapper.find('.ReactModal__Overlay').simulate('click');
      expect(wrapper.prop('onClose')).toHaveBeenCalled();
    });

    it('should call onClose when the dismiss button is clicked', () => {
      wrapper.find('.ac-modal--confirm__btn-dismiss').simulate('click');
      expect(wrapper.prop('onClose')).toHaveBeenCalled();
    });

    it('should call onConfirm when the confirm button is clicked', () => {
      wrapper.find('.ac-modal--confirm__btn-confirm').simulate('click');
      expect(wrapper.prop('onConfirm')).toHaveBeenCalled();
    });
  });
});
