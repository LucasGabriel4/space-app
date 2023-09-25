import React from 'react'
import {styled} from 'styled-components'
import Logo from '../../assets/logo.png'

const HeaderStyled = styled.header`
 padding: 60px 0;
 display: flex;
 justify-content: space-between;
 align-items:center;
 gap: 24px;
 & > .logo{
    width: 211px;
    height: 65px;
 }
`

const Input = styled.input`
 width: 100%;
 max-width: 602px;
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
type HeaderProps = {
  search: string,
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}


function Header({search, setSearch}: HeaderProps) {
  return (
    <HeaderStyled>
        <img className='logo' src={Logo} alt='Logo SpaceApp'/>
        <Input type='text' placeholder='O que você procura?' value={search} onChange={({target}) => setSearch(target.value)}/>
    </HeaderStyled>
  )
}

export default Header
