import { GoPencil } from "react-icons/go"
import './card-style.scss'

interface CardProps{
  title: string
  children?: React.ReactNode
  setIsEditing: (onEdit: boolean) => void
}

export function Card({ title, children, setIsEditing}: CardProps) {

  return (
    <div className={`card-container flex flex-col`}>
      <div className="card-header">
        <h3>{title}</h3>
        <button onClick={() => setIsEditing(true)}><GoPencil /></button>
      </div>

      <div className="card-info">
        {children}
      </div>

    </div>
  )
}