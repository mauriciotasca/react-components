// @flow
import * as React from 'react';
import './style.scss';

type Props = {
  /** String, or FormattedMessage to display as Subheading */
  title: React.Element,
  content?: React.Element,
}

const Subheader = (props: Props) => {
  const {
    title,
    content,
  } = props;

  return (
    <div className="subheader-wrapper">
      <div className="subheader subheader-section">
        <h3>
          { title }
        </h3>
      </div>
      { content &&
        <div className="subheader subheader-content">
          {content}
        </div>
      }
    </div>
  );
};

Subheader.defaultProps = {
  content: null,
};

export default Subheader;
