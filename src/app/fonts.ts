import { Hind_Siliguri, IM_Fell_French_Canon } from 'next/font/google';

const hindSiliguri = Hind_Siliguri({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300','400', '500', '600'],
});

const im_fell_french_cannon = IM_Fell_French_Canon({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});

export const fonts = {
    hindSiliguri,
    im_fell_french_cannon,
};
