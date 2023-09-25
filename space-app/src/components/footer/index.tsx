import React from 'react'
import {styled} from 'styled-components'
import Facebook from '../../assets/icones/facebook.png'
import Twitter from '../../assets/icones/twitter.png'
import Instagram from '../../assets/icones/instagram.png'

const FooterStyled = styled.footer`
background-color: #04244F;
padding: 20px 20px;
display: flex;
justify-content: space-between;
align-items: center;

& > h1{
    font-size: 20px;
    color: white;
    font-weight: 400;
}
`
const Icons = styled.div`
 display: flex;
 gap: 40px;


 @media screen and (max-width: 759px){
   &{
    gap: 16px;
   }
 }
`

function Footer() {
  return (
    <FooterStyled>
        <Icons>
           <img src={Facebook} />
           <img src={Twitter} />
           <img src={Instagram} />
        </Icons>
        <h1>Desenvolvido por Lucas</h1>
    </FooterStyled>
  )
}

export default Footer
