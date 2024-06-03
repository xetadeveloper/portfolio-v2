// Modules
import React, { ReactElement } from 'react';

// Components
import { Text, TextProps } from '@chakra-ui/react';

// Types
export interface AboutBodyProps {
    children: string | ReactElement;
}

export default function AboutBody({ children, ...props }: AboutBodyProps & Omit<TextProps, 'children'>) {
    return (
        <Text fontWeight="300" width="100%" whiteSpace="none" maxWidth={{ base: '100%', lg: '80%' }} {...props}>
            {children}
        </Text>
    );
}
