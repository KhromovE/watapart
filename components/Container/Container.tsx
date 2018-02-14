import * as React from 'react'

import './Container.scss'

interface IProps {
  children?: object,
  size: 'lg' | 'md',
}

const Header = ({ children, size = 'md' }: IProps) => (
  <div styleName={`container ${size}`}>
    {children}
  </div>
)

export default Header
