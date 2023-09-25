import GlobalStyles from "./GlobalStyles"
import {useEffect, useState} from 'react'
import { styled } from "styled-components"
import Header from "./components/Header"
import MenuDesktop from "./components/MenuDesktop"
import Banner from "./components/Banner"
import Gallery from "./components/Gallery"
import FotosArr from './fotos.json'
import Footer from "./components/footer"
import Modal from "./components/Modal"
import HeaderMobile from "./components/Header/HeaderMobile"





const HeaderSection = styled.section`
 grid-area: header;

`
const AsideSection = styled.section`
 grid-area: aside;


 @media screen and (min-width: 760px) and (max-width: 980px){

 }

 @media screen and (max-width: 759px){
   &{
    display: none;
   }
 }

`

const GallerySection = styled.section`
 grid-area: gallery;
 min-height: 100vh;

`

const BannerSection = styled.section`
 grid-area: banner;

`

const GridContainer = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
 grid-template-areas: "header header header header header"
                      "aside  banner banner banner banner"
                      "aside  gallery gallery gallery gallery";
 max-width: 1440px;
 margin: 0 auto;
 padding: 0 24px;

 @media screen and (min-width: 760px) and (max-width: 980px){
  grid-template-areas: "header header header header header"
                      "aside aside banner banner banner"
                      "gallery gallery gallery gallery gallery";

 
 }

 
 @media screen and (max-width: 759px){
  grid-template-columns: 100%;
  grid-template-areas: "header"
                       "banner"
                      "gallery";

 }

`

type dataModal = {
  titulo: string;
  fonte: string;
  path: string;
  id: string;
  tagId: number;
}

function App() {

  const [photosGallery, setPhotosGallery] = useState(FotosArr)
  const [selectedModal, setSelectedModal] = useState<dataModal | null>(null)
  const [match, setMatch] = useState<null | boolean>(null)
  const [search, setSearch] = useState('')
  const [tag, setTag] = useState(0)
 


  useEffect(() => {
    const filters = FotosArr.filter((photo => {
      
      const filterSearch = !search ||  photo.titulo.toLowerCase().includes(search.toLowerCase())
      const filterTags =  !tag || photo.tagId === tag
    
      return  filterSearch && filterTags
     }))
    
    setPhotosGallery(filters)
  },[search, tag])

  useEffect(() => {
    function changeMatch(){
      const {matches} = window.matchMedia('(max-width: 759px)')
      setMatch(matches)
    }

    changeMatch()

    window.addEventListener('resize', changeMatch)
  }, [match])



  return (
    <>
       <GridContainer>
       <GlobalStyles/>
       <HeaderSection>
         {match ? <HeaderMobile/> : <Header search={search} setSearch={setSearch}/>}
       </HeaderSection>
       <AsideSection>
         <MenuDesktop />
       </AsideSection>
       <BannerSection>
          <Banner/>
       </BannerSection>
       <GallerySection>
            <Gallery 
            photosGallery={photosGallery} 
            selectedModal={(dataModal) => setSelectedModal(dataModal)}
            setTag={setTag}/>
       </GallerySection>
    </GridContainer>
          <Modal dataModal={selectedModal} hideModal={setSelectedModal}/>
          <Footer/>
    
    </>
  
     
      
    
    
  )
}

export default App
