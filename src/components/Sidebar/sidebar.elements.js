import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const SideBarContainer = styled.aside`
    position : fixed;
    z-index : 999;
    width : 100%;
    height: 100%;
    background-color : #0d0d0d;
    display : grid;
    align-items : center;
    left : 0;
    transition : 0.3s ease-in-out;
    opacity : ${({ isOpen }) => isOpen ? '1' : '0'};
    top : ${({ isOpen }) => isOpen ? '0' : '-100%'};
`
export const CloseIcon = styled(FaTimes)`
    color: #fff;
`
export const Icon = styled.div`
    position : absolute;
    top : 1.2rem;
    right : 1.5rem;
    background : transparent;
    font-size : 2rem;
    cursor : pointer;
    outline: none;
`
export const SideBarWrapper = styled.div`
    color: #fff;
`
export const SideBarMenu = styled.ul`
    display:grid;
    grid-template-columns : 1fr;
    grid-template-rows : repeat(6 , 80px);
    text-align : center;
    @media screen and (max-width : 480px){
        grid-template-rows : repeat(6 , 60px)
    }
`
export const SideBarLink = styled(LinkS)`
    display:flex;
    justify-content : center;
    align-items : center;
    font-size:1.5rem;
    text-decoration : none;
    list-style : none;
    transition: 0.2s ease-in-out;
    color : #fff;
    cursor : pointer;
    
    &:hover{
        color: #01bf71;
        transition : 0.2s ease-in-out
    }
`
export const SideBarBtnWrap = styled.div`
    display:flex;
    justify-content:center;
`
export const SideBarRoute = styled(LinkR)`
    border-radius: 50px;
    background-color : #01bf71;
    white-space: nowrap;
    padding : 16px 24px;
    color: #010606;
    outline : none;
    border : none;
    font-size : 16px;
    cursor: pointer;
    text-decoration:none;
    transition : all 0.4s ease-in-out;

    &:hover{
        background-color : #fff;
    }
`