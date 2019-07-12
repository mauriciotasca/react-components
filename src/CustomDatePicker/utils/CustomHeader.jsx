// @flow
import React from 'react';
import moment from 'moment';
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather';
import AlternatingText from '../../AlternatingText';
import './CustomHeader.scss';

type Props = {
  /** Props injected in by react-datepicker. */
  date: Date,
  decreaseMonth: boolean,
  increaseMonth: boolean,
  prevMonthButtonDisabled: boolean,
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
    <div className="react-datepicker__header-custom--navigation">
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

export default CustomHeader;
