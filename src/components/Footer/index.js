import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterLink, FooterLinksContainer, FooterLinkItems, FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialMedia, SocialLogo, SocialMediaWrap, WebsiteRights, SocialIcons, SocialIconLink } from './Footer.elements'
import { animateScroll as scroll } from 'react-scroll'
function Footer() {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <div>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>
                                    About Us
                                </FooterLinkTitle>
                                <FooterLink to='/'>How it works</FooterLink>
                                <FooterLink to='/'>Testimonials</FooterLink>
                                <FooterLink to='/'>Careers</FooterLink>
                                <FooterLink to='/'>Investors</FooterLink>
                                <FooterLink to='/'>Terms of Service</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>
                                    Contact Us
                                </FooterLinkTitle>
                                <FooterLink to='/'>Contact</FooterLink>
                                <FooterLink to='/'>Support</FooterLink>
                                <FooterLink to='/'>Destinations</FooterLink>
                                <FooterLink to='/'>Sponsorship</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>
                                    Videos
                                </FooterLinkTitle>
                                <FooterLink to='/'>Submit Video</FooterLink>
                                <FooterLink to='/'>Ambassadors</FooterLink>
                                <FooterLink to='/'>Agency</FooterLink>
                                <FooterLink to='/'>Influencer</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>
                                    Social Media
                                </FooterLinkTitle>
                                <FooterLink to='/'>Facebook</FooterLink>
                                <FooterLink to='/'>Instagram</FooterLink>
                                <FooterLink to='/'>Youtube</FooterLink>
                                <FooterLink to='/'>Twitter</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo onClick={toggleHome}>
                                dolla
                            </SocialLogo>
                            <WebsiteRights>
                                dolla © {new Date().getFullYear()} All rights reserved.
                            </WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink to="/" target='_blank' aria-label='Facebook'>
                                    <FaFacebook></FaFacebook>
                                </SocialIconLink>
                                <SocialIconLink to="/" target='_blank' aria-label='Instagram'>
                                    <FaInstagram></FaInstagram>
                                </SocialIconLink>
                                <SocialIconLink to="/" target='_blank' aria-label='Youtube'>
                                    <FaYoutube></FaYoutube>
                                </SocialIconLink>
                                <SocialIconLink to="/" target='_blank' aria-label='Twitter'>
                                    <FaTwitter></FaTwitter>
                                </SocialIconLink>
                                <SocialIconLink to="/" target='_blank' aria-label='LinkedIn'>
                                    <FaLinkedin></FaLinkedin>
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </div>
    )
}

export default Footer
