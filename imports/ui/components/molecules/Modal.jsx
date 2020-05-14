// React imports
import React, { useEffect } from 'react'
import ReactModal from 'react-modal'

import styled from 'styled-components'

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(10, 15, 44, 0.5)',
    zIndex: 9,
  },
  content: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: 'none',
    background: 'none',
    overflow: 'scroll',
    borderRadius: '0',
    outline: 'none',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

const ContainerContent = styled.div`
  position: relative;
  background-color: #FFFFFF;
  border-radius: 2px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.15);
  min-height: 212px;
  max-width: 512px;
  padding: 32px 128px;
  width: 100%;
  overflow: hidden;
`

const StyledCloseButton = styled.button`
  position: absolute;
  font-size: 1rem;
  top: 0;
  border-radius: 1px;
  right: 0;
  width: 36px;
  height: 36px;
  border: none;
  background-color: #0A1C3B;
  color: #FFFFFF;
  transition: background-color 0.3s ease-out, color 0.3s ease-out;
  
  &:hover {
    background-color: #27E200;
    font-weight: bold;
  }
`

export const Modal = ({ children, label, show, onClose }) => {
  useEffect(() => {
    if (show) {
      document.body.classList.add('modal__open')
    } else {
      document.body.classList.remove('modal__open')
    }
  }, [show])

  return (
    <ReactModal style={styles} isOpen={show} contentLabel={label}>
      <ContainerContent>
        <StyledCloseButton onClick={onClose}>X</StyledCloseButton>
        {children}
      </ContainerContent>
    </ReactModal>
  )
}
