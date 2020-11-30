import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './Services.elements'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
function Services() {
    return (
        <div>
            <ServicesContainer id="services">
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>
                            Reduce expenses
                    </ServicesH2>
                        <ServicesP>
                            We help reduce your fees and increase your overall revenue.
                    </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>
                            Virtual offices
                    </ServicesH2>
                        <ServicesP>
                            You can access our platform anyware in the world.
                    </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>
                            Premium Benefits
                    </ServicesH2>
                        <ServicesP>
                            Unlock our special member carg that returns 5% of cash back.
                    </ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </div>
    )
}

export default Services
