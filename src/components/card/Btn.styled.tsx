import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme.styled";

type BtnPropsType = {
    btnType?: "primary" | "secondary"
}
export const Btn = styled.button<BtnPropsType>`
  width: 86px;
  height: 30px;
  font-size: 10px;
  font-weight: 700;
  line-height: 20px;
  font-family: Inter, sans-serif;
  border-radius: 5px;
  
  ${props => props.btnType === "primary" && css<BtnPropsType>`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.secondary};
    border: none;
  `}

  ${props => props.btnType === "secondary" && css<BtnPropsType>`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.primary};
    border: 2px solid ${theme.colors.primary};
  `}
  `