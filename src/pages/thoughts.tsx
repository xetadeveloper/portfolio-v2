// Modules
import React from 'react';

// Styles
import { Button, Center, Divider, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import TitleLayout from '~/layouts/TitleLayout';
import dayjs from 'dayjs';
import { BiChevronRight } from 'react-icons/bi';
import { BsChevronRight } from 'react-icons/bs';
import { motion } from 'framer-motion';

// Components

// Types
export interface ThoughtsProps {}

const articlesList = [
    {
        title: 'How to create a portfolio that stands out',
        imageUrl: '/article-demo.jpg',
        author: 'Fego Etese',
        createdOn: '2024-05-06',
    },
    {
        title: 'How to create a portfolio that stands out',
        imageUrl: '/article-demo.jpg',
        author: 'Fego Etese',
        createdOn: '2024-05-06',
    },
    {
        title: 'How to create a portfolio that stands out',
        imageUrl: '/article-demo.jpg',
        author: 'Fego Etese',
        createdOn: '2024-05-06',
    },
];

type ArticleItem = {
    title: string;
    imageUrl: string;
    author: string;
    createdOn: string;
};

export default function Thoughts(props: ThoughtsProps) {
    function getArticleYearAndMonth(dateString: string) {
        const index = dateString.lastIndexOf('-');
        return dateString.substring(0, index) + '-01';
    }

    function groupArticles(articles: ArticleItem[]): { [key: string]: ArticleItem[] } {
        const group: { [key: string]: ArticleItem[] } = {};

        articles.forEach((article) => {
            const period = getArticleYearAndMonth(article.createdOn);
            if (group[period]) {
                group[period].push(article);
            } else {
                group[period] = [article];
            }
        });

        return group;
    }

    return (
        <TitleLayout pageTitle="Thoughts">
            <Flex bg="brand.bg" height="100%" overflow="auto" flexDir="column">
                <Stack padding="20px 30px" gap="20px">
                    <Heading fontSize="34px">Thoughts</Heading>
                    <Text maxWidth="800px">
                        Welcome to my world and everything in it. Here I share my opinions on technology, daily life,
                        tips and tricks of web development from my experience. I always welcome constructive criticism
                        with wide arms and love a good discussion, best over coffee or a drink!{' '}
                    </Text>
                </Stack>

                <Divider borderColor="#DEDEDE" />

                <Flex flexDir="column" padding="20px 30px">
                    {/* Search and filters  */}
                    <Flex flexDir="column"></Flex>

                    {/* Articles listing */}
                    <Flex flexDir="column">
                        {Object.entries(groupArticles(articlesList))
                            .sort((a, b) => Date.parse(a[0]) - Date.parse(b[0]))
                            .map((group) => (
                                <Stack gap="20px">
                                    <Button border="none" alignItems="center" gap="10px" _hover={{bg: '#e7e7e7'}}>
                                        <Heading fontWeight="400">{dayjs(group[0]).format('MMM YYYY')}</Heading>
                                        <BsChevronRight style={{ height: '14px', width: '14px' }} />
                                    </Button>

                                    <Flex gap="20px" flexWrap="wrap">
                                        {[...group[1], ...group[1], ...group[1], ...group[1]].map((item) => (
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
                            ))}
                    </Flex>
                </Flex>
            </Flex>
        </TitleLayout>
    );
}
