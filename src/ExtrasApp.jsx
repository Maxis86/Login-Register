import React from 'react'
import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme/AppTheme'
// import {AppTheme} from './theme'
export const ExtrasApp = () => {
  return (
    <>  
          <AppTheme>
            <AppRouter />
          </AppTheme>
    </>

  )
}
