import React from 'react'
import { Button, ChatDiv, Download, DownloadSection, DownloadTitle, FooterContainer, Icons, SubContainer } from './FooterStyle'
import { Title } from '../Navbar/NavbarStyle'
import { AiFillApple, AiFillLinkedin, AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'
import { CiTwitter } from 'react-icons/ci'
import { FaFacebookF } from 'react-icons/fa'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { IoLogoGooglePlaystore } from 'react-icons/io5'

function Footer() {
    return (
        <FooterContainer>
            <SubContainer logo>
                <Title>logoipsum</Title>
                <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore </p>
                <Icons>
                    <span><AiOutlineYoutube /></span>
                    <span><AiFillLinkedin /></span>
                    <span><CiTwitter /></span>
                    <span><FaFacebookF /></span>
                    <span><AiOutlineInstagram /></span>
                </Icons>
            </SubContainer>

            <SubContainer>
                <p>Quick Links</p>
                <ul>
                    <li>Products</li>
                    <li>Classifieds</li>
                    <li>Contact us</li>
                    <li>Login</li>
                    <li>Sign Up</li>
                </ul>
            </SubContainer>


            <SubContainer>
                <p>Customer area</p>
                <ul>
                    <li>My Account</li>
                    <li>Orders</li>
                    <li>Tracking List</li>
                    <li>Terms</li>
                    <li>Privacy Policy</li>
                    <li>Return policy</li>
                    <li>My Cart</li>
                </ul>
            </SubContainer>


            <SubContainer>
                <p>Vendor area</p>
                <ul>
                    <li>Partner with us</li>
                    <li>Training</li>
                    <li>Procedures</li>
                    <li>Terms</li>
                    <li>Privacy Policy</li>
                </ul>
            </SubContainer>

            <SubContainer>
                <p>Contact</p>
                <p style={{ textTransform: 'unset', fontSize: '13px', color: '#8D8D8D', fontWeight: '400' }}>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut</p>
                <ChatDiv>
                    <span><TfiHeadphoneAlt size={20} /></span>
                    <div>
                        <p>Have any question?</p>
                        <p style={{ color: '#3187ED' }}>+ 123 456 789</p>
                    </div>
                    <Button>CHAT</Button>
                </ChatDiv>
                <DownloadSection>
                    <Download>
                        <AiFillApple size={30} />
                        <DownloadTitle>
                            <p>Download on the</p>
                            <span>App Store</span>
                        </DownloadTitle>
                    </Download>
                    <Download>
                        <IoLogoGooglePlaystore size={30} />
                        <DownloadTitle>
                            <p>GET IT ON</p>
                            <span>Google Play</span>
                        </DownloadTitle>
                    </Download>
                </DownloadSection>
            </SubContainer>
        </FooterContainer>
    )
}

export default Footer