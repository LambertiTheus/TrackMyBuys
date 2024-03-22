import React, { type ReactNode } from 'react'
import ButtonComponent from './ButtonComponent'

interface ModalComponentProps {
  title?: string
  children: ReactNode
  openButtonTitle: string
  closeButtonTitle?: string
  removeCloseButton?: boolean
  modalOpen: boolean
  setModalOpen: (b: boolean) => void
}

const ModalComponent = ({
  title,
  children,
  closeButtonTitle,
  openButtonTitle,
  removeCloseButton,
  modalOpen,
  setModalOpen
}: ModalComponentProps) => {
  return (
    <>
      <ButtonComponent onClick={() => setModalOpen(true)}>
        {openButtonTitle}
      </ButtonComponent>
      {modalOpen &&
        <dialog id="modal" open={modalOpen} className="modal">
          <div className="modal-box">
            {!removeCloseButton &&
              <ButtonComponent
                onClick={() => setModalOpen(false)}
              >
                {closeButtonTitle}
              </ButtonComponent>
            }
            <h3 className="font-bold  text-lg">{title}</h3>
            <div className="py-">{children}</div>
          </div>
        </dialog>
      }
    </>
  )
}

export default ModalComponent

