import { ChakraTheme, extendTheme } from '@chakra-ui/react';
import Button from './components/Button';

const theme: Partial<ChakraTheme> = {
    colors: {
        brand: {
            bg: '#FFFCF9',
        },
        black: {
            800: '#2c2c2c',
            700: '#333333',
            600: '#464646',
        },
    },
    breakpoints: {
        sm: '320px',
        sm_large: '425px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
    },

    components: {
        Button,
    },
};

export default extendTheme(theme);
