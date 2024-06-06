import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(inputAnatomy.keys);

export default defineMultiStyleConfig({
    variants: {
        brand: definePartsStyle({
            // define the part you're going to style
            field: {
                fontFamily: 'inherit',
                color: 'inherit',
                border: '1px solid transparent',
                borderRadius: '5px',
                borderColor: '#9b9b9b',
                outline: 'none',
                _hover: {
                    borderWidth: '2px',
                    borderColor: '#9b9b9b',
                },
                _focusVisible: {
                    boxShadow: '0 0 1px 1px #c6c6c6',
                    borderColor: 'none',
                },
            },
        }),
    },

    defaultProps: {
        variant: 'brand',
    },
});
