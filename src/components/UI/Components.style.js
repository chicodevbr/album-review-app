import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Text,
  Grid,
  Spinner,
  Nav,
  Button,
  Main,
  Paragraph,
} from 'grommet';
import styled from 'styled-components';

export const StyledBox = styled(Box)``;

export const StyledCard = styled(Card)`
  width: 200px;
  height: 280px;
  margin-top: 15px;
  margin-bottom: 15px;
  cursor: pointer;
`;

export const StyledButton = styled(Button)``;

export const StyledCardBody = styled(CardBody)``;

export const StyledGrid = styled(Grid)``;

export const StyledHeading = styled(Heading)``;

export const StyledImage = styled(Image)``;

export const StyledParagraph = styled(Paragraph)``;

export const StyledMain = styled(Main)``;

export const StyledNav = styled(Nav)``;

export const StyledTextEllipsis = styled(Text)`
  white-space: nowrap;
  width: 170px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledText = styled(Text)``;

export const StyledSpinner = styled(Spinner)``;

export const StyledWrap = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
`;
