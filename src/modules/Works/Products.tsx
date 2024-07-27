// Modules
import React, { useState } from 'react';

// Styles
import { Flex, Heading, Stack } from '@chakra-ui/react';
import WorkItem from './components/WorkItem';
import { TWorkItem } from './types';
import FeaturedWorkItem from './components/FeaturedWorkItem';
import { IoIosList } from 'react-icons/io';

// Components

// Types
export interface ProductsProps {
    works: TWorkItem[];
}

export default function Products({ works }: ProductsProps) {
    const featuredWork = works.find((work) => work.isFeaturedProject);

    return (
        <Flex flexDir="column" gap="40px" height="100%">
            <Flex justifyContent="space-between">
                <Heading lineHeight="1.8">
                    I love to work on products and ideas that bring value to people and I've worked on these products
                    (not owned by me), which are available for public use. <br /> I highly recommend them and you should
                    give them a try! 😉
                </Heading>
            </Flex>

            {featuredWork ? <FeaturedWorkItem featuredWork={featuredWork} /> : null}

            <Stack gap="20px" mt="40px">
                <Flex alignItems="center" gap="8px">
                    <IoIosList style={{ height: '15px', width: '15px' }} />
                    <Heading fontWeight="500">Other products I've worked on</Heading>
                </Flex>

                <Flex flexDir="column" height="100%" gap="30px">
                    {works
                        .filter((work) => work.shortDescription !== featuredWork?.shortDescription)
                        .map((work, index) => (
                            <WorkItem key={index} {...work} />
                        ))}
                </Flex>
            </Stack>
        </Flex>
    );
}
