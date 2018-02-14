import * as React from 'react'
import Header from 'components/Header/Header'

import './Main.scss'

interface InterfaceProps {
  children?: object
}

const Main = ({ children }: InterfaceProps) => (
  <React.Fragment>
    <Header />
    <main>
      {children}
    </main>
  </React.Fragment>
)

export default Main
