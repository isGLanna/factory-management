import type { ReactNode } from 'react'
import { Aside } from '../components/templates/aside/aside'

interface Props {
  children: ReactNode
}

export function RootLayout({ children }: Props) {

  return (
    <div className='h-full w-full gap-8 flex flew-rows aling-center justify-center'>
      <Aside />
      <div className='h-full w-[75dvw] flex items-center'>{children}</div>
    </div>
  )
}