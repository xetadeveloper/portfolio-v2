// Modules
import React from 'react';

// Components
import Image from 'next/image';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';

// Types
export interface WorkItemProps {
    title: string;
    description: string;
    imgUrl: string;
    imgAlt: string;
}

export default function WorkItem({ title, description, imgAlt, imgUrl }: WorkItemProps) {
    return (
        <Flex
            bg="#fff"
            borderRadius="5px"
            padding="30px"
            boxShadow="0 2px 4px 0px #C6C6C6"
            maxWidth="85%"
            columnGap="20px"
            justifyContent="center"
        >
            <Flex flexDir="column" justifyContent="space-between" gap="20px">
                <Flex flexDir="column" gap="20px">
                    <Heading fontWeight="500" fontSize="18px">
                        {title}
                    </Heading>
                    <Text whiteSpace="wrap" maxWidth="600px">
                        {description}
                    </Text>
                </Flex>

                <Button alignSelf="flex-start">Learn more about {title}</Button>
            </Flex>

            <Box
                height="350px"
                width="600px"
                border="1px solid #e2e2e2"
                borderRadius="5px"
                overflow="hidden"
                padding="2px"
            >
                <Image
                    src={imgUrl}
                    alt={imgAlt}
                    width={1920}
                    height={1080}
                    style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                />
            </Box>
        </Flex>
    );
}
