import styled from "styled-components";

export const Menu = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;

    li > a {
      color: #d0a301;
    }
    
    li + li {
      margin-left: 20px;
    }
  }
`