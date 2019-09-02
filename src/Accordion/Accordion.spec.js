import React from 'react';
import { mount } from 'enzyme';
import Accordion from './Accordion';

describe('Accordion', () => {
  const defaultProps = {
    title: 'Accordion component Title',
    content: (
      <ul className="ac-according__content">
        <li>teste</li>
      </ul>
    )
  };

  const wrapper = mount(<Accordion {...defaultProps} />);

  it('should render without error', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render a title', () => {
    expect(wrapper.find('.ac-accordion__title')).toBeTruthy();
    expect(wrapper.find('.ac-accordion__title').text()).toEqual(
      defaultProps.title
    );
  });

  describe('When accordion is closed', () => {
    it('should render child content when clicking on Accordion wrapper', () => {
      wrapper.find('.ac-accordion__wrapper').simulate('click');
      expect(wrapper.find('ac-according__content')).toBeTruthy();
    });
  });

  describe('When accordion is opened', () => {
    beforeEach(() => {
      wrapper.setProps({ isOpen: true });
      wrapper.update();
    });

    it('should render accordion children content', () => {
      expect(wrapper.find('ac-according__content')).toBeTruthy();
    });
  });
});
