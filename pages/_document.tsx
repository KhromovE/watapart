import Document, { Head, Main, NextScript } from 'next/document'
import * as React from 'react'

declare const NEXT_ENV: string

const styles: object = {
  fontFamily: 'Open Sans, sans-serif',
  margin: 0,
  minHeight: '100vh',
  padding: 0,
}

export default class MyDocument extends Document {
  public static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    return { html, head, errorHtml, chunks }
  }

  private addStylesheet = () => {
    if (NEXT_ENV === 'production') {
      return (
        <link rel="stylesheet" href="/_next/static/style.css" />
      )
    }

    return null
  }

  public render() {
    return (
      <html>
      <Head>
        {this.addStylesheet()}
        <title>What about this apartment</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800"
          rel="stylesheet"
        />
      </Head>
      <body
        style={styles}
      >
      <Main />
      <NextScript />
      </body>
      </html>
    )
  }
}
