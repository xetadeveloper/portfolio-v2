// Modules
import React from 'react';

// Styles
import { Flex, Heading, Stack } from '@chakra-ui/react';
import WorkItem from './components/WorkItem';
import { TWorkItem } from './types';
import { FaRegLightbulb } from 'react-icons/fa6';
import { IoIosList } from 'react-icons/io';

// Components

// Types
export interface ProjectsProps {
    works: TWorkItem[];
}

export default function PersonalProjects({ works }: ProjectsProps) {
    const featuredWork = works.find((work) => work.isFeaturedProject);

    return (
        <Flex flexDir="column" gap="40px" height="100%">
            <Heading>
                During my spare time I like to learn new things and dabble into other technologies different from what I
                use daily. These are some of personal projects I have worked on.
            </Heading>

            {featuredWork ? (
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
            ) : null}

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
