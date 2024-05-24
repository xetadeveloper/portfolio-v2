// Modules
import React from 'react';

// Styles
import style from './works.module.css';
import { Center } from '@chakra-ui/react';
import NavSide from '~/components/NavSide';

// Components

// Types
export interface worksProps {}

export default function Works(props: worksProps) {
    return (
        <Center bg="brand.bg" minHeight="100%">
            Works Component
        </Center>
    );
}
