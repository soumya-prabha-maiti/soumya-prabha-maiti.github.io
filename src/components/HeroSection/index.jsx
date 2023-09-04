import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, HeroSocialMediaIcons, HeroSocialMediaIcon } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    {/* <HeroBgAnimation /> */}
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>{Bio.name}</Title>
                        {/* <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop> */}
                        <SubTitle>{Bio.description}</SubTitle>
                        
                        <HeroSocialMediaIcons>
                            <HeroSocialMediaIcon href={Bio.linkedin} target="_blank"><LinkedInIcon /></HeroSocialMediaIcon>
                            <HeroSocialMediaIcon href={Bio.github} target="_blank"><GitHubIcon /></HeroSocialMediaIcon>
                            <HeroSocialMediaIcon href={Bio.email} target="_blank"><EmailIcon /></HeroSocialMediaIcon>
                        </HeroSocialMediaIcons>

                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>


            </HeroContainer>
        </div>
    )
}

export default HeroSection