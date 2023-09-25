import React from 'react'
import {styled} from 'styled-components'
import Favorito from '../../../../assets/icones/favorito.png'
import Expandir from '../../../../assets/icones/expandir.png'


const CardFigure = styled.figure<{$modal: boolean}>`
 margin: 0;
 padding: 0;
 width: ${props => props.$modal ? '90%' : '45%'};
 & > img{
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
 }

 & > figcaption{
    background-color: #001634;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 16px 20px 16px 20px;
 }


 & > figcaption > h1{
    font-size: 20px;
    color: white;
    margin-bottom: 8px;
 }


 @media screen and (max-width: 759px){
   &{
      width: 100%;
   }
 }

 @media screen and (min-width: 760px) and (max-width: 980px){
   & > figcaption > h1{
    font-size: 16px;
    color: white;
 }

 }

`


const FlexContainer = styled.div`
  display:  flex;
  justify-content: space-between;
  & > h3 {
    font-size: 16px;
    color: white;
    font-weight: 400;
  }

  @media screen and (min-width: 760px) and (max-width: 980px){
    & > h3 {
    font-size: 14px;
    color: white;
    font-weight: 400;
  }
 }
`

const Icons = styled.div<{$modal: boolean}>`
 display: flex;
 gap: 24px;
 cursor: pointer;

 
 @media screen and (max-width:1113px) {
    &{
      gap: 10px;
    }
    & > img{
        width: 16px;
        height: 16px;;
    }
 }

 @media screen and (min-width: 760px) and (max-width: 980px){
    &{
        gap: 16px;
    }
    & > img{
        width: 16px;
        height: 16px;;
    }
 }
`

type CardProps = {
    modal: boolean,
    photo: {
       titulo: string;
       fonte: string;
       path: string;
       id: string;
       tagId: number;
        
    } | null,
    selectedModal?: (dataModal: {
        titulo: string;
        fonte: string;
        path: string;
        id: string;
        tagId: number;
    }) => void 
}


function Card({modal, photo, selectedModal}: CardProps) {
  return (
    <CardFigure $modal={modal}>
       <img src={photo?.path} />
      <figcaption>
        <h1>{photo?.titulo}</h1>
        <FlexContainer>
          <h3>{photo?.path}</h3>
          <Icons $modal={modal}>
             <img src={Favorito}/>
             <img className='open-modal' src={Expandir} onClick={() => photo && selectedModal && selectedModal(photo)}/>
          </Icons>
        </FlexContainer>
       
      </figcaption>
    </CardFigure>
  )
}

export default Card
