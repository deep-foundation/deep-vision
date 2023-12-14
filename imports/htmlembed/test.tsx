import React from 'react';
import useTimer from './timer';

export default function Test() {
  const seconds = useTimer();

  return (
    <div style={{ width: 100, height: 50, background: "red" }} >{seconds}</div>
  );
}