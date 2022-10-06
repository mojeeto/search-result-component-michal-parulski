import React from "react";

export interface IconProps<T = HTMLElement> {
  className?: string;
  onClick?: React.MouseEventHandler<T>;
}

export interface KeyShapeProps {
  character: string;
}

export interface CustomTextProps {
  children: React.ReactNode;
  childrenClassName?: string;
  className?: string;
  tagContent?: React.ReactNode;
  onClick?: React.MouseEventHandler;
}
