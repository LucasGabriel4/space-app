import React from 'react'
import {styled} from 'styled-components'
import Tags from './Tags'
import NavGallery from './NavGallery'
import Popular from './Popular'


const GallerySection = styled.section`
padding: 40px 0;

`

const GalleryContainer = styled.div`
 display: flex;
 padding-top: 40px;


 @media screen and (max-width: 759px){
   &{
    flex-direction: column;
   }
 }
 
`

type GalleryProps = {
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

    setTag: React.Dispatch<React.SetStateAction<number>>;
}

function Gallery({photosGallery, selectedModal, setTag}:GalleryProps) {
  return (
    <GallerySection>
        <Tags setTag={setTag}/>
        <GalleryContainer>
            <NavGallery photosGallery={photosGallery} selectedModal={selectedModal}/>
            <Popular/>
        </GalleryContainer>
    </GallerySection>
  )
}

export default Gallery
