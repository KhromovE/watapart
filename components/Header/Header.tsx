import * as React from 'react'

import HeaderItems from 'components/HeaderItem/HeaderItem'
import Container from 'components/Container/Container'

import './Header.scss'

interface IMenuItems {
  value: string,
  path?: string,
}

const menuItems: IMenuItems[] = [
  {
    value: 'Квартиры',
  },
  {
    value: 'Риэлторы',
  },
]

const renderItems = (items: IMenuItems[]) => items.map((item: IMenuItems) => (
  <HeaderItems key={item.value}>
    {item.value}
  </HeaderItems>
))

const Header = () => (
  <header styleName="header">
    <Container>
      <div styleName="header__menu">
        <div>Logo</div>
        <ul>
          {renderItems(menuItems)}
        </ul>
      </div>
    </Container>
  </header>
)

export default Header
