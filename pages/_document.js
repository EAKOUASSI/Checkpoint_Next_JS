import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="Portfolio de Edwige Annick Kouassi - Développeuse Web" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
