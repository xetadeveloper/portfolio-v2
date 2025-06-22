import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import { theme } from '~/theme';
import MainLayout from '~/layouts/MainLayout';
import '../css/globals.css';
import { Analytics } from '@vercel/analytics/next';

export default function App({ Component, pageProps, router }: AppProps) {
    return (
        <ChakraProvider theme={theme} resetCSS={true}>
            <Analytics />
            <AnimatePresence mode="wait">
                <MainLayout key={router.route}>
                    <Component key={router.route} {...pageProps} />
                </MainLayout>
            </AnimatePresence>
        </ChakraProvider>
    );
}
