import type { ReactNode } from 'react'
import { Aside } from '../components/organisms/aside/aside'

interface Props {
  children: ReactNode
}

export function RootLayout({ children }: Props) {

  return (
    <div className='h-full w-full gap-2 flex flex-col items-center justify-center lg:flex-row'>
      <Aside />
      <div className='h-full w-[95dvw] flex items-start lg:items-center lg:w-[75dvw]'>{children}</div>
    </div>
  )
}