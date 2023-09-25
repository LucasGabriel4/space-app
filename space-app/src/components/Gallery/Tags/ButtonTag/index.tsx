import React from 'react'
import {styled} from 'styled-components'

const Button = styled.button`
 background-color: rgba(217, 217, 217, 0.3);
 border: 2px solid transparent;
 transition: all .3s;
 border-radius: 10px;
 color: white;
 font-size: 24px;
 padding: 10px 8px;
 cursor: pointer;

 &:hover{
    border: 2px solid #7B78E5;
 }


 @media screen and (max-width: 759px){
    &{
      font-size: 16px;
    }
 }

`


type ButtonTagProps = React.PropsWithChildren & {
  onClick: () => void
}

function ButtonTag({children, onClick}:ButtonTagProps) {
  return (
    <Button onClick={onClick}>
       {children}
    </Button>
  )
}

export default ButtonTag
