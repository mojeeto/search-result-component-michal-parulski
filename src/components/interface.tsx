import React from 'react';


export interface KeyShapeProps {
  character: string;
}

export interface CustomTextProps {
  children: React.ReactNode;
  className?: string;
  tagContent?: string;
  onClick?: React.MouseEventHandler;
}
