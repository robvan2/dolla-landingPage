import { Link } from "react-scroll";
import styled from "styled-components";

export const Button = styled(Link)`
    border-radius:50px;
    background: ${({ primary }) => (primary ? '#01bf71' : '#010606')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size : ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline : none;
    border:none;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    transition : all 0.3s ease-in-out;

    &:hover {
        background: ${({ primary }) => (primary ? '#fff' : '#01bf71')};
    }
`