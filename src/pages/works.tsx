// Modules
import React, { ReactElement, useState } from 'react';

// Styles
import { Box, Button, Divider, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import { BiDownload } from 'react-icons/bi';
import { AnimatePresence, motion } from 'framer-motion';
import { GetStaticPropsResult } from 'next';
import { contentfulClient } from '~/contentful/client';
import Products from '~/modules/Works/Products';
import PersonalProjects from '~/modules/Works/PersonalProjects';
import Testimonials from '~/modules/Works/Testimonials';
import { TWorkItem } from '~/modules/Works/types';
import { TypeProjectSkeleton, TypeResumeSkeleton, TypeTechStack } from '~/contentful/__generated__';
import { Asset } from 'contentful';

// Components

// Types
export interface WorksProps {
    works: TWorkItem[];
    resumeUrl: string;
}

export interface WorkTab {
    title: string;
    component: ReactElement;
    hidden?: boolean;
}

export default function Works({ works, resumeUrl }: WorksProps) {
    const [selectedTab, setSelectedTab] = useState(0);

    const tabs: WorkTab[] = [
        {
            title: 'Personal projects',
            component: <PersonalProjects works={works.filter((project) => project.type.includes('personal'))} />,
        },
        {
            title: "Products I've worked on",
            component: <Products works={works.filter((project) => project.type.includes('commercial'))} />,
        },
        {
            title: 'Testimonials',
            component: <Testimonials />,
            hidden: true,
        },
    ];

    return (
        <Flex flexDir="column" bg="brand.bg" minHeight="100%" padding="30px 0 20px" height="100%" overflow="auto">
            <Flex padding="0 30px" gap="10px" justifyContent="space-between" alignItems="center" flexWrap="wrap">
                <Flex flexDir="column" gap="20px">
                    <Heading fontSize="34px">My Work</Heading>
                    <Text>
                        Pixel perfect reproduction, responsiveness, clean design and secure backends amongst other
                        aspects are my focus.
                    </Text>
                </Flex>

                {resumeUrl ? (
                    <Button
                        as={motion.button}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 1 }}
                        mt="30px"
                        width="fit-content"
                        gap={{ base: '0px', sm_large: '10px' }}
                        leftIcon={<BiDownload />}
                        onClick={() => {
                            if (resumeUrl) {
                                window.open(resumeUrl, '_blank');
                            }
                        }}
                        whiteSpace="break-spaces"
                    >
                        Download a copy of my resume
                    </Button>
                ) : null}
            </Flex>

            <Divider margin="30px 0 20px" />

            <Tabs isLazy padding="0" onChange={(index) => setSelectedTab(index)}>
                <TabList borderBottom="none" padding="0 20px" gap="20px" overflowX="auto" minHeight="50px">
                    {tabs
                        .filter((tab) => !tab.hidden)
                        .map((tab, index) => (
                            <Tab
                                minWidth="fit-content"
                                padding="10px 10px"
                                key={index}
                                borderRadius="5px"
                                height="100%"
                                _hover={{
                                    bg: selectedTab === index ? 'black.600' : '#e2e2e2',
                                }}
                                border="none"
                                bg={selectedTab === index ? 'black.600' : 'transparent'}
                                color={selectedTab === index ? 'white' : 'black.700'}
                            >
                                {tab.title}
                            </Tab>
                        ))}
                </TabList>

                <Flex mt="20px" gap="20px" justifyContent="center" display={{ base: 'flex', md: 'none' }}>
                    {tabs
                        .filter((tab) => !tab.hidden)
                        .map((_, index) => (
                            <Box
                                key={index}
                                borderRadius="50%"
                                border="1px solid transparent"
                                borderColor="#929292"
                                height="10px"
                                width="10px"
                                bg={index === selectedTab ? 'black.600' : 'transparent'}
                            ></Box>
                        ))}
                </Flex>

                <TabPanels padding={{ base: '15px', md: '30px 30px' }}>
                    {tabs
                        .filter((tab) => !tab.hidden)
                        .map(({ component }, index) => (
                            <TabPanel padding="0" key={index}>
                                <AnimatePresence>
                                    <motion.div
                                        initial={{ x: -300, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: -300, opacity: 0 }}
                                        transition={{
                                            type: 'tween',
                                            stiffness: 160,
                                            damping: 20,
                                            duration: 0.4,
                                        }}
                                    >
                                        {component}
                                    </motion.div>
                                </AnimatePresence>
                            </TabPanel>
                        ))}
                </TabPanels>
            </Tabs>
        </Flex>
    );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Partial<WorksProps>>> {
    const content = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeProjectSkeleton>({
        content_type: 'project',
    });
    const resume =
        await contentfulClient.withoutUnresolvableLinks.getEntry<TypeResumeSkeleton>('7JIhnySL1tV8Y4dNFF4aTN');

    const works = content.items.map((work) => {
        const previewImage = work.fields.previewImage;
        const galleryImagesUrls: string[] = [];

        if (previewImage?.fields.file?.url) {
            galleryImagesUrls.push('https:' + previewImage.fields.file.url);
        }

        const galleryImages = work.fields.galleryImages;
        if (galleryImages) {
            galleryImages.forEach((image) => {
                const imageItem = image as Asset<undefined, string>;
                if (imageItem.fields.file?.url) {
                    galleryImagesUrls.push('https:' + imageItem.fields.file.url);
                }
            });
        }

        const techStack = work.fields.stack as TypeTechStack<'WITHOUT_UNRESOLVABLE_LINKS'>;

        const converted: TWorkItem = {
            type: work.fields.type,
            title: work.fields.title,
            shortDescription: work.fields.shortDescription,
            longDescription: work.fields.details,
            galleryImagesUrl: galleryImagesUrls,
            liveLink: work.fields.liveLink,
            previewDescription: work.fields.previewDescription,
            previewImageUrl: previewImage ? 'https:' + previewImage.fields.file?.url : '',
            previewImgAlt: previewImage?.fields.description ?? `Preview image of ${work.fields.title}`,
            stack: techStack.fields.stack,
            status: work.fields.status,
            isPrivateRepository: work.fields.isPrivateRepository ?? false,
            isFeaturedProject: work.fields.isFeaturedProject,
        };

        if (work.fields.repositoryLink) {
            converted.repoLink = work.fields.repositoryLink;
        }

        return converted;
    });

    return { props: { works, resumeUrl: resume.fields.resume?.fields.file?.url ?? '' }, revalidate: 30 };
}
