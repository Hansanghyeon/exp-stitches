import React from 'react';
import { Rnd } from 'react-rnd';

interface RndDivProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}
const RndDiv = ({ children, style, ...props }: RndDivProps) => {
  return (
    <Rnd style={{
      ... {
        border: "3px dotted yellow",
        boxSizing: "border-box",
        overflow: "hidden",
      },
      ...style
    }} disableDragging={true} {...props} >
      {children}
    </Rnd>
  )
}
export default RndDiv;
