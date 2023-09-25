import React from 'react'
import {styled} from 'styled-components'

const ItemNav = styled.li`
  margin-bottom: 29px;
`

type NavItemProps = {
    iconActive: string,
    iconInactive: string,
    active: boolean,
    text: string
}

const ItemNavContainer = styled.div<{$active: boolean}>`
 display: flex;
 align-items: center;
 gap: 20px;
 & > a {
    font-family: ${props => props.$active ? 'GandHiSansBold' : 'GandHiSansRegular'};
    font-size: 24px;
    color: ${props => props.$active ? '#7B78E5' : '#d9d9d9'}
 }
`


function NavItem({iconActive, iconInactive, active, text}: NavItemProps) {
  return (
    <ItemNav>
       <ItemNavContainer $active={active}>
          <img src={active ? iconActive : iconInactive} alt='icone de navegação do menu'/>
          <a href=''>{text}</a>
       </ItemNavContainer>
      
    </ItemNav>
  )
}

export default NavItem
