import Link from 'next/link'
import * as React from 'react'

import Main from 'layouts/Main/Main'

export default () => (
  <Main>
    <div>About us</div>
    <div>Back to{' '}
      <Link href="/">
        <a>
          Home
        </a>
      </Link>
    </div>
  </Main>
)
