// Modules
import React, { useState } from 'react';

// Styles
import { Flex, Heading } from '@chakra-ui/react';
import WorkItem from './components/WorkItem';
import { TWorkItem } from './types';

// Components

// Types
export interface ProductsProps {
    works: TWorkItem[];
}

export default function Products({ works }: ProductsProps) {
    return (
        <Flex flexDir="column" gap="40px" height="100%">
            <Flex justifyContent="space-between">
                <Heading>I've worked on these products which are available for use, I highly recommend them!</Heading>
            </Flex>

            <Flex flexDir="column" height="100%" gap="40px">
                {works.map((props, index) => (
                    <WorkItem key={index} {...props} />
                ))}
            </Flex>
        </Flex>
    );
}
