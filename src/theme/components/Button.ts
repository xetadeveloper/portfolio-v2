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
            _disabled: {
                cursor: 'default',
                opacity: '0.7',
            },
            _hover: {
                backgroundColor: 'black.600',
                borderColor: 'white',
                color: 'white',
            },
            _active: {
                backgroundColor: 'black.600',
            },
        },
    },

    defaultProps: {
        variant: 'outline',
    },
});

export default Button;
