import React, { type ReactNode } from 'react'
import ContextProvider from './context/themeContext/contextProvider'
import ValueContext from './context/valueContext/ValueContext'
export default function Provider({children}:{children:ReactNode}) {
  return (
    <ContextProvider>
      <ValueContext>
                {children}
      </ValueContext>
    </ContextProvider>
  )
}
