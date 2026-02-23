import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi"
import { HiOutlinePencilSquare } from "react-icons/hi2"
import { WarningModal } from "./sub-template/warning-modal"
import { Modal } from "../modal/modal"
import { CiTrash } from "react-icons/ci"
import { useState } from 'react'
import '../modal/item-modal.scss'
import './card-style.scss'

interface CardProps{
  title: string
  type: "material" | "product"
  children: React.ReactNode
  onEdit: () => void
  onDelete: () => void
}

export function Card({ title, type, children, onEdit, onDelete}: CardProps) {
  const [ isOpen, setIsOpen ] = useState<boolean>(false)
  const [ isWarningModalOpen, setIsWarningModalOpen ] = useState<boolean>(false)

  return (
    <div className="card-container flex flex-col gap-4" data-type={type}>
      <div className="card-header">
        <h3>{title}</h3>

        <section>
            <PiDotsThreeOutlineVerticalFill className="cursor-pointer" name="three points" onClick={() => setIsOpen(prev => !prev)} />
            <ul className={`options ${isOpen ? "visible" : "active"}`}>
              <li onClick={onEdit}>
                Editar <HiOutlinePencilSquare/> 
              </li>
              <li style={{color: "var(--red-600)"}} onClick={() => setIsWarningModalOpen(true)}>
                Remover <CiTrash />
              </li>
            </ul>
        </section>
      </div>

      {isWarningModalOpen &&
        <Modal onClose={() => setIsWarningModalOpen(false)}>
          <WarningModal onCancel={() => setIsWarningModalOpen(false)} onConfirm={onDelete}></WarningModal>
        </Modal>
      }

      <div className="card-content">
        {children}
      </div>

    </div>
  )
}