// Modules
import React from 'react';

// Styles
import style from './ThoughtsSection.module.css';
import { Button, Flex, Heading, Stack } from '@chakra-ui/react';
import { BsChevronRight } from 'react-icons/bs';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';

// Components

// Types

export type ArticleItem = {
    title: string;
    imageUrl: string;
    author: string;
    createdOn: string;
};

export interface ThoughtsSectionProps {
    articles: ArticleItem[];
    articleDateGroup: string;
}

export default function ThoughtsSection({ articles, articleDateGroup }: ThoughtsSectionProps) {
    return (
        <Stack gap="20px">
            <Button border="none" alignItems="center" gap="10px" maxWidth="90%" _hover={{ bg: '#e7e7e7' }}>
                <Heading fontWeight="400">{dayjs(articleDateGroup).format('MMM YYYY')}</Heading>
                <BsChevronRight style={{ height: '14px', width: '14px' }} />
            </Button>

            <Flex gap="20px" flexWrap="wrap">
                {[...articles, ...articles, ...articles, ...articles].map((item) => (
                    <Button
                        as={motion.button}
                        flexDir="column"
                        bg="#fff"
                        borderRadius="5px"
                        padding="20px 15px"
                        gap="20px"
                        border="none"
                        width="300px"
                        alignItems="flex-start"
                        boxShadow="0 2px 4px 0px #C6C6C6"
                        whileHover={{ scale: 1.05 }}
                    >
                        <img
                            width="200px"
                            height="200px"
                            src={item.imageUrl}
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
        </Stack>
    );
}
