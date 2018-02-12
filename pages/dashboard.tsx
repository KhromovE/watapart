import Link from 'next/link'
import * as React from 'react'

export default () => (
  <div>
    <div>About us</div>
    <div>Back to{' '}
      <Link href="/">
        <a>
          Home
        </a>
      </Link>
    </div>
  </div>
)
