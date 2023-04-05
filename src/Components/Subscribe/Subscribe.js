import React from 'react'
import { Button, Icon, InputContainer, InputField, MainContainer, Text, TextSection } from './SubscribeStyle'

function Subscribe() {
  return (
    <MainContainer>
      <Icon src='/assets/images/Vector(4).png' />
      <TextSection>
        <p style={{ fontSize: '20px', fontWeight: '700' }}>Sign Up for Newsletter</p>
        <p style={{ fontSize: '12px', marginTop: '10px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />tempor incididunt ut labore et dolore magna aliqua.</p>
      </TextSection>
      <InputContainer>
        <InputField type='email' placeholder='Enter your email here' />
        <Button>SUBSCRIBE</Button>
      </InputContainer>
    </MainContainer>
  )
}

export default Subscribe