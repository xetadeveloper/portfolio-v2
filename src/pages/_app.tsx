import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import { theme } from '~/theme';
import { motion } from 'framer-motion';
import { ReactElement } from 'react';
import NavSide from '~/components/NavSide';

function Layout({ children, key }: { children: ReactElement; key: string }) {
    return (
        <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -300, opacity: 0 }}
            transition={{
                type: 'tween',
                stiffness: 160,
                damping: 20,
                duration: 0.4,
            }}
            style={{ height: '100vh', position: 'relative', width: 'auto', overflow: 'hidden' }}
        >
            {children}
            <NavSide key={key} />
        </motion.div>
    );
}

export default function App({ Component, pageProps, router }: AppProps) {
    return (
        <ChakraProvider theme={theme} resetCSS={true}>
            <AnimatePresence mode="wait" >
                <Layout key={router.route}>
                    <Component key={router.route} {...pageProps} />
                </Layout>
            </AnimatePresence>
        </ChakraProvider>
    );
}
