import * as React from 'react'

import Container from 'components/Container/Container'
import Header from 'components/Header/Header'

import './Main.scss'

interface InterfaceProps {
  children: object
}

const Main = ({ children }: InterfaceProps) => (
  <React.Fragment>
    <Header />
    <main>
      <Container>
        <div styleName="content">
          {children}
        </div>
      </Container>
    </main>
  </React.Fragment>
)

export default Main
