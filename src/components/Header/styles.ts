import styled from "@emotion/styled";
import { colors } from "../../scss/theme/variables";

const Container = styled.h1`
  padding: 8px 20px;
  background-color: ${colors.purple};
  color: ${colors.white};
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 2px;
  margin: 0 -15px;
`;

export const Styled = {
  Container,
};
