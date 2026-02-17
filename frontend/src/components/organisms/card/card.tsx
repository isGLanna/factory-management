import { GoPencil } from "react-icons/go"
import './card-style.scss'

interface CardProps{
  title: string
  children: React.ReactNode
  onEdit: () => void
}

export function Card({ title, children, onEdit}: CardProps) {

  return (
    <div className={`card-container flex flex-col`}>
      <div className="card-header">
        <h3>{title}</h3>
        <button onClick={onEdit}><GoPencil /></button>
      </div>

      <div>
        {children}
      </div>

    </div>
  )
}