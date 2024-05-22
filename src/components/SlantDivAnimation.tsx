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
            style={{
                backgroundColor: '#464646',
                width: '50%',
                height: '400vh',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) rotate(-45deg)',
                zIndex: '0',
            }}
        ></motion.div>
    );
}
