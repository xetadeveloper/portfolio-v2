// Modules
import React from 'react';

// Styles
import style from './contact.module.css';
import { Center } from '@chakra-ui/react';

// Components

// Types
export interface contactProps {}

export default function Contact(props: contactProps) {
    return (
        <Center bg="brand.bg" minHeight="100%">
            Contact Component
        </Center>
    );
}
