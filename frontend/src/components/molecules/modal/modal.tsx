import "./modal-style.scss"

interface Props {
  children: React.ReactNode
  onClose: () => void
}

export function Modal({ children, onClose }: Props) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}