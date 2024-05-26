import { defineStyleConfig } from '@chakra-ui/react';

export const Heading = defineStyleConfig({
    baseStyle: {
        fontSize: '16px',
        fontWeight: '300',
        textTransform: 'none',
    },
    variants: {
        neutral: {
            fontSize: '16px',
            fontWeight: '300',
        },
    },
    defaultProps: {
        variant: 'neutral',
    },
});
