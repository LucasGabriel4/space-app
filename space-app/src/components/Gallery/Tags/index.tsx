import React from 'react'
import {styled} from 'styled-components'
import ButtonTag from './ButtonTag'
import TagsArr from './tags.json'



const TagsContainer = styled.div`
 display: flex;
 align-items: center;
 gap: 24px;

 & > h2{
    color: #d9d9d9;
    font-size: 24px;
    font-weight: 400;
  }

 

  @media screen and (min-width: 760px) and (max-width: 980px){
   &{
    justify-content: space-between;
   }
     
  }

  @media screen and (max-width: 759px){
     &{
      display: block;
     }

     
    & > h2{
        color: #d9d9d9;
        font-size: 24px;
        font-weight: 400;
        text-align: center;
      }

     
  }


  
`

const ButtonsTags = styled.div`
 display: flex;
 gap: 24px;

 @media screen and (min-width: 760px) and (max-width: 980px){
     &{
      justify-content: center;
     }


     
  }


  @media screen and (max-width: 759px){
    &{
      justify-content: center;
      gap: 10px;

     }
     
  }
`


function Tags({setTag}: {setTag: React.Dispatch<React.SetStateAction<number>>}) {
  return (
    <TagsContainer>
       <h2>Busque por tags:</h2>
       <ButtonsTags>
       {TagsArr.map((tag) => (
             <ButtonTag key={tag.id} onClick={() => tag.tag && setTag(tag.tag)}>{tag.titulo}</ButtonTag>
          
       ))}
       </ButtonsTags>
      
    </TagsContainer>
  )
}

export default Tags
