// Modules
import React from 'react';

// Styles
import style from './about.module.css';
import { Box, Center } from '@chakra-ui/react';
import NavSide from '~/components/NavSide';

// Components

// Types
export interface aboutProps {}

export default function About(props: aboutProps) {
    return (
        <Center bg="brand.bg" position="relative" height="100vh" width="100%">
            About page
        </Center>
    );
}
