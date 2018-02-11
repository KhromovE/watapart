import React from 'react'
import Head from 'next/head'

import './index.scss'

declare const NEXT_ENV: string

export default () => (
  <div styleName="root">
    <Head>
      {
        NEXT_ENV === 'production' && (
          <link rel="stylesheet" href="/_next/static/style.css" />
        )
      }
    </Head>
    <p>Hello World</p>
  </div>
)
