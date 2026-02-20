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
    <div className='flex items-center p-4'>
      <aside className="aside-content flex flex-col gap-4">
        <button className={pathName === "/" ? "active" : ""} onClick={() => navigate({ to: "/"})}>
          <AiOutlineProduct size={32}/>
          <label>Produto</label>
        </button>

        <button className={pathName === "/raw-material-management" ? "active" : ""} onClick={() => navigate({ to: "/raw-material-management"})}>
          <SiDatabricks size={32} />
          <label>Matéria prima</label> 
        </button>

        <button className={pathName === "/production-suggestion" ? "active" : ""} onClick={() => navigate({ to: "/production-suggestion"})}>
          <HiLightBulb size={32} />
          <label>Recomendação</label>
        </button>
    
        {/*  Função a ser implementada no futuro */}
        <button className={pathName === "/sell" ? "active" : ""} onClick={() => navigate({ to: "/production-suggestion"})}>
          <PiMoneyDuotone size={32}/>
          <label>Vender</label>
        </button>
      </aside>
    </div>
  )
}