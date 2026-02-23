import { IoWarningOutline } from "react-icons/io5"


interface WarningModalProps {
  onConfirm: () => void
  onCancel: () => void
}

export function WarningModal({ onConfirm, onCancel }: WarningModalProps) {
  return (
      <section className="item-form-modal flex flex-col gap-4">
        <div>
          <div className="flex flex-row items-center text-orange-400">
            <IoWarningOutline className="pb-[5px]" size={24}/>
            <h3>Atenção</h3> 
          </div>
          <hr />

        </div>

        <p>Tem certeza que deseja excluir permanentemente?</p>

        <div className="flex flex-row gap-4 justify-end">
          <button className="btn-cancel" onClick={onCancel}>Cancelar</button>
          <button className="btn-delete" onClick={onConfirm}>Excluir</button>
        </div>

      </section>
  )
}