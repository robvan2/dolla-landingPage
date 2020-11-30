import React from 'react'
import { CloseIcon, Icon, SideBarBtnWrap, SideBarContainer, SideBarLink, SideBarMenu, SideBarRoute, SideBarWrapper } from './sidebar.elements'

function sideBar({ isOpen, toggle }) {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="about" onClick={toggle}>
                        Aboout
                    </SideBarLink>
                    <SideBarLink to="discover" onClick={toggle}>
                        Discover
                    </SideBarLink>
                    <SideBarLink to="services" onClick={toggle}>
                        Services
                    </SideBarLink>
                    <SideBarLink to="signup" onClick={toggle}>
                        Sign Up
                    </SideBarLink>
                </SideBarMenu>
                <SideBarBtnWrap>
                    <SideBarRoute to="/signin">
                        Sign In
                    </SideBarRoute>
                </SideBarBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default sideBar
