import { GoPencil } from "react-icons/go"
import './card-style.scss'

interface CardProps{
  title: string
  type: "material" | "product"
  children: React.ReactNode
  onEdit: () => void
}

export function Card({ title, type, children, onEdit}: CardProps) {

  return (
    <div className="card-container flex flex-col gap-4" data-type={type}>
      <div className="card-header">
        <h3>{title}</h3>
        <button onClick={onEdit}><GoPencil /></button>
      </div>

      <div className="card-content">
        {children}
      </div>

    </div>
  )
}