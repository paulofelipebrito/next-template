import * as Styled from './styles';
import React from 'react';

export type HeadingProps = {
  children: React.ReactNode | string;
};

export const Heading = (props: HeadingProps) => {
  return <Styled.Title>{props.children}</Styled.Title>;
};
