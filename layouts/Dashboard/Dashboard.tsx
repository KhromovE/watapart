import * as React from 'react'

import Container from 'components/Container/Container'
import Header from 'components/Header/Header'

import './Dashboard.scss'

interface InterfaceProps {
  children?: object
}

const Dashboard = ({ children }: InterfaceProps) => (
  <React.Fragment>
    <Header />
    <Container>
      <main>
        {children}
      </main>
    </Container>
  </React.Fragment>
)

export default Dashboard
