import styled from "styled-components";
import img from "../assets/images/Rectangle.svg"

export const Image = styled.div`
    background-image: url('${img}');
    width: 280px;
    height: 170px;
    margin: 10px;
    transition: transform 0.3s ease;
    
    &:hover {
        transform: scale(4);
    }
`