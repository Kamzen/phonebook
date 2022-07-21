import React from 'react'
import { TopNavigation } from '../components/TopNavigation'

type Props = {
  children : JSX.Element
}

export const Root = ({children} : Props) => {
  return (
    <div>
        <TopNavigation />
        <div> {children} </div>
    </div>
  )
}
