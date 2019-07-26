// @flow
import React from 'react';
import moment from 'moment';
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather';
import AlternatingText from '../../AlternatingText';
import './CustomHeader.scss';

type Props = {
  /** Prop injected in by react-datepicker. */
  date: Date,
  /** Prop injected in by react-datepicker. */
  decreaseMonth: boolean,
  /** Prop injected in by react-datepicker. */
  increaseMonth: boolean,
  /** Prop injected in by react-datepicker. */
  prevMonthButtonDisabled: boolean,
  /** Prop injected in by react-datepicker. */
  nextMonthButtonDisabled: boolean
}

const CustomHeader = (props: Props) => {
  const {
    date,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  } = props;

  const month = moment(date).format('MMMM');
  const year = moment(date).format('YYYY');
  const headerText = [month, year].join(' ');

  return (
    <div className="ac-datepicker__header-custom react-datepicker__header-custom--navigation">
      <ArrowLeftCircle
        className="feather-24 arrow-hover-effect clickable primary-stroke"
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
        title="Previous Month"
      />
      <AlternatingText text={headerText} As="div" separator="&nbsp;" />
      <ArrowRightCircle
        className="feather-24 arrow-hover-effect clickable primary-stroke"
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
        title="Next Month"
      />
    </div>
  );
};

CustomHeader.displayName = 'CustomHeader';

export default CustomHeader;
