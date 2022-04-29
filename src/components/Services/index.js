import React from 'react'
import Icon1 from '../../images/signup.svg'
import Icon2 from '../../images/voffice.svg'
import Icon3 from '../../images/benefits.svg'
import {
  ServicesContainer,
  ServicesH1,
  ServicesCard,
  ServicesWrapper,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements'

const Services = () => {
  return (
    <>
      <ServicesContainer id='services'>
        <ServicesH1>Entregáveis</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Alinhamento de estratégia e objetivos</ServicesH2>
            <ServicesP>lorem ipsum</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Business Case</ServicesH2>
            <ServicesP>lorem ipsum.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Criação de Corporações</ServicesH2>
            <ServicesP>lorem ipsum</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Negócios Sustentáveis</ServicesH2>
            <ServicesP>lorem ipsum</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Fusões e Aquisições - (M & A)</ServicesH2>
            <ServicesP>lorem ipsum</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  )
}

export default Services
