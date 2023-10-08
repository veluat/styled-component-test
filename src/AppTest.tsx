import {Menu} from "./components/Menu.styled";
import {StyledBtn, SuperBtn} from "./components/Button.styled";
import {Link} from "./components/Link.styled";
import {theme} from "./styles/Theme.styled";
import React from "react";
import styled from "styled-components";

export function AppTest() {
    return (
        <div className="App">
            <Menu>
                <ul>
                    <li><a href="#">menu item 1</a></li>
                    <li><a href="#">menu item 2</a></li>
                    <li><a href="#">menu item 3</a></li>
                </ul>
            </Menu>
            <Box>
                <StyledBtn as={Link} href={"#"}>LinkComponent</StyledBtn>
                <StyledBtn as={"a"} href={"#"}>Link</StyledBtn>
                <StyledBtn color="bisque">Hello</StyledBtn>
                <StyledBtn color={theme.colors.primary} btnType={"primary"} active>Hello</StyledBtn>
                <StyledBtn color={theme.colors.secondary} btnType={"outlined"}>Hello</StyledBtn>
                <SuperBtn>SuperBtn</SuperBtn>
            </Box>
        </div>
    );
}

const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }
  
  @media ${theme.media.tablet} {
    flex-directions: column;
  }
`