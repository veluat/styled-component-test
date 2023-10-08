import styled, {css} from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    btnType?: "primary" | "outlined"
    active?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 2rem;
  font-weight: bold;

  &:hover {
    background-color: #4a934a;
  }

  &:last-child {
    background-color: #13b2c0;
  }

  ${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
    border: 2px solid ${props => props.color || "coral"};
    border-radius: 2px;
    color: ${props => props.color || "coral"};
    background-color: transparent;

    &:hover {
      border-color: #4a934a;
      color: #4a934a;
      background-color: transparent;
    }
  `}

  ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
    background-color: ${props => props.color || "coral"};
    color: #111111;
  `}
  ${props => props.active && css<StyledBtnPropsType>`
    box-shadow: 5px 5px 5px 5px rgba(255, 250, 250, 0.59);
  `}
`

  export const SuperBtn = styled(StyledBtn)`
  border-radius: 5px;
  background-color: #2d6782;
  color: snow;
  
  &:hover {
    animation: ${MyAnimation} 2s ease-in-out;
  }
`