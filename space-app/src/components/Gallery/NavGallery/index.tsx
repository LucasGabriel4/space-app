import React from 'react'
import {styled} from 'styled-components'
import Card from './Card'

const NavGallerySection = styled.section`
width: 80%;

 & > h1{
    text-align: left;
    color: #7B78E5;
    margin-bottom: 20px;
 }

 @media screen and (min-width: 760px) and (max-width: 980px){

 }

 @media screen and (max-width: 759px){
   &{
    width: 100%;
    margin-bottom: 30px;
   }
 }

`

const CardsContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 24px;


@media screen and (max-width: 759px){
    &{
        justify-content: center;
    }

}
`


type NavGalleryProps = {
    photosGallery: {
        titulo: string;
        fonte: string;
        path: string;
        id: string;
        tagId: number;
    }[],
    selectedModal: (dataModal: {
        titulo: string;
        fonte: string;
        path: string;
        id: string;
        tagId: number;
    }) => void
}

function NavGallery({photosGallery, selectedModal}: NavGalleryProps) {
  return (
    <NavGallerySection>
       <h1>Navegue pela galeria</h1>
       <CardsContainer>
          {photosGallery.map((photo) => (
            <Card key={photo.path} modal={false} photo={photo} selectedModal={selectedModal}/>
          ))}
       </CardsContainer>
   
    </NavGallerySection>
  )
}

export default NavGallery
