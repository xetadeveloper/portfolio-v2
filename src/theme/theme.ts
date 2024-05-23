import { ChakraTheme, extendTheme } from '@chakra-ui/react';



const theme: Partial<ChakraTheme> = {
    colors: {
        brand: {
            bg: '#FFFCF9',
        },
        black: {
            800: '#2c2c2c',
        },
    },
    breakpoints: {
        sm: '320px',
        sm_large: '425px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
    },

    components:{
        
    }
};

export default extendTheme(theme);
