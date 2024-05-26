// Modules
import React from 'react';

// Styles
import { Flex, Heading } from '@chakra-ui/react';
import WorkItem from './components/WorkItem';
import { products } from './constants';

// Components

// Types
export interface ProductsProps {}

export default function Products(props: ProductsProps) {
    return (
        <Flex flexDir="column" gap="40px" height="100%">
            <Flex justifyContent="space-between">
                <Heading>I've worked on these products which are available for use, I highly recommend them!</Heading>
                {/* <Flex>Small boxes or large boxes</Flex> */}
            </Flex>

            <Flex flexDir="column" height="100%" gap="40px">
                {products.map(({ title, description, imgAlt, imgUrl, techStack }, index) => (
                    <WorkItem
                        key={index}
                        title={title}
                        description={description}
                        imgAlt={imgAlt}
                        imgUrl={imgUrl}
                        techStack={techStack}
                    />
                ))}
            </Flex>
        </Flex>
    );
}
