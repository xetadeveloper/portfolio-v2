// Modules
import React from 'react';

// Styles
import style from './Projects.module.css';
import { Box, Button, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import Image from 'next/image';
import WorkItem from './components/WorkItem';
import { projects } from './constants';

// Components

// Types
export interface ProjectsProps {}

export default function Projects(props: ProjectsProps) {
    return (
        <Flex flexDir="column" gap="40px" height="100%">
            <Heading>
                During my spare time I like to learn new things and dabble into other technologies different from what I
                use daily. Here are some of the projects I have worked on.{' '}
            </Heading>

            <Flex flexDir="column" height="100%" gap="40px">
                {projects.map(({ title, description, imgAlt, imgUrl }, index) => (
                    <WorkItem key={index} title={title} description={description} imgAlt={imgAlt} imgUrl={imgUrl} />
                ))}
            </Flex>
        </Flex>
    );
}
