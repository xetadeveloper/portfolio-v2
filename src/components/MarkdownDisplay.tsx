// Modules
import React from 'react';

// Components
import { Box, BoxProps } from '@chakra-ui/react';
import Markdown, { Options } from 'react-markdown';
import rehypeRaw from 'rehype-raw';

// Types

interface Common {
    /**Markdown content */
    children: string;
    markdownProps?: Options;
    options?: Partial<{ convertNewLinesToBreaks: boolean }>;
}
export type MarkdownDisplayProps = Common & BoxProps;

export default function MarkdownDisplay({ children, markdownProps, options, ...props }: MarkdownDisplayProps) {
    const { convertNewLinesToBreaks = true } = options || {};

    return (
        <Box {...props}>
            <Markdown
                {...markdownProps}
                rehypePlugins={[...(markdownProps?.rehypePlugins ? markdownProps.rehypePlugins : []), rehypeRaw]}
            >
                {convertNewLinesToBreaks ? children.replaceAll('\n', '<br>') : children}
            </Markdown>
        </Box>
    );
}
