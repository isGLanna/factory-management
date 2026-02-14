import { useState } from 'react'
import { useNavigate } from "@tanstack/react-router"


import { AsideContent } from '../../organisms/aside-content/aside-content'

export function Aside() {

  return (
    <div className='flex h-full items-center p-8'>
      <AsideContent />
    </div>
  )
}