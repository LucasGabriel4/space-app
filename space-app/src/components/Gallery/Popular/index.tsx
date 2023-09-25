import React from 'react'
import {styled} from 'styled-components'
import photosGallery from '../../../fotos.json'


const PopularSection = styled.section`
width: 20%;
 & > h1{
  text-align: center;
  color: #7B78E5;
  margin-bottom: 20px;
 }




 @media screen and (max-width: 759px){
    &{
        width: 100%;
    }

  & > h1{
    text-align: left;
  
  }
 }
`

const PopularContainer = styled.div`
display: flex;
flex-direction: column;

& > img {
  width: 100%;
  margin-bottom: 24px;
  border-radius: 20px;
}



@media screen and (min-width: 760px) and (max-width: 980px){
  

&{
  justify-content: center;
  align-items: center;
}

}
@media screen and (max-width: 759px){

  &{
  justify-content: center;
  align-items: center;
  }

  & > img {
    width: 100%;
  
  }
}



`



function Popular() {
  return (
    <PopularSection>
      <h1>Populares</h1>
      <PopularContainer>
        {photosGallery.map((photo) => (
          <img src={photo.path} key={photo.path}/>
        ))}
      </PopularContainer>
    </PopularSection>
  )
}

export default Popular
