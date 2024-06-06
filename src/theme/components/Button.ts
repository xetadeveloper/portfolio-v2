import { defineStyleConfig } from '@chakra-ui/react';

const Button = defineStyleConfig({
    variants: {
        outline: {
            padding: '10px 14px',
            gap: '10px',
            fontWeight: 'normal',
            justifyContent: 'flex-start',
            border: '1px solid #efefef',
            borderColor: 'black.600',
            color: 'black.800',
            height: 'auto',
            bg: 'transparent',
            cursor: 'pointer',
            WebkitTapHighlightColor: 'transparent',
            _disabled: {
                cursor: 'default',
            },
            _hover: {
                backgroundColor: 'black.600',
                borderColor: 'white',
                color: 'white',
            },
            _active: {
                backgroundColor: 'black.600',
            },
            _focusVisible: {
                boxShadow: '0 0 1px 2px #c6c6c6',
            },
        },
    },

    defaultProps: {
        variant: 'outline',
    },
});

export default Button;
