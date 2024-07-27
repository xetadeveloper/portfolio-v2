// Modules
import React from 'react';

// Styles
import { Flex, Heading, Stack } from '@chakra-ui/react';
import { FaRegLightbulb } from 'react-icons/fa6';
import WorkItem from './WorkItem';
import { TWorkItem } from '../types';

// Components

// Types
export interface FeaturedWorkItemProps {
    featuredWork: TWorkItem;
}

export default function FeaturedWorkItem({ featuredWork }: FeaturedWorkItemProps) {
    return (
        <Stack gap="20px">
            <Flex alignItems="center" gap="8px">
                <FaRegLightbulb style={{ height: '15px', width: '15px' }} />
                <Heading fontWeight="500">Featured work</Heading>
            </Flex>

            <Flex
                width="100%"
                boxShadow="0 0 4px 1px #999999"
                borderRadius="5px"
                padding={{ base: '10px', md: '30px' }}
            >
                <WorkItem {...featuredWork} containerProps={{ maxWidth: 'auto', width: '100%' }} />
            </Flex>
        </Stack>
    );
}
