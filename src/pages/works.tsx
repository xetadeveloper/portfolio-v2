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
import { ProjectType } from '~/contentful/types/ProjectType';
import { TWorkItem } from '~/modules/Works/types';

// Components

// Types
export interface WorksProps {
    works: TWorkItem[];
}

export interface WorkTab {
    title: string;
    component: ReactElement;
}

export default function Works({ works }: WorksProps) {
    const [selectedTab, setSelectedTab] = useState(0);

    const tabs: WorkTab[] = [
        {
            title: "Products I've worked on",
            component: <Products works={works.filter((project) => project.type === 'commercial')} />,
        },
        {
            title: 'Personal projects',
            component: <PersonalProjects works={works.filter((project) => project.type === 'personal')} />,
        },
        {
            title: 'Testimonials',
            component: <Testimonials />,
        },
    ];

    return (
        <Flex flexDir="column" bg="brand.bg" minHeight="100%" padding="30px 0 20px" height="100%" overflow="auto">
            <Flex padding="0 30px" gap="10px" justifyContent="space-between" alignItems="center" flexWrap="wrap">
                <Flex flexDir="column" gap="20px">
                    <Heading fontSize="34px">My Work</Heading>
                    <Text>
                        Pixel perfect reproduction, clean design and secure backends amongst other aspects are my focus.
                    </Text>
                </Flex>

                <Button
                    as={motion.button}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 1 }}
                    mt="30px"
                    width="fit-content"
                    gap={{ base: '0px', sm_large: '10px' }}
                    leftIcon={<BiDownload />}
                >
                    Download a copy of my resume
                </Button>
            </Flex>

            <Divider margin="30px 0 20px" />

            <Tabs isLazy padding="0" onChange={(index) => setSelectedTab(index)}>
                <TabList borderBottom="none" padding="0 20px" gap="20px" overflowX="auto" minHeight="50px">
                    {tabs.map((tab, index) => (
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
                    {tabs.map((_, index) => (
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
                <TabPanels padding="30px 30px">
                    {tabs.map(({ component }, index) => (
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
    const content = await contentfulClient.getEntries<ProjectType>({ content_type: 'project' });
    // console.log('Content fetched from contenful: ', JSON.stringify(content, null, 2));

    const works = content.items.map((work) => {
        const converted: TWorkItem = {
            type: work.fields.type[0],
            title: work.fields.title,
            shortDescription: work.fields.shortDescription,
            imgAlt: `Preview image of ${work.fields.title}`,
            imgUrl: work.fields.previewImage,
            stack: work.fields.stack,
            status: work.fields.status,
            longDescription: work.fields.details,
            galleryImages: work.fields.galleryImages ?? [],
            liveLink: work.fields.liveLink,
            repoLink: work.fields.repositoryLink,
            previewDescription: work.fields.previewDescription,
            previewImage: work.fields.previewImage,
        };

        return converted;
    });

    return { props: { works } };
}

const demo = {
    sys: {
        type: 'Array',
    },
    total: 1,
    skip: 0,
    limit: 100,
    items: [
        {
            metadata: {
                tags: [],
            },
            sys: {
                space: {
                    sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'swrf8du58qn2',
                    },
                },
                id: '1E7YS8W967rYjxt0F3pEPc',
                type: 'Entry',
                createdAt: '2024-06-09T21:05:15.604Z',
                updatedAt: '2024-06-16T19:02:42.380Z',
                environment: {
                    sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                    },
                },
                revision: 2,
                contentType: {
                    sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'project',
                    },
                },
                locale: 'en-US',
            },
            fields: {
                type: ['personal'],
                title: 'JournalMe',
                shortDescription:
                    'JournalMe is a trading journal app I created to help traders monitor their trading performance. It has charts which display a trader’s progress over time, which were implemented using Charts.js library.\n\nThe App is fully responsive and displays properly over all devices. With JournalMe you can create, edit and delete trades with ease as the user interface is easy to understand.',
                stack: ['react', 'nodejs', 'mongodb', 'git', 'github', 'expressjs'],
                previewDescription: 'A forex journaling application for ease of use and clean UI',
                previewImage: {
                    metadata: {
                        tags: [],
                    },
                    sys: {
                        space: {
                            sys: {
                                type: 'Link',
                                linkType: 'Space',
                                id: 'swrf8du58qn2',
                            },
                        },
                        id: '327pHZfa44lJLCMZcksHV5',
                        type: 'Asset',
                        createdAt: '2024-06-09T21:04:49.892Z',
                        updatedAt: '2024-06-09T21:04:49.892Z',
                        environment: {
                            sys: {
                                id: 'master',
                                type: 'Link',
                                linkType: 'Environment',
                            },
                        },
                        revision: 1,
                        locale: 'en-US',
                    },
                    fields: {
                        title: 'JournalMe Homepage',
                        description: 'Homepage screenshot of JournalMe',
                        file: {
                            url: '//images.ctfassets.net/swrf8du58qn2/327pHZfa44lJLCMZcksHV5/4a2f93e6ded247512f4e7555d7f23da4/JournalMe.png',
                            details: {
                                size: 1450580,
                                image: {
                                    width: 1870,
                                    height: 953,
                                },
                            },
                            fileName: 'JournalMe.png',
                            contentType: 'image/png',
                        },
                    },
                },
                repositoryLink: 'https://github.com/xetadeveloper/journalme',
                liveLink: 'https://journalme.herokuapp.com/',
                details:
                    '__MongoDB__\nMongoDB NoSQL database is used to store the trader’s data on user info and trades info, and the data is stored in the cloud using the MongoDB Atlas DBaaS platform, which employs cluster support as replica sets of the database to increase data redundancy and availability.\n\n__ExpressJS__\nFor the web server, ExpressJS was used to respond to requests from clients. The REST API was designed such that it can be accessed using any type of client e.g native mobile app, web browser etc.\n\nAuthentication was also added using session-based authentication means.\n\n![JournalMe Article Image](//images.ctfassets.net/swrf8du58qn2/7sk2Sf1RIgxzeZnPWqZIBc/cb4aa0394cf3a3a55ee2ebd3a5bac2ea/5df874c3720a98fa4944ff498c6b7a90.jpg)\n\n__React__\nFor the client frontend on the browser, React was used to create an SPA to avoid always refreshing the page on route change.\n\nRedux was also used for state management in the React App.',
                status: true,
            },
        },
    ],
    includes: {
        Asset: [
            {
                metadata: {
                    tags: [],
                },
                sys: {
                    space: {
                        sys: {
                            type: 'Link',
                            linkType: 'Space',
                            id: 'swrf8du58qn2',
                        },
                    },
                    id: '327pHZfa44lJLCMZcksHV5',
                    type: 'Asset',
                    createdAt: '2024-06-09T21:04:49.892Z',
                    updatedAt: '2024-06-09T21:04:49.892Z',
                    environment: {
                        sys: {
                            id: 'master',
                            type: 'Link',
                            linkType: 'Environment',
                        },
                    },
                    revision: 1,
                    locale: 'en-US',
                },
                fields: {
                    title: 'JournalMe Homepage',
                    description: 'Homepage screenshot of JournalMe',
                    file: {
                        url: '//images.ctfassets.net/swrf8du58qn2/327pHZfa44lJLCMZcksHV5/4a2f93e6ded247512f4e7555d7f23da4/JournalMe.png',
                        details: {
                            size: 1450580,
                            image: {
                                width: 1870,
                                height: 953,
                            },
                        },
                        fileName: 'JournalMe.png',
                        contentType: 'image/png',
                    },
                },
            },
        ],
    },
};
