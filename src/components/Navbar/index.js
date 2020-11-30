import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { MobileIcon, Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLink, NavBtn, NavBtnLink } from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll'
const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
        return () => {
            window.removeEventListener('scroll', changeNav);
        }
    }, [])
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo onClick={toggleHome}>
                            dolla
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLink to="about"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                >
                                    About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="discover"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'>
                                    Discover
                                 </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="services"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'>
                                    Services
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="signup"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'>
                                    Sign Up
                                </NavLink>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to="/signin">
                                Sign In
                            </NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
