// Modules
import React, { useState } from 'react';

// Styles
import {
    Button,
    Center,
    Divider,
    Flex,
    Heading,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    VStack,
} from '@chakra-ui/react';
import Products from '~/modules/Works/Products';
import Projects from '~/modules/Works/Projects';
import Testimonials from '~/modules/Works/Testimonials';
import { BiDownload } from 'react-icons/bi';
import { AnimatePresence, motion } from 'framer-motion';

// Components

// Types
export interface worksProps {}

const tabs = [
    { title: "Products I've worked on", component: <Products /> },
    { title: 'Personal projects', component: <Projects /> },
    { title: 'Testimonials', component: <Testimonials /> },
];

export default function Works(props: worksProps) {
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <Flex flexDir="column" bg="brand.bg" minHeight="100%" padding="30px 0 20px" height='100%' overflow='auto'>
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
                    leftIcon={<BiDownload />}
                >
                    Download a copy of my resume
                </Button>
            </Flex>

            <Divider borderColor="#DEDEDE" borderWidth="1px" margin="30px 0 20px" />

            <Tabs isLazy padding="0" onChange={(index) => setSelectedTab(index)}>
                <TabList
                    borderBottom="none"
                    padding="0 20px"
                    gap="20px"
                    overflowX="auto"
                    minHeight="50px"
                >
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
