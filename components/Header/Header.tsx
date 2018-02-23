import * as React from 'react'

import Container from 'components/Container/Container'
import HeaderItems from 'components/HeaderItem/HeaderItem'
import Logo from 'components/Logo/Logo'

import './Header.scss'

interface IMenuItems {
  value: string,
  path?: string,
}

const menuItems: IMenuItems[] = [
  {
    path: 'apartments',
    value: 'Квартиры',
  },
  {
    path: 'realtors',
    value: 'Риэлторы',
  },
]

const renderItems = (items: IMenuItems[]) => items.map((item: IMenuItems) => (
  <HeaderItems key={item.value} path={item.path}>
    {item.value}
  </HeaderItems>
))

const Header = () => (
  <header styleName="header">
    <Container>
      <div styleName="header__container">
        <Logo />
        <div styleName="header__menu">
          <ul>
            {renderItems(menuItems)}
          </ul>
        </div>
      </div>
    </Container>
  </header>
)

export default Header
