import 'aframe-htmlembed-component';
import React, { useEffect, useRef } from 'react';
import ReactDOMServer from 'react-dom/server';
import { Entity } from 'aframe-react';
import { v4 as uuidv4 } from 'uuid';
import useTimer from './timer';

export default function AframeEmbedded({ children, position }) {
  const seconds = useTimer();
  const ref = useRef(null);
  const id = useRef(uuidv4());

  useEffect(() => {
    if (ref.current) {
      // Convert the JSX component to an HTML string
      // @ts-ignore
      ref.current.innerHTML = ReactDOMServer.renderToString(children);
    }
  }, [children]);

  return (
    <Entity position={position} htmlembed={{ target: `#${id.current}`}}>
      <div id={id.current} ref={ref}>{seconds}</div>
    </Entity>
  );
}