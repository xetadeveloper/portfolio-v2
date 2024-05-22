'use client';
// Modules
import React, { ReactElement } from 'react';
import { motion } from 'framer-motion';

// Components

// Types
export interface SocialLinkProps {
    url: string;
    icon: ReactElement;
}

export default function SocialLink({ url, icon }: SocialLinkProps) {
    return (
        <motion.a target="_blank" href={url} style={{ height: '20px', width: '20px' }} whileHover={{ scale: 2 }}>
            {icon}
        </motion.a>
    );
}
