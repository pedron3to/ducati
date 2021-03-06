import Document, { Head, Html, Main, NextScript } from 'next/document'


export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="/public/logo.svg" />
          <link rel="/public/monster.svg" />
          <link rel="/public/M1.png" />
          <link rel="/public/M2.png" />
          <link rel="/public/M3.png" />
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Italianno&display=swap" rel="stylesheet" />
        </Head>
        <body>

          <Main />
          <NextScript />


        </body>
      </Html >
    )
  }
}
