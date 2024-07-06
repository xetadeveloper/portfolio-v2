import { motion } from 'framer-motion';
import { ReactElement } from 'react';
import NavSide from '~/components/NavSide/NavSide';

export default function MainLayout({ children, key }: { children: ReactElement; key: string }) {
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
            style={{ height: '100dvh', position: 'relative', width: 'auto', overflow: 'hidden' }}
        >
            {children}
            <NavSide key={key} />
        </motion.div>
    );
}
