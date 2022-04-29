import React from 'react'
import Icon1 from '../images/signup.svg'
import Icon2 from '../images/voffice.svg'
import Icon3 from '../images/benefits.svg'
import {
    ServicesContainer,
    ServicesH1,
    ServicesCard,
    ServicesWrapper,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './CompanyElements'

const Services = () => {
    return (
        <>
            <ServicesContainer id='company'>
                <ServicesH1>Nossos Princípios</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Missão</ServicesH2>
                        <ServicesP>Fornecer o melhor negócio sustentável, eficiente e eficaz através de um plano de negócio estratégico estruturado nos mercados nacional e internaciona</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>Melhoria Contínua</ServicesH2>
                        <ServicesP>Visando resultados e processos cada vez melhores, temos como cultura a melhoria contínua baseada em uma estrutura de gerenciamento de processos de negócios - BPM (Business Process Management).</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>Foco</ServicesH2>
                        <ServicesP>Sempre nas necessidades do cliente.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Visão</ServicesH2>
                        <ServicesP>Ser a melhor empresa de consultoria empresarial internacional e nacional.</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
