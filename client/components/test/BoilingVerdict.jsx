// @flow
import React from 'react';

export default function BoilingVerdict(props: Object) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}