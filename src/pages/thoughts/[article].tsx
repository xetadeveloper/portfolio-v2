// Modules
import {
    Button,
    Center,
    Flex,
    Heading,
    Link,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverTrigger,
    Spinner,
    Stack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { RiMenuFold3Fill } from 'react-icons/ri';
import Markdown from 'react-markdown';
import { TypeArticleSkeleton, TypeArticleWithoutUnresolvableLinksResponse } from '~/contentful/__generated__';
import { contentfulClient } from '~/contentful/client';
import NotFound from '../404';
import dayjs from 'dayjs';
import '.';

// Components

// Types
export interface ArticleProps {
    content: TypeArticleWithoutUnresolvableLinksResponse;
    recentArticles: TypeArticleWithoutUnresolvableLinksResponse[];
}

export default function Article({ content, recentArticles }: ArticleProps) {
    const router = useRouter();
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        if (router.isReady && !content) {
            setNotFound(true);
        }
    }, [router.isReady]);

    if (notFound) {
        return <NotFound />;
    }

    if (!content) {
        return (
            <Center height="100vh">
                <Spinner />
            </Center>
        );
    }

    return (
        <Stack bg="brand.bg" height="100%" gap="20px" padding="20px 0">
            <Flex padding=" 0 20px" justifyContent="space-between" gap="18px">
                <Stack>
                    <Heading fontSize={{ base: '18px', md: '24px', lg: '28px' }} fontWeight="400">
                        {content.fields.title}
                    </Heading>

                    <Flex alignItems="center">
                        <Heading fontWeight="400">{content.fields.author}</Heading>
                        <Heading>&nbsp;-&nbsp;</Heading>
                        <Heading fontSize="14px"> {dayjs(content.sys.createdAt).format('DD MMM, YYYY')}</Heading>
                    </Flex>
                </Stack>

                <Flex alignItems="center" gap="10px">
                    <Heading fontWeight="400" display={{ base: 'none', md: 'initial' }}>
                        More Articles
                    </Heading>
                    <Popover placement="left-start" autoFocus>
                        <PopoverTrigger>
                            <Button
                                as={motion.button}
                                whileTap={{ scale: 0.95 }}
                                border="none"
                                borderRadius="50%"
                                width="40px"
                                height="40px"
                                justifyContent="center"
                                padding="0"
                            >
                                <RiMenuFold3Fill style={{ height: '20px', width: '20px' }} />
                            </Button>
                        </PopoverTrigger>

                        <PopoverContent padding="20px 20px 20px" width="auto" minWidth="250px">
                            <PopoverArrow />
                            <PopoverCloseButton border="none" as={Button} height="30px" width="30px" minWidth="auto" />

                            <PopoverBody as={Stack} bg="#fff" gap="20px" padding="0">
                                <Heading as={Link} href="/thoughts" fontWeight="400" width="fit-content">
                                    More Articles
                                </Heading>

                                <Stack gap="20px" height="450px" overflow="auto">
                                    {recentArticles.map((article, index) => (
                                        <Link
                                            as={NextLink}
                                            key={index}
                                            href={article.fields.url}
                                            width="200px"
                                            gap="10px"
                                            display="flex"
                                            flexDir="column"
                                        >
                                            <Image
                                                height={200}
                                                width={200}
                                                src={
                                                    article.fields.previewImageUrl ??
                                                    (article.fields.previewImage?.fields.file?.url &&
                                                        `https://${article.fields.previewImage.fields.file.url}`) ??
                                                    '/default-article-thumbnail.jpg'
                                                }
                                                alt="image for article"
                                                style={{ borderRadius: '5px' }}
                                            />
                                            <Heading fontWeight="400">{article.fields.title}</Heading>
                                        </Link>
                                    ))}
                                </Stack>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </Flex>
            </Flex>

            <Stack
                margin={{ base: '0 10px', md: '0 20px' }}
                padding={{ base: '20px 15px', md: '20px 30px' }}
                overflow="auto"
                flexGrow="1"
                bg="#fff"
                maxW={{ base: '100%', md: '90%' }}
                borderRadius="5px"
                boxShadow="0 2px 4px 0px #C6C6C6"
                // className="markdown-container"
                gap="10px"
            >
                <Markdown className="markdown-container">{content.fields.content}</Markdown>
            </Stack>
        </Stack>
    );
}

export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<ArticleProps>> {
    const { article } = context.params ?? {};

    const data = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeArticleSkeleton>({
        content_type: 'article',
    });

    const articleData = data.items.find((item) => item.fields.url === article);

    if (!articleData) {
        return { notFound: true };
    }

    const sortedArticlesList = data.items
        .sort((a, b) => Date.parse(b.sys.createdAt) - Date.parse(a.sys.createdAt))
        .filter((item) => item.fields.url !== article);

    return {
        props: {
            content: articleData,
            recentArticles: sortedArticlesList.slice(0, 10),
        },
        revalidate: 30,
    };
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
    const data = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeArticleSkeleton>({
        content_type: 'article',
    });

    return {
        fallback: true,
        paths: data.items.map((item) => ({
            params: {
                article: item.fields.url,
            },
        })),
    };
}
