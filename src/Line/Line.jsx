import React, { useState } from 'react';
import './Line.scss';
import classnames from 'classnames';

type Props = {
  /** If true the percentage will be showed */
  showPercentage: Boolean,
  /** The color of tooltip and line */
  color: String,
  /** The width of the line */
  percentage: String,
  /** Text that will be showed on tooltip */
  moodText: String,
  /** Key of the object */
  lowerCaseText: String
};

const Line = ({
  color,
  percentage,
  moodText,
  lowerCaseText,
  showPercentage
}: Props) => {
  const [showTooltip, toggleTooltip] = useState(false);
  const tooltipClassNames = () => classnames([
      [color, 'position-absolute', 'solid', 'w-auto', 'pl-3', 'pr-3'],
      { 'visible open': showTooltip },
      { invisible: !showTooltip }
    ]);
  const lineClassNames = () => classnames([
      [
        color,
        'mood-line',
        'position-relative',
        'd-inline-block',
        'mb-3',
        'progress-bar'
      ]
    ]);
  return (
    <div
      className={lineClassNames()}
      style={{ width: `${percentage}%` }}
      onFocus={() => toggleTooltip(true)}
      onMouseOver={() => {
        toggleTooltip(true);
      }}
      onMouseLeave={() => toggleTooltip(false)}
      key={lowerCaseText}
      role="progressbar"
      tabIndex="0"
    >
      {showPercentage === true && (
        <div className={tooltipClassNames()}>
          {percentage}% {moodText}
        </div>
      )}
    </div>
  );
};
export default Line;
