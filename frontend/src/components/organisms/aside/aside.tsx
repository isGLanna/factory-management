import { useNavigate } from "@tanstack/react-router"
import { AiOutlineProduct } from "react-icons/ai"
import { SiDatabricks } from "react-icons/si"
import { HiLightBulb } from "react-icons/hi"
import { PiMoneyDuotone } from "react-icons/pi"
import { useState } from 'react'
import './aside-style.scss'

export function Aside() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<number>(0)

  const handleClick = (url: string, index: number) => {
    setSelected(prev => index)
    navigate({to: `${url}`})
  }

  return (
    <div className='flex h-full items-center p-8'>
      <aside className="aside-content flex flex-col gap-4">
        <button className={selected === 0 ? "active" : ""} onClick={() => handleClick("/", 0)}>
          <AiOutlineProduct size={32}/>
          <label>Produto</label>
        </button>

        <button className={selected === 1 ? "active" : ""} onClick={() => handleClick("/raw-material-management", 1)}>
          <SiDatabricks size={32} />
          <label>Matéria prima</label> 
        </button>

        <button className={selected === 2 ? "active" : ""} onClick={() => handleClick("/raw-material-management", 2)}>
          <HiLightBulb size={32} />
          <label>Recomendação de produção</label>
        </button>

        <button className={selected === 3 ? "active" : ""} onClick={() => handleClick("/raw-material-management", 3)}>
          <PiMoneyDuotone size={32}/>
          <label>Vender</label>
        </button>
      </aside>
    </div>
  )
}