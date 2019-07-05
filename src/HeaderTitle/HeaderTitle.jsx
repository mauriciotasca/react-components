// @flow
import React from 'react';
import './HeaderTitle.scss';

type Props = {
  titleText: string
};

const getSplittedText = (titleText) => {
  let titleTextArray = [];
  if (titleText.length > 0) {
    titleTextArray = titleText.split(' ');
  }

  const firstWord = titleTextArray.slice(0, 1);
  const secondWord = titleTextArray.slice(1, titleTextArray.length);
  let rest = '';
  if (secondWord.length > 0) {
    rest = secondWord.join(' ');
  }

  return {
    firstWord,
    rest,
  };
};

const HeaderTitle = (props: Props) => {
  const { titleText } = props;
  const { firstWord, rest } = getSplittedText(titleText);

  return (
    <h2 className="font-weight-black">
      {firstWord}
      &nbsp;
      <span className="font-weight-extra-light">
        {rest}
      </span>
    </h2>
  );
};

export default HeaderTitle;
