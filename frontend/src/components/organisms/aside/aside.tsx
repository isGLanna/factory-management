import { useNavigate, useRouterState } from "@tanstack/react-router"
import { AiOutlineProduct } from "react-icons/ai"
import { SiDatabricks } from "react-icons/si"
import { HiLightBulb } from "react-icons/hi"
import { PiMoneyDuotone } from "react-icons/pi"
import './aside-style.scss'

export function Aside() {
  const navigate = useNavigate()
  const pathName = useRouterState({
    select: (state) => state.location.pathname
  })

  return (
    <div className='flex h-full items-center p-8'>
      <aside className="aside-content flex flex-col gap-4">
        <button className={pathName === "/" ? "active" : ""} onClick={() => navigate({ to: "/"})}>
          <AiOutlineProduct size={32}/>
          <label>Produto</label>
        </button>

        <button className={pathName === "/raw-material-management" ? "active" : ""} onClick={() => navigate({ to: "/raw-material-management"})}>
          <SiDatabricks size={32} />
          <label>Matéria prima</label> 
        </button>

        <button className={pathName === "/optmize-process" ? "active" : ""} onClick={() => navigate({ to: "/raw-material-management"})}>
          <HiLightBulb size={32} />
          <label>Recomendação de produção</label>
        </button>

        <button className={pathName === "/sell" ? "active" : ""} onClick={() => navigate({ to: "/raw-material-management"})}>
          <PiMoneyDuotone size={32}/>
          <label>Vender</label>
        </button>
      </aside>
    </div>
  )
}