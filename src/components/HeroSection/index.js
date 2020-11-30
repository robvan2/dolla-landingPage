import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../Button.element'
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './Hero.elements'

function HeroSection() {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Virtual Banking Made Easy
                </HeroH1>
                <HeroP>
                    Sign up for a new account today and recieve $250 in
                    credit towards your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary={'true'}
                        dark={'true'}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                    >
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
