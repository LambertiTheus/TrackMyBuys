import React, { type ReactNode, useState } from 'react'

interface ModalComponentProps {
  title?: string
  children: ReactNode
  isOpen: boolean
  onClick?: () => void
  onChange: (value: string) => void
  openButtonTitle: string
  closeButtonTitle: string
}

const ModalComponent = ({
  children,
  onChange,
  isOpen,
  title,
  closeButtonTitle,
  openButtonTitle
}: ModalComponentProps) => {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <>
      <button className="btn" onClick={openModal}>{openButtonTitle}</button>
      {isOpen &&
        <dialog id="modal" open={modalOpen} className="modal">
          <div className="modal-box">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => {
                closeModal()
                onChange("fechar")
              }}
            >
              {closeButtonTitle}
            </button>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="py-4">{children}</p>
          </div>
        </dialog >
      }
    </>
  )
}

export default ModalComponent

