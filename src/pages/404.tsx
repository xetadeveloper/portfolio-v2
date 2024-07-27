// Modules
import React from 'react';

// Styles
import { Box, Button, Center, Heading } from '@chakra-ui/react';
import Link from 'next/link';

// Components

// Types
export interface NotFoundProps {}

export default function NotFound(props: NotFoundProps) {
    return (
        <Center bg="brand.bg" flexDirection="column" height="100%" width="100%">
            <Box fontSize="80px">🥲</Box>
            <Heading mt="10px" fontSize="40px">
                We couldn't find this page!
            </Heading>

            <Button mt="40px" as={Link} href="/thoughts">
                Back to articles list
            </Button>
        </Center>
    );
}
