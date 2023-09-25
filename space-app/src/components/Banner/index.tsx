import React from 'react'
import {styled} from 'styled-components'
import Background from '../../assets/banner.png'

const BannerStyled = styled.figure<{$background: string}>`
 width: 100%;
 height: 328px;
 border-radius: 20px;
 background-image: ${props => `url(${props.$background})`};
 margin: 0;
 

 @media screen and (max-width: 759px){

 }

 
`

const Title = styled.h1`
 color: #ffffff;
 font-weight: 400;
 font-size: 40px;
 max-width: 301px;
 padding: 92px 0 92px 62px;

 @media screen and (max-width: 759px){
    &{
      font-size: 35px;
      padding: 92px 0 92px 30px;
    }
 }

`


function Banner() {
  return (
    <BannerStyled $background={Background}>
       <Title>A galeria mais completa de fotos do espaço!</Title>
    </BannerStyled>
  )
}

export default Banner
