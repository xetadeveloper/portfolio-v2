// Modules
import React, { useState } from 'react';

// Components
import Image from 'next/image';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import WorkItemDetailModal from './WorkItemDetailModal';
import { TWorkItem } from '../types';
import { getTechIcon, getTechDisplayTitle } from '~/utils/techStackIcons';

// Types
export interface WorkItemProps {
    onClick?: () => void;
    showDetails?: boolean;
}

export default function WorkItem(props: WorkItemProps & TWorkItem) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {
        title,
        shortDescription: description,
        previewImgAlt: imgAlt,
        previewImageUrl,
        stack,
        onClick,
        showDetails = true,
    } = props;

    return (
        <Flex
            bg="#fff"
            borderRadius="5px"
            padding="30px"
            boxShadow="0 2px 4px 0px #C6C6C6"
            maxWidth={{ md: '85%' }}
            columnGap="20px"
            justifyContent="center"
            textAlign="start"
            as={motion.div}
            whileHover={{ scale: 1.01 }}
        >
            <Flex
                flexShrink="1"
                flexDir="column"
                justifyContent="space-between"
                minHeight="100%"
                gap="20px"
                width="100%"
            >
                <Flex flexDir="column" gap="20px">
                    <Heading fontWeight="500" fontSize="18px">
                        {title}
                    </Heading>
                    <Box
                        display={{ base: 'block', md: 'none' }}
                        height="200px"
                        width="100%"
                        minWidth="0"
                        border="1px solid #e2e2e2"
                        borderRadius="5px"
                        overflow="hidden"
                        padding="2px"
                    >
                        <Image
                            src={previewImageUrl}
                            alt={imgAlt}
                            width={1920}
                            height={1080}
                            style={{ height: '100%', width: '100%', objectFit: 'contain' }}
                        />
                    </Box>
                    <Text whiteSpace="wrap" maxWidth="600px">
                        {description}
                    </Text>
                </Flex>

                <Flex
                    alignSelf={{ base: 'center', md: 'flex-start' }}
                    justifyContent={{ base: 'center', md: 'flex-start' }}
                    gap="20px"
                    flexWrap="wrap"
                >
                    {stack.map((item, index) => {
                        const icon = getTechIcon({ icon: item });

                        return (
                            <Flex key={index} alignItems="center" gap="10px">
                                <Box height="40px" width="40px" color="#383838">
                                    {icon}
                                </Box>
                                <Heading fontWeight="400">{getTechDisplayTitle(item)}</Heading>
                            </Flex>
                        );
                    })}
                </Flex>

                <Button
                    alignSelf={{ base: '', md: 'flex-start' }}
                    justifyContent={{ base: 'center', md: 'flex-start' }}
                    onClick={() => setIsModalOpen(showDetails ? true : false)}
                >
                    Learn more about {title}
                </Button>
            </Flex>

            <Box
                display={{ base: 'none', md: 'block' }}
                height="320px"
                width="600px"
                border="1px solid #e2e2e2"
                borderRadius="5px"
                overflow="hidden"
                padding="2px"
                flexGrow="1"
            >
                <Image
                    src={previewImageUrl }
                    alt={imgAlt}
                    width={600}
                    height={320}
                    style={{ height: '100%', width: '100%', objectFit: 'contain' }}
                />
            </Box>

            <WorkItemDetailModal onClose={() => setIsModalOpen(false)} isOpen={isModalOpen} {...props} />
        </Flex>
    );
}
