import React from 'react';
import {
  StyledBox,
  StyledCard,
  StyledCardBody,
  StyledGrid,
  StyledImage,
  StyledText,
} from './Components.style';

export const Box = (props) => {
  return <StyledBox {...props}>{props.children}</StyledBox>;
};

export const Card = (props) => {
  return <StyledCard {...props}>{props.children}</StyledCard>;
};

export const CardBody = (props) => {
  return <StyledCardBody {...props}>{props.children}</StyledCardBody>;
};

export const Grid = (props) => {
  return <StyledGrid {...props}>{props.children}</StyledGrid>;
};

export const Image = (props) => {
  return <StyledImage {...props}>{props.children}</StyledImage>;
};

export const Text = (props) => {
  return <StyledText {...props}>{props.children}</StyledText>;
};
