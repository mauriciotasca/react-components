import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import './accordion.scss';

type Props = {
  /** Accordion header title. */
  title: string,
  /** Accordion HTML content. */
  content: any,
  /** String className or Array of String classNames to be applied to the accordion component. */
  classList?: string | Array<string>,
  /** React component to display as icon. Default is a ChevronDown icon. */
  accordionOpenedIcon?: React.Element,
  /** React component to display as icon. Default is a ChevronUp icon. */
  accordionClosedIcon?: React.Element,
  /** Boolean property that defines with the Accordion is opened or collapsed when mounted */
  isOpen?: boolean,
};

const TRANSITION_TIMEOUT = 600;

const Accordion = (props: Props) => {
  const {
    title,
    content,
    classList,
    accordionOpenedIcon,
    accordionClosedIcon,
    isOpen
  } = props;
  const [open, setOpen] = useState(isOpen);
  const handleClick = () => setOpen(!open);

  return (
    <div className={classNames('ac-accordion', classList)}>
      <div
        className="d-inline-flex align-items-center ac-accordion__wrapper"
        onClick={handleClick}
        onKeyDown={handleClick}
        role="presentation"
      >
        {open && accordionOpenedIcon}
        {!open && accordionClosedIcon}

        <h4 className="ml-2 text-gray-darker ac-accordion__title">{title}</h4>
      </div>

      <CSSTransition
        in={open}
        unmountOnExit
        timeout={TRANSITION_TIMEOUT}
        classNames="accordion-animation"
      >
        {content}
      </CSSTransition>
    </div>
  );
};

Accordion.defaultProps = {
  classList: '',
  accordionOpenedIcon: <ChevronUp className="feather-24" />,
  accordionClosedIcon: <ChevronDown className="feather-24" />,
  isOpen: false
};

Accordion.displayName = 'Accordion';

export default Accordion;
