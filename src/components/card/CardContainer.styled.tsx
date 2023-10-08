import styled from "styled-components";
import {theme} from "../../styles/Theme.styled";

export const CardContainer = styled.div`
  width: 300px;
  height: 350px;
  border-radius: 15px;
  background-color: ${theme.colors.secondary};
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
`