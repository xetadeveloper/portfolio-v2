import { Heading, HeadingProps } from '@chakra-ui/react';
import { ReactElement } from 'react';

interface AboutTitleProps {
    children: string | ReactElement;
}

export default function AboutTitle({ children, ...props }: AboutTitleProps & Omit<HeadingProps, 'children'>) {
    return (
        <Heading fontWeight="400" fontSize="20px" {...props}>
            {children}
        </Heading>
    );
}
