// Modules
import React, { useState } from 'react';

// Styles
import { Button, Divider, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import TitleLayout from '~/layouts/TitleLayout';
import dayjs from 'dayjs';
import { BsChevronRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import ThoughtsSection, { ArticleItem } from '~/modules/Thoughts/components/ThoughtsSection';

// Components

const articlesList: ArticleItem[] = [
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
        createdOn: '2024-02-06',
    },
];

// Types
export interface ThoughtsProps {}

export default function Thoughts(props: ThoughtsProps) {
    const [isAllOpen, setIsAllOpen] = useState<boolean | null>(null);

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
        <TitleLayout pageTitle="My Thoughts">
            <Flex bg="brand.bg" height="100%" overflow="auto" flexDir="column">
                <Stack padding="20px 30px" gap="20px">
                    <Heading fontSize="34px">My Thoughts</Heading>
                    <Text maxWidth="800px">
                        Welcome to my world and everything in it. Here I share my opinions on technology, daily life,
                        tips and tricks of web development from my experience. I always welcome constructive criticism
                        with wide arms and love a good discussion, best over coffee or a drink!
                    </Text>
                </Stack>

                <Divider borderColor="#DEDEDE" />

                <Flex flexDir="column" padding="20px 30px">
                    {/* Search and filters  */}
                    <Flex flexDir="column"></Flex>

                    {/* Articles listing */}
                    <Flex flexDir="column" gap="40px" overflow="visible">
                        {Object.entries(groupArticles(articlesList))
                            .sort((a, b) => Date.parse(b[0]) - Date.parse(a[0]))
                            .map((group) => (
                                <ThoughtsSection
                                    isDefaultOpen={isAllOpen}
                                    articleDateGroup={group[0]}
                                    articles={group[1]}
                                />
                            ))}
                    </Flex>
                </Flex>
            </Flex>
        </TitleLayout>
    );
}
