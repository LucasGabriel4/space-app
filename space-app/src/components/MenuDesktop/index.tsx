import React from 'react'
import {styled} from 'styled-components'
import NavItem from '../NavItem'
import home_ativo from '../../assets/icones/home-ativo.png'
import home_inativo from '../../assets/icones/home-inativo.png'
import mais_vistas_ativo from '../../assets/icones/mais-vistas-ativo.png'
import mais_vistas_inativo from '../../assets/icones/mais-vistas-inativo.png'
import mais_curtidas_ativo from '../../assets/icones/mais-curtidas-ativo.png'
import mais_curtidas_inativo from '../../assets/icones/mais-curtidas-inativo.png'
import novas_ativo from '../../assets/icones/novas-ativo.png'
import novas_inativo from '../../assets/icones/novas-inativo.png'
import surpreenda_me_ativo from '../../assets/icones/surpreenda-me-ativo.png'
import surpreenda_me_inativo from '../../assets/icones/surpreenda-me-inativo.png'


const Menu = styled.ul`
 margin: 0;
 padding: 0;
 list-style: none;
`
function MenuDesktop() {
  return (
    <nav>
       <Menu>
           <NavItem
            iconActive={home_ativo} 
            iconInactive={home_inativo} 
            active={true}
            text='Inicio'/>

           <NavItem
            iconActive={mais_vistas_ativo} 
            iconInactive={mais_vistas_inativo} 
            active={false}
            text='Mais vistas'/>

            <NavItem
            iconActive={mais_curtidas_ativo } 
            iconInactive={mais_curtidas_inativo} 
            active={false}
            text='Mais curtidas'/>

            <NavItem
            iconActive={novas_ativo} 
            iconInactive={novas_inativo} 
            active={false}
            text='Novas'/>

            <NavItem
            iconActive={surpreenda_me_ativo} 
            iconInactive={surpreenda_me_inativo} 
            active={false}
            text='Surpreenda-me'/>

       </Menu>
    </nav>
  )
}

export default MenuDesktop
