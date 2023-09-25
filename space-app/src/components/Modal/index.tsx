import React from 'react'
import Card from '../Gallery/NavGallery/Card';
import {styled} from 'styled-components'
import Close from '../../assets/close.png'



const OverlayModal = styled.div`
position: fixed;
width: 100%;
height: 100%;
top: 0;
left: 0;
bottom: 0;
right: 0;
background-color:rgba(42, 39, 51, 0.7) ;

`

const DialogModal = styled.dialog`
position: absolute;
top: 300px;
border: none;
background-color: transparent;
width: 90%;

`

const CardModal = styled.div`
 display: flex;
 justify-content: center;
 @media screen and (min-width: 760px) and (max-width: 980px){
    &  > figure{
        width: 90%;
    }
 }
`

type dataModal = {
    titulo: string;
    fonte: string;
    path: string;
    id: string;
    tagId: number;  
} | null

type ModalProps = {
    dataModal: dataModal
    hideModal: React.Dispatch<React.SetStateAction<dataModal | null>>
      
}

const HideModal = styled.div`
 position: absolute;
 right: 100px;
 top: 40px;
 cursor: pointer;



 @media screen and (min-width: 760px) and (max-width: 980px){
  &{
    right: 80px;
  }
 }
 @media screen and (max-width: 759px){
  &{
    right: 40px;
  }

 }

`
  


function Modal({dataModal, hideModal}: ModalProps) {
  
  
  if(!dataModal) return null
  return (
      <>
       {dataModal && <OverlayModal/>}
        <DialogModal open={!!dataModal}>
          <CardModal>
            <Card key={dataModal?.path} modal={true} photo={dataModal}/>
             <HideModal onClick={() => hideModal(null)}>
                <img src={Close} />
             </HideModal>
          </CardModal>
        </DialogModal>
      </>
       
  )
}

export default Modal
