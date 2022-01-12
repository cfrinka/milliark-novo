import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIconLink,
  SocialIcons
} from './FooterElements'

const toggleHome = () => {
  scroll.scrolltoTop();
}

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                  <FooterLink to="/signin">How it works</FooterLink>
                  <FooterLink to="/signin">Testimonials</FooterLink>
                  <FooterLink to="/signin">Careers</FooterLink>
                  <FooterLink to="/signin">Investors</FooterLink>
                  <FooterLink to="/signin">Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                  <FooterLink to="/signin">How it works</FooterLink>
                  <FooterLink to="/signin">Testimonials</FooterLink>
                  <FooterLink to="/signin">Careers</FooterLink>
                  <FooterLink to="/signin">Investors</FooterLink>
                  <FooterLink to="/signin">Terms of Service</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                  <FooterLink to="/signin">How it works</FooterLink>
                  <FooterLink to="/signin">Testimonials</FooterLink>
                  <FooterLink to="/signin">Careers</FooterLink>
                  <FooterLink to="/signin">Investors</FooterLink>
                  <FooterLink to="/signin">Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                  <FooterLink to="/signin">How it works</FooterLink>
                  <FooterLink to="/signin">Testimonials</FooterLink>
                  <FooterLink to="/signin">Careers</FooterLink>
                  <FooterLink to="/signin">Investors</FooterLink>
                  <FooterLink to="/signin">Terms of Service</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo 
              to='/'
              onClick={toggleHome}>
                dolla
              </SocialLogo>
              <WebsiteRights>dolla © {new Date().getFullYear()}
              All rights reserved</WebsiteRights>
              <SocialIcons>
                <SocialIconLink href='//www.facebook.com' target='_blank' aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href='//www.instagram.com' target='_blank' aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href='//www.twitter.com' target='_blank' aria-label="Twitter">
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href='//www.linkedin.com' target='_blank' aria-label="LinkedIn">
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  )
}

export default Footer
