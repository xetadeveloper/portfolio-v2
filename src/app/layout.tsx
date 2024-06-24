import type { Metadata } from 'next';
import { fonts } from '../assets/fonts';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
    title: 'Fego Etese',
    description: 'Fego Etese Web Developer Portfolio',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={fonts.hindSiliguri.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
