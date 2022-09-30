import React from "react";

export interface IconProps {
  className?: string;
}

export interface KeyShapeProps {
  character: string;
}

export interface CustomTextProps {
  children: React.ReactNode;
  className?: string;
  tagContent?: React.ReactNode;
  onClick?: React.MouseEventHandler;
}
