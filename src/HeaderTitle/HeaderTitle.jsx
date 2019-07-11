// @flow
import React from 'react';
import AlternatingText from '../AlternatingText';

type Props = {
  /** Header text. */
  text: string,
  /** Array of classNames to add to the component. */
  classList?: Array<string>,
};

const HeaderTitle = (props: Props) => {
  const { text, classList } = props;

  return (
    <AlternatingText text={text} As="h2" classList={classList} />
  );
};

HeaderTitle.defaultProps = {
  classList: [],
};

export default HeaderTitle;
