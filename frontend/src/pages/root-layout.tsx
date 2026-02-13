import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function RootLayout({ children }: Props) {

  return (
    <>
      <div>{children}</div>
    </>
  )
}