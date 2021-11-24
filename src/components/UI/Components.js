import React from 'react';
import {
  StyledBox,
  StyledButton,
  StyledCard,
  StyledCardBody,
  StyledGrid,
  StyledHeading,
  StyledImage,
  StyledNav,
  StyledSpinner,
  StyledText,
} from './Components.style';

export const Box = (props) => {
  return <StyledBox {...props}>{props.children}</StyledBox>;
};

export const Button = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
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

export const Heading = (props) => {
  return <StyledHeading {...props}>{props.children}</StyledHeading>;
};

export const Image = (props) => {
  return <StyledImage {...props}>{props.children}</StyledImage>;
};

export const Nav = (props) => {
  return <StyledNav {...props}>{props.children}</StyledNav>;
};

export const Spinner = (props) => {
  return <StyledSpinner {...props} />;
};

export const Text = (props) => {
  return <StyledText {...props}>{props.children}</StyledText>;
};
