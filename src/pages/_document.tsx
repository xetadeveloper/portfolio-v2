import { Html, Head, Main, NextScript } from 'next/document';
import { fonts } from '~/assets/fonts';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/favicon/favicon.ico" type="image/ico" />
                <link rel="icon" sizes="512x512" href="/favicon/android-chrome-512x512.png" />
                <link rel="icon" sizes="192x192" href="/favicon/android-chrome-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
            </Head>

            <body className={[fonts.hindSiliguri.className].join(' ')}>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
