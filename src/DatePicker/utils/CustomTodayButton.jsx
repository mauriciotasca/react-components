// @flow
import React from 'react';
import Button from '../../Button';

type Props = {
  /** String, or FormattedMessage to display as Button text. */
  children: React.Element,
};

const CustomTodayButton = (props: Props) => (
  <Button classList={['ac-datepicker__btn-custom', 'btn', 'btn-sm', 'btn-primary']}>{props.children}</Button>
);

CustomTodayButton.displayName = 'CustomTodayButton';

export default CustomTodayButton;
