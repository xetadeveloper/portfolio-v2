// Modules
import React, { useState } from 'react';

// Styles
import { Flex, Heading } from '@chakra-ui/react';
import WorkItem from './components/WorkItem';
import { products } from './constants';
import WorkItemDetailModal, { WorkItemDetailModalProps } from './components/WorkItemDetailModal';
import { WorkItemDetail } from '~/types';

// Components

// Types
export interface ProductsProps {}

export default function Products(props: ProductsProps) {
    return (
        <Flex flexDir="column" gap="40px" height="100%">
            <Flex justifyContent="space-between">
                <Heading>I've worked on these products which are available for use, I highly recommend them!</Heading>
            </Flex>

            <Flex flexDir="column" height="100%" gap="40px">
                {products.map(({ title, description, imgAlt, imgUrl, techStack, details }, index) => (
                    <WorkItem
                        key={index}
                        title={title}
                        description={description}
                        imgAlt={imgAlt}
                        imgUrl={imgUrl}
                        techStack={techStack}
                        details={details}
                    />
                ))}
            </Flex>
        </Flex>
    );
}
