// @flow
import React from 'react';
import classNames from 'classnames';
import AlternatingText from '../AlternatingText';

type Props = {
  /** Header text. */
  text: string,
  /** String className or Array of String classNames to add to the component. */
  classList?: string | Array<string>,
};

const HeaderTitle = (props: Props) => {
  const { text, classList, ...rest } = props;

  return (
    <AlternatingText
      text={text}
      As="h2"
      classList={classNames('ac-header-title', classList)}
      {...rest}
    />
  );
};

HeaderTitle.defaultProps = {
  classList: '',
};

HeaderTitle.displayName = 'HeaderTitle';

export default HeaderTitle;
