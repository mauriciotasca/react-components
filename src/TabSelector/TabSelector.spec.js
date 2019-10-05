import React from 'react';
import { mount } from 'enzyme';
import TabSelector from './TabSelector';

const NAV_SELECTOR = '.ac-tab-selector.nav';
const NAV_ITEMS_SELECTOR = '.nav-item';
const DIV_TAB_TRANSITION_ANIMATION = '.current-segment';
const HOME_TAB = '.nav-item #home';
const PROFILE_TAB = '.nav-item #home';
const ACTIVE_CLASS = 'active';

const defaultProps = {
  tabItems: []
};

describe('Tab Selector Component', () => {
  const wrapper = mount(<TabSelector {...defaultProps} />);

  it('should render without error', () => {
    expect(wrapper).toBeTruthy();
  });
});

describe('When Tab Selector is rendered with tab items', () => {
  const tabItemsData = [
    {
      id: 'home',
      path: '#nav-home',
      label: 'Home',
      content: (
        <div>
          <h2>Home Content</h2>
        </div>
      )
    },
    {
      id: 'profile',
      path: '#nav-profile',
      label: 'Profile',
      content: (
        <div>
          <h2>Profile Content</h2>
        </div>
      )
    },
    {
      id: 'contact',
      path: '#nav-contact',
      label: 'Contact',
      content: (
        <div>
          <h2>Contact Content</h2>
        </div>
      )
    }
  ];

  let currentTab = tabItemsData[0].id;

  const tabItems = tabItemsData.map(tabData => (
    <a
      className={`nav-link ${currentTab === tabData.id ? 'active' : ''}`}
      id={tabData.id}
      key={tabData.id}
      data-toggle="tab"
      href={tabData.path}
      role="tab"
      onClick={() => {
        currentTab = tabData.id;
      }}
    >
      {tabData.label}
    </a>
  ));

  defaultProps.tabItems = tabItems;

  const wrapper = mount(<TabSelector {...defaultProps} />);

  it('should contain a nav element', () => {
    expect(wrapper.find(NAV_SELECTOR)).toHaveLength(1);
  });

  it('should contain a nav list when passed in naviagtaion items', () => {
    expect(wrapper.find(NAV_ITEMS_SELECTOR).length).toEqual(tabItems.length);
  });

  it('should contain a div element with class "current-segment"', () => {
    expect(wrapper.find(DIV_TAB_TRANSITION_ANIMATION)).toHaveLength(1);
  });

  it('the first tab should contain the "active" class before any tab interaction', () => {
    expect(wrapper.find(HOME_TAB).prop('className')).toContain(ACTIVE_CLASS);
  });

  it('the active class should change to the clicked tab', () => {
    wrapper.find(PROFILE_TAB).simulate('click');
    expect(wrapper.find(HOME_TAB).prop('className')).toContain(ACTIVE_CLASS);
  });

  it('should not exist the div elment with class "current-segment" when tab transition animation is disabled', () => {
    const hasTabTransitionAnimation = false;

    wrapper.setProps({ hasTabTransitionAnimation });

    expect(wrapper.find(DIV_TAB_TRANSITION_ANIMATION).length).toEqual(0);
  });
});
