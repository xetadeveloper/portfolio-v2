// Modules
import React from 'react';

// Styles
import { Flex, Heading } from '@chakra-ui/react';
import WorkItem from './components/WorkItem';
import { TWorkItem } from './types';

// Components

// Types
export interface ProjectsProps {
    works: TWorkItem[];
}

export default function PersonalProjects({ works }: ProjectsProps) {
    return (
        <Flex flexDir="column" gap="40px" height="100%">
            <Heading>
                During my spare time I like to learn new things and dabble into other technologies different from what I
                use daily. These are some of personal projects I have worked on.
            </Heading>

            <Flex flexDir="column" height="100%" gap="40px">
                {works.map((work, index) => (
                    <WorkItem
                        key={index}
                        {...work}
                    />
                ))}
            </Flex>
        </Flex>
    );
}
