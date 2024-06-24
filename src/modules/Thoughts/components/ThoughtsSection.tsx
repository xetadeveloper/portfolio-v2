// Modules
import React, { useState } from 'react';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';

// Components
import { Box, Button, Collapse, Flex, Heading, Stack } from '@chakra-ui/react';
import { BsChevronRight } from 'react-icons/bs';
import { ArticleItem } from '~/types';

// Types

export interface ThoughtsSectionProps {
    articles: ArticleItem[];
    articleDateGroup: string;
    isDefaultOpen?: boolean | null;
}

export default function ThoughtsSection({ articles, articleDateGroup, isDefaultOpen }: ThoughtsSectionProps) {
    const [isLocalOpen, setIsLocalOpen] = useState(true);

    const isOpen = isDefaultOpen != undefined ? isDefaultOpen : isLocalOpen;

    return (
        <Stack gap="5px">
            <Button
                onClick={() => setIsLocalOpen(!isLocalOpen)}
                border="none"
                alignItems="center"
                gap="10px"
                maxWidth="90%"
                _hover={{ bg: '#e7e7e7' }}
            >
                <Heading fontWeight="400">{dayjs(articleDateGroup).format('MMM YYYY')}</Heading>
                <Box as={motion.div} animate={{ rotate: isOpen ? 90 : 0 }}>
                    <BsChevronRight style={{ height: '14px', width: '14px' }} />
                </Box>
            </Button>

            <Collapse in={isOpen}>
                <Flex gap="20px" flexWrap="wrap" padding="10px 10px">
                    {articles.map((item, index) => (
                        <Button
                            key={index}
                            as={motion.a}
                            href={`thoughts/${item.url}`}
                            flexDir="column"
                            bg="#fff"
                            borderRadius="5px"
                            padding="20px 15px"
                            gap="20px"
                            border="none"
                            width="300px"
                            alignItems="flex-start"
                            boxShadow="0 2px 4px 0px #C6C6C6"
                            whileHover={{ scale: 1.02 }}
                            maxHeight="fit-content"
                        >
                            <img
                                width="200px"
                                height="200px"
                                src={item.previewImageUrl}
                                style={{ width: '100%', borderRadius: '5px' }}
                            ></img>
                            <Heading
                                width="100%"
                                justifyContent="flex-start"
                                whiteSpace="wrap"
                                textAlign="start"
                                fontWeight="400"
                            >
                                {item.title}
                            </Heading>
                            <Flex justifyContent="space-between" width="100%">
                                <Heading fontSize="14px" fontWeight="400">
                                    {dayjs(item.createdOn).format('DD/MM/YYYY')}
                                </Heading>
                                <Heading fontSize="14px" fontWeight="400">
                                    {item.author}
                                </Heading>
                            </Flex>
                        </Button>
                    ))}
                </Flex>
            </Collapse>
        </Stack>
    );
}
