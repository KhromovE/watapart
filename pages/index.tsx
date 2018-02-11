import React from 'react'
import Head from 'next/head'

import './index.scss'

export default () => (
  <div styleName="root">
    <Head>
      <link rel="stylesheet" href="/_next/static/style.css"/>
    </Head>
    <p>Hello World</p>
  </div>
)
