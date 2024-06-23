// Modules
import React, { ReactElement } from 'react';

// Components
import { Text, TextProps } from '@chakra-ui/react';
import Markdown from 'react-markdown';

// Types
export interface AboutBodyProps {
    children: string;
}

export default function AboutBody({ children, ...props }: AboutBodyProps & Omit<TextProps, 'children'>) {
    return (
        <Text fontWeight="300" width="100%" whiteSpace="none" maxWidth={{ base: '100%', lg: '80%' }} {...props}>
            {children}
        </Text>
    );
}
