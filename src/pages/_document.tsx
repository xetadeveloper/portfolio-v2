import { Html, Head, Main, NextScript } from 'next/document';
import { fonts } from '~/assets/fonts';

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className={[fonts.hindSiliguri.className].join(' ')}>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
