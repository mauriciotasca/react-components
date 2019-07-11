import React from 'react';
import { shallow } from 'enzyme';
import AlternatingText from './AlternatingText';

describe('Component', () => {
  const textString = '里îßPseudo language is preferred in tests里îß';
  const boldClass = 'font-weight-bold';
  const lightClass = 'font-weight-light';
  const tagNames = ['h5', 'h2', 'h3', 'div', 'p'];
  const defaultClassName = 'alternating-text';
  const defaultProps = {
    text: textString,
    isReversed: false,
    As: 'h1',
  };
  const wrapper = shallow(<AlternatingText {...defaultProps} />);

  it('should render without error', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render as the element specified in prop As', () => {
    tagNames.forEach((tagName) => {
      wrapper.setProps({ As: tagName });
      expect(wrapper.type()).toEqual(tagName);
    });
  });

  it('should have a default className', () => {
    expect(wrapper.prop('className')).toContain(defaultClassName);
  });

  it('should have additional classNames when passed in a classList', () => {
    const classList = ['custom', 'custom-text'];
    const props = { classList };

    wrapper.setProps({ ...props });

    classList.forEach((className) => {
      expect(wrapper.prop('className')).toContain(className);
    });
  });

  it('should split text styling at the specified location', () => {
    const splitAt = 3;
    const textArray = textString.split(' ');
    const first = textArray.slice(0, splitAt).join(' ').concat(' ');
    const rest = textArray.slice(splitAt).join(' ');

    wrapper.setProps({ splitAt });
    const boldText = wrapper.find('span').first().text();
    const lightText = wrapper.find('span').last().text();

    expect(boldText).toEqual(first);
    expect(lightText).toEqual(rest);
  });

  describe('When passed in text', () => {
    const textArray = textString.split(' ');
    const firstWord = textArray[0].concat(' ');
    const rest = textArray.slice(1).join(' ');

    describe('and isReversed is false and splitAt is 1', () => {
      beforeEach(() => {
        wrapper.setProps({ isReversed: false, splitAt: 1 });
      });

      it('should render the first word with bold font weight', () => {
        const span = wrapper.find('span').first();

        expect(span.text()).toEqual(firstWord);
        expect(span.hasClass(boldClass)).toBeTruthy();
      });

      it('should render all remaining text with light font weight', () => {
        const span = wrapper.find('span').last();

        expect(span.text()).toEqual(rest);
        expect(span.hasClass(lightClass)).toBeTruthy();
      });
    });

    describe('and isReversed is true and splitAt is 1', () => {
      beforeEach(() => {
        wrapper.setProps({ isReversed: true, splitAt: 1 });
      });

      it('should render the first word with bold font weight', () => {
        const span = wrapper.find('span').first();

        expect(span.text()).toEqual(firstWord);
        expect(span.hasClass(lightClass)).toBeTruthy();
      });

      it('should render all remaining text with light font weight', () => {
        const span = wrapper.find('span').last();

        expect(span.text()).toEqual(rest);
        expect(span.hasClass(boldClass)).toBeTruthy();
      });
    });
  });
});
