// Modules
import React from 'react';

// Components
import MarkdownDisplay, { MarkdownDisplayProps } from '~/components/MarkdownDisplay';

// Types
export interface AboutBodyProps {
    children: string;
}

export default function AboutBody({ children, ...props }: MarkdownDisplayProps) {
    return (
        <MarkdownDisplay
            fontWeight="300"
            width="100%"
            whiteSpace="none"
            maxWidth={{ base: '100%', lg: '80%' }}
            {...props}
        >
            {children}
        </MarkdownDisplay>
    );
}
