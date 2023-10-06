import styled from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

export const StyledBtn = styled.button`
  border: none;
  background-color: #e06363;
  padding: 10px 20px;
  color: #111111;
  font-size: 2rem;
  font-weight: bold;

  &:hover {
    background-color: #4a934a;
  }

  &:last-child {
    background-color: #13b2c0;
  }
`
export const SuperBtn = styled(StyledBtn)`
  border-radius: 5px;
  background-color: #2d6782;
  color: snow;
  
  &:hover {
    animation: ${MyAnimation} 2s ease-in-out;
  }
`