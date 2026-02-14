import { GoPencil } from "react-icons/go"
import './card-style.scss'

interface CardProps<T> {
  item: T
  title: string
  children?: React.ReactNode
  onEdit: (item: T) => void
}

export function Card<T>({ item, title, children, onEdit}: CardProps<T>) {

  return (
    <div className={`card-container flex flex-col`}>
      <div className="card-header">
        <h3>{title}</h3>
        <button onClick={() => onEdit(item)}><GoPencil /></button>
      </div>

      <div className="card-info">
        {children}
      </div>

    </div>
  )
}