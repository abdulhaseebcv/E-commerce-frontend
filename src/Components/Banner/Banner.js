import React from 'react'
import { BannerContainer, ImageDiv } from './BannerStyle'

function Banner() {
  return (

    <BannerContainer>
      <ImageDiv left />
      <ImageDiv style={{ backgroundImage: `url('/assets/images/Rectangle 9.png')`, backgroundSize: 'cover' }}>
        <p>From students to senior citizens <br />
          this web portal of <br />
          <span>"Products and Classifieds”</span> <br />
          provides it all</p>
      </ImageDiv>
      <ImageDiv right />
    </BannerContainer>

  )
}

export default Banner