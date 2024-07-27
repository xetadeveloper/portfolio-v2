// Modules
import React from 'react';

// Styles
import { Flex, Heading, Stack } from '@chakra-ui/react';
import WorkItem from './components/WorkItem';
import { TWorkItem } from './types';
import { FaRegLightbulb } from 'react-icons/fa6';
import { IoIosList } from 'react-icons/io';
import FeaturedWorkItem from './components/FeaturedWorkItem';

// Components

// Types
export interface ProjectsProps {
    works: TWorkItem[];
}

export default function PersonalProjects({ works }: ProjectsProps) {
    const featuredWork = works.find((work) => work.isFeaturedProject);

    return (
        <Flex flexDir="column" gap="40px" height="100%">
            <Heading lineHeight='1.8'>
                In my spare time I like to learn new things and dabble into other technologies different from what I use
                daily. These are some of my personal projects I have worked on. <br /> Heads up, some are still actively
                being developed (by me!).
            </Heading>

            {featuredWork ? <FeaturedWorkItem featuredWork={featuredWork} /> : null}

            <Stack gap="20px" mt="40px">
                <Flex alignItems="center" gap="8px">
                    <IoIosList style={{ height: '15px', width: '15px' }} />
                    <Heading fontWeight="500">Other works</Heading>
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
