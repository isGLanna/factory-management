import { AiOutlineProduct } from "react-icons/ai"
import { SiDatabricks } from "react-icons/si";
import { HiLightBulb } from "react-icons/hi"
import { PiMoneyDuotone } from "react-icons/pi";
import './aside-style.scss'
import { useNavigate } from "@tanstack/react-router";

export function AsideContent(){
  const navigate = useNavigate()

  return(
    <aside className="aside-content flex flex-col gap-4">
      <button onClick={() => navigate({to: '/'})}>
        <AiOutlineProduct size={32}/>
        <label>Produto</label>
      </button>

      <button >
        <SiDatabricks size={32} />
        <label>Matéria prima</label> 
      </button>

      <button>
        <HiLightBulb size={32} />
        <label>Recomendação de produção</label>
      </button>

      <button>
        <PiMoneyDuotone size={32}/>
        <label>Vender</label>
      </button>
    </aside>
  )
}