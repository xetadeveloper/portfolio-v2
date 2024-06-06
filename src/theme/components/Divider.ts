import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const Divider = defineStyleConfig({
    variants: {
        thick: defineStyle({
            borderWidth: '1px', // change the width of the border
            borderStyle: 'solid', // change the style of the border
            borderRadius: 10, // set border radius to 10
            borderColor: '#DEDEDE',
            boxSizing: 'border-box',
        }),
    },

    defaultProps: {
        variant: 'thick',
    },
});

export default Divider;
