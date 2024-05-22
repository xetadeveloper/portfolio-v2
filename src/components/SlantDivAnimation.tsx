'use client';
// Modules
import React from 'react';
import { motion } from 'framer-motion';

// Styles
import style from './SlantDivAnimation.module.css';

// Components

// Types
export interface SlantDivAnimationProps {}

export default function SlantDivAnimation(props: SlantDivAnimationProps) {
    return (
        <motion.div
            initial={{
                height: '0px',
                opacity: '0',
                top: '0',
                left: '0',
            }}
            animate={{
                opacity: 1,
                height: '400vh',
                top: '50%',
                left: '50%',
            }}
            transition={{ delay: 0.5, duration: 0.5 }}
            style={{
                backgroundColor: '#464646',
                width: '50%',
                position: 'absolute',
                transform: 'translate(-50%, -50%) rotate(-45deg)',
                zIndex: '0',
            }}
        ></motion.div>
    );
}
