import Link from 'next/link'
import * as React from 'react'

import './HeaderItem.scss'

interface IProps {
  children: string,
  path: string,
}

const HeaderItem = ({ children, path }: IProps) => (
  <li>
    <Link href={path}>
      <a>
        {children}
      </a>
    </Link>
  </li>
)

export default HeaderItem
