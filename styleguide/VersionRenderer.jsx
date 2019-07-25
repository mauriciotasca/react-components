// @flow
import React from 'react';
import { AlternatingText } from '../src';

type Props = {
  children: React.Element,
}

const VersionRenderer = (props: Props) => {
  const version = 'v '.concat(props.children);

  return (
    <div className="text-center">
      <AlternatingText text={version} As="small" classList="ac-components-library-version" aria-label="version" />
    </div>
  );
};


export default VersionRenderer;
