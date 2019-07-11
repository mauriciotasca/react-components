// @flow
import * as React from 'react';
import classNames from 'classnames';
import './style.scss';

type Props = {
  /** String to convert to alternating text. */
  text: string,
  /** Location where to split the styling for the text. 1 corresponds to the first word,
   * 2 to the second word, and so on. */
  splitAt?: number,
  /** Return type for the component. Should be valid DOM tag names. Ex: `h1`, `h3`, `div`, etc. */
  As?: string,
  /** If set to `true`, component styling is reversed. */
  isReversed?: boolean,
  /** Additional classNames to add to the component. */
  classList?: Array<string>,
};

const AlternatingText = (props: Props) => {
  const {
    text,
    splitAt,
    isReversed,
    classList,
    As,
  } = props;
  const textArray = text.split(' ');
  const first = textArray.slice(0, splitAt).join(' ').concat(' ');
  const rest = textArray.slice(splitAt).join(' ');

  return (
    <As className={classNames('alternating-text', classList)}>
      <span className={`font-weight-${isReversed ? 'light' : 'bold'}`}>{first}</span>
      <span className={`font-weight-${isReversed ? 'bold' : 'light'}`}>{rest}</span>
    </As>
  );
};

AlternatingText.defaultProps = {
  As: 'h1',
  splitAt: 1,
  isReversed: false,
  classList: [],
};

export default AlternatingText;
