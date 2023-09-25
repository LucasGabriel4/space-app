import {useState} from 'react'
import {styled} from 'styled-components'
import Logo from '../../../assets/logo.png'
import iconMenu from '../../../assets/Menu.png'
import NavItem from '../../NavItem'
import home_ativo from '../../../assets/icones/home-ativo.png'
import home_inativo from '../../../assets/icones/home-inativo.png'
import mais_vistas_ativo from '../../../assets/icones/mais-vistas-ativo.png'
import mais_vistas_inativo from '../../../assets/icones/mais-vistas-inativo.png'
import mais_curtidas_ativo from '../../../assets/icones/mais-curtidas-ativo.png'
import mais_curtidas_inativo from '../../../assets/icones/mais-curtidas-inativo.png'
import novas_ativo from '../../../assets/icones/novas-ativo.png'
import novas_inativo from '../../../assets/icones/novas-inativo.png'
import surpreenda_me_ativo from '../../../assets/icones/surpreenda-me-ativo.png'
import surpreenda_me_inativo from '../../../assets/icones/surpreenda-me-inativo.png'
import Close from '../../../assets/close.png'


const Header = styled.header`
padding: 30px 0;

`

const HeaderFlex = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 40px;

& > .logo{
    width: 211px;
    height: 65px;
 }

 & > nav > img{
    cursor: pointer;
 }
`

const Input = styled.input`
 width: 96%;
 height: 56px;
 border-radius: 10px;
 border: 2px solid #7B78E5;
 background: transparent;
 font-size: 20px;
 padding-left: 12px;
 line-height: 56px;
 outline: none;
 color: white;


`
const Menu = styled.ul`
 margin: 0;
 padding: 30px 0 30px 30px;
 width: 255px;
 list-style: none;
 background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%); 
 position: absolute;
 top: 0;
 left: 0;
 display: none;
;
`

const HideMenu = styled.div`
position: absolute;
right: 10px;
top: 10px;
cursor: pointer;
`

function HeaderMobile() {
    const [openMenu , setOpenMenu] = useState(false)
  return (
    <Header>
       <HeaderFlex>
          <nav>
            <img src={iconMenu} onClick={() => setOpenMenu(true)}/>
             <Menu style={{display: openMenu ? 'block' : 'none'}}>
                  <HideMenu>
                     <img src={Close} onClick={() => setOpenMenu(false)}/> 
                  </HideMenu>
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
          <img className='logo' src={Logo} />
       </HeaderFlex>
       <Input type='text' placeholder='O que você procura?'/>
       
    </Header>
  )
}

export default HeaderMobile
