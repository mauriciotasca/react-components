// @flow
import * as React from 'react';
import classNames from 'classnames';

type Props = {
  /** String to convert to alternating text. */
  text: string,
  /** Location where to split the styling for the text. 1 corresponds to the first word,
   * 2 to the second word, and so on. */
  splitAt?: number,
  /** String to separate styled texts. Default is empty String. */
  separator?: string,
  /** Return type for the component. Should be valid DOM tag names. Ex: `h1`, `h3`, `div`, etc. */
  As?: string,
  /** If set to `true`, component styling is reversed. */
  isReversed?: boolean,
  /** Additional classNames to add to the component. */
  classList?: string | Array<string>,
};

const AlternatingText = (props: Props) => {
  const {
    text,
    splitAt,
    separator,
    isReversed,
    classList,
    As,
    ...rest
  } = props;
  const textArray = text.split(' ');
  const first = textArray.slice(0, splitAt).join(' ');
  const remaining = textArray.slice(splitAt).join(' ');

  return (
    <As className={classNames('ac-alternating-text', classList)} {...rest}>
      <span className={`font-weight-${isReversed ? 'light' : 'bold'}`}>{first}</span>
      {separator}
      <span className={`font-weight-${isReversed ? 'bold' : 'light'}`}>{remaining}</span>
    </As>
  );
};

AlternatingText.defaultProps = {
  As: 'h1',
  splitAt: 1,
  isReversed: false,
  classList: '',
  separator: '',
};

AlternatingText.displayName = 'AlternatingText';

export default AlternatingText;
