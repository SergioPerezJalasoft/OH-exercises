import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en' data-theme='retro'>
      <Head />
      <body className='antialiased'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}