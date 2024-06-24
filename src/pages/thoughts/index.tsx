// Modules
import React, { useState } from 'react';

// Styles
import { Divider, Flex, Heading, Input, Stack, Text } from '@chakra-ui/react';
import TitleLayout from '~/layouts/TitleLayout';
import ThoughtsSection from '~/modules/Thoughts/components/ThoughtsSection';
import { ArticleItem } from '~/types';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { TypeArticleSkeleton } from '~/contentful/__generated__';
import { contentfulClient } from '~/contentful/client';

// Components

// Types
export interface ThoughtsProps {
    articles: ArticleItem[];
}

export default function Thoughts({ articles }: ThoughtsProps) {
    const [isAllOpen, setIsAllOpen] = useState<boolean | null>(null);
    const [filteredArticles, setFilteredArticles] = useState<ArticleItem[] | null>(null);

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

    function handleSearchFilter(searchTerm: string) {
        if (!searchTerm.trim()) {
            setFilteredArticles(null);
            return;
        }

        const filtered = articles.filter((article) => article.title.includes(searchTerm));
        setFilteredArticles(filtered);
    }

    return (
        <TitleLayout pageTitle="My Thoughts">
            <Flex bg="brand.bg" height="100%" overflow="auto" flexDir="column">
                <Stack padding={{ base: '30px 20px 20px', md: '30px 30px 20px' }} gap="20px">
                    <Heading fontSize="34px">My Thoughts</Heading>
                    <Text maxWidth="800px">
                        Welcome to my world and everything in it. Here I share my opinions on technology, daily life,
                        tips and tricks of web development from my experience. I always welcome constructive criticism
                        with wide arms and love a good discussion, best over coffee or a drink!
                    </Text>
                </Stack>

                <Divider borderColor="#DEDEDE" />

                <Flex flexDir="column" padding={{ base: '30px 20px', md: '30px' }} gap="30px">
                    {/* Search and filters  */}
                    <Flex flexDir="column" ml="10px">
                        <Input
                            placeholder="Search"
                            maxWidth="400px"
                            onChange={(ev) => {
                                handleSearchFilter(ev.target.value);
                            }}
                        />
                    </Flex>

                    {/* Articles listing */}
                    <Flex flexDir="column" gap="40px" overflow="visible">
                        {filteredArticles && !filteredArticles.length ? (
                            <Heading ml="10px" fontSize="14px" fontWeight="400" color="#797979">
                                No items found
                            </Heading>
                        ) : null}

                        {Object.entries(groupArticles(filteredArticles ?? articles))
                            .sort((a, b) => Date.parse(b[0]) - Date.parse(a[0]))
                            .map((group, index) => (
                                <ThoughtsSection
                                    key={index}
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
export async function getStaticProps(): Promise<GetStaticPropsResult<ThoughtsProps>> {
    const data = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeArticleSkeleton>({
        content_type: 'article',
    });

    const articles: ArticleItem[] = data.items.map((item) => ({
        url: item.fields.url,
        author: item.fields.author,
        createdOn: item.sys.createdAt,
        title: item.fields.title,
        previewImageUrl:
            item.fields.previewImageUrl ??
            item.fields.previewImage?.fields.file?.url ??
            '/default-article-thumbnail.jpg',
    }));

    return {
        props: {
            articles,
        },
    };
}
