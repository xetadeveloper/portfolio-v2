// Modules
import React from 'react';

// Styles
import style from './thoughts.module.css';
import { Center } from '@chakra-ui/react';

// Components

// Types
export interface thoughtsProps {}

export default function Thoughts(props: thoughtsProps) {
    return (
        <Center bg="brand.bg" minHeight="100%">
            Thoughts Component
        </Center>
    );
}
