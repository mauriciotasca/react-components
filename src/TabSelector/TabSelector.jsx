import React from 'react';
import './TabSelector.scss';

type Props = {
  /** Array of React Component to load the `nav-items` inside `nav-tabs` element */
  tabItems: Array<React.Component>,
  /** Boolean to show or not the animation of tab transition. */
  hasTabTransitionAnimation?: Boolean
};

const TabSelector = (props: Props) => {
  const { tabItems, hasTabTransitionAnimation } = props;

  const indexOfActiveTab = tabItems.findIndex(
    tab => tab.props.className.indexOf('active') !== -1
  );
  const maxTransform = (tabItems.length - 1) * 100;
  const transformPosition = maxTransform - 100 * indexOfActiveTab;
  const widthBar = 100 / tabItems.length;

  /**
   * The Style of tab Animation (current-segment) depends of the quantity of tab.
   * And it needs to know how the tab is activated.
   */
  const tabAnimationStyle = {
    width: `${widthBar}%`,
    transform: `translateX(-${transformPosition}%)`
  };

  return (
    <div
      className="ac-tab-selector nav nav-tabs position-relative d-flex justify-content-end"
      role="tablist"
    >
      {tabItems.map(tabItem => (
        <div
          className="nav-item text-center text-uppercase font-weight-bold"
          key={tabItem.key}
        >
          {tabItem}
        </div>
      ))}

      {hasTabTransitionAnimation && (
        <div className="current-segment" style={tabAnimationStyle} />
      )}
    </div>
  );
};

TabSelector.defaultProps = {
  hasTabTransitionAnimation: true
};

export default TabSelector;
