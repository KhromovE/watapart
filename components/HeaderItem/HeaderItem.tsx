import * as React from 'react'

import './HeaderItem.scss'

interface IProps {
  children: string,
}

const HeaderItem = ({ children }: IProps) => (
  <li>
    {children}
  </li>
)

export default HeaderItem
