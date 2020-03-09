import React, { useEffect, useState } from 'react';
import './MoodLine.scss';

import { Line } from '../Line';

type Props = {
  /** If true the percentage will be showed */
  showPercentage: Boolean,
  /** Percentage of profile's magmooods */
  moodsPercentage: Object
};

class Enum {
  // The Enum class instantiates a JavaScript Proxy object.
  // Instantiating a `Proxy` object requires two parameters,
  // a `target` object and a `handler`. We first define the handler,
  // then use the handler to instantiate a Proxy.

  // A proxy handler is simply an object whose properties
  // are functions which define the behavior of the proxy
  // when an operation is performed on it.

  // For enums, we need to define behavior that lets us check what enumerator
  // is being accessed and what enumerator is being set. This can be done by
  // defining "get" and "set" traps.
  constructor(enumObj) {
    const handler = {
      get(target, name) {
        if (typeof target[name] !== 'undefined') {
          return target[name];
        }
        throw new Error(`No such enumerator: ${name}`);
      },
      set() {
        throw new Error(
          'Cannot add/update properties on an Enum instance after it is defined'
        );
      }
    };

    // Freeze the target object to prevent modifications
    return new Proxy(enumObj, handler);
  }
}

class Mood {
  constructor(
    title: string = 'For You',
    color: string = 'white',
    abbreviation: string = null,
    percentage: Number = 0
  ) {
    this.title = title.charAt(0).toUpperCase() + title.substring(1).toLowerCase();
    this.color = color;
    this.abbreviation = abbreviation || this.title.substring(0, 2);
    this.percentage = percentage;
  }

  title: string;

  color: string;

  abbreviation: string;

  percentage: Number;
}

const MoodColorEnum = new Enum({
  Blue: 'BLUE',
  Green: 'GREEN',
  Brown: 'BROWN',
  Orange: 'ORANGE',
  Red: 'RED',
  Pink: 'PINK',
  Purple: 'PURPLE',
  Gray: 'GRAY'
});

const moods = {
  respect: new Mood('Respect', 'blue', undefined, 20),
  collaboration: new Mood('Collaboration', 'green', undefined, 20),
  integrity: new Mood('Integrity', 'brown', undefined, 10),
  innovation: new Mood('Innovation', 'orange', undefined, 10),
  possibility: new Mood('Possibility', 'red', undefined, 10),
  play: new Mood('Play', 'pink', undefined, 10),
  passion: new Mood('Passion', 'purple', undefined, 10),
  trust: new Mood('Trust', 'gray', undefined, 10)
};

const createColorClass = (color: string) => {
  switch (color.toUpperCase()) {
    case MoodColorEnum.Blue:
      return 'bg-blue';
    case MoodColorEnum.Green:
      return 'bg-green';
    case MoodColorEnum.Brown:
      return 'bg-brown';
    case MoodColorEnum.Orange:
      return 'bg-orange';
    case MoodColorEnum.Red:
      return 'bg-red';
    case MoodColorEnum.Pink:
      return 'bg-pink';
    case MoodColorEnum.Purple:
      return 'bg-purple';
    case MoodColorEnum.Gray:
      return 'bg-gray';
    default:
      return '';
  }
};

const MoodLine = ({ moodsPercentage, showPercentage }: Props) => {
  const [moodsMap, setMoodsMap] = useState([]);
  useEffect(() => {
    if (moodsPercentage) {
      setMoodsMap(
        Object.entries(moods).map(([key, values]: [string, mood]) => ({
          ...values,
          percentage: moodsPercentage[key]
        }))
      );
    }
  }, [moodsPercentage]);

  return (
    <div className="progress w-100 position-absolute h-10">
      {Object.entries(moodsMap).map((currentMagmood: [string, mood]) => {
        const [key, values] = currentMagmood;
        const { color, percentage, title } = values;
        return (
          <Line
            showPercentage={showPercentage}
            color={createColorClass(color)}
            percentage={percentage}
            moodText={title}
            lowerCaseText={key}
            key={key}
          />
        );
      })}
    </div>
  );
};

export default MoodLine;
