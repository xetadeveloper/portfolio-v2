'use client';

// Modules
import React, { useState } from 'react';

// Styles
import style from './NavSide.module.css';
import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    Tooltip,
    useBreakpointValue,
} from '@chakra-ui/react';
import { BiSolidHome, BiSolidUser } from 'react-icons/bi';
import { GoHomeFill } from 'react-icons/go';
import { FaBriefcase } from 'react-icons/fa6';
import { BsEnvelopeFill, BsMenuButton, BsMenuButtonFill } from 'react-icons/bs';
import { PiNotepadFill } from 'react-icons/pi';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { fonts } from '~/assets/fonts';
import Link from 'next/link';

// Components

// Types
export interface NavSideProps {}

const menuList = [
    {
        icon: <GoHomeFill style={{ height: '100%', width: '100%' }} />,
        title: 'Home',
        description: 'This is my homepage',
        url: '/',
    },
    {
        icon: <BiSolidUser style={{ height: '100%', width: '100%' }} />,
        title: 'About me',
        description: "It's great to get to know you too!",
        url: '/about',
    },
    {
        icon: <FaBriefcase style={{ height: '100%', width: '100%' }} />,
        title: 'Works',
        description: "Come with me, I'm excited to show you things I have built!",
        url: '/works',
    },
    {
        icon: <BsEnvelopeFill style={{ height: '100%', width: '100%' }} />,
        title: 'Contact me',
        description: "I'm excited to hear from you!",
        url: '/contact',
    },
    {
        icon: <PiNotepadFill style={{ height: '100%', width: '100%' }} />,
        title: 'Thoughts',
        description: 'These are my thoughts based on my experience as a web developer and a human being.',
        url: '/thoughts',
    },
];

export default function NavSide(props: NavSideProps) {
    const [isOpen, setisOpen] = useState(false);
    const router = useRouter();
    const isBase = useBreakpointValue({ base: true, md: false });

    return (
        <motion.div
            initial={{ y: 600 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ position: 'absolute', zIndex: '2', bottom: '20px', right: isBase ? '10px' : '20px' }}
        >
            <Flex flexDir="column" gap="15px">
                <Popover placement="left-start" isOpen={isOpen} defaultIsOpen={false} strategy="absolute">
                    <PopoverTrigger>
                        <Button
                            display={{ base: 'flex', lg: 'none' }}
                            onClick={() => setisOpen((prev) => !prev)}
                            borderRadius="50%"
                            as={motion.button}
                            justifyContent="center"
                            padding="10px"
                            width="50px"
                            height="50px"
                            border="none"
                            boxShadow="0 1px 1px 1px #edebeb"
                            bg="#F1F1F1"
                            whileHover={{ scale: 1.2, backgroundColor: '#464646', color: 'white' }}
                            sx={{ ...fonts.hindSiliguri }}
                            fontWeight="600"
                        >
                            <BsMenuButtonFill />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent
                        position="relative"
                        zIndex="1"
                        height="100%"
                        bg="#F1f1f1"
                        borderRadius="5px"
                        padding="10px 0px 10px"
                        minWidth="0"
                        width="auto"
                        rootProps={{ style: { transform: 'scale(0)' } }}
                    >
                        <PopoverHeader textAlign="left" fontWeight="600">
                            Looking for?
                        </PopoverHeader>
                        <PopoverBody
                            display="flex"
                            padding="0"
                            flexDir="column"
                            mt="0px"
                            textAlign="right"
                            gap="0px"
                            minWidth="180px"
                        >
                            {menuList.map((item, index) => (
                                <>
                                    <Flex
                                        as={Link}
                                        href={item.url}
                                        gap="10px"
                                        alignItems="center"
                                        padding="0 10px"
                                        _hover={{ bg: 'black.700', color: 'white' }}
                                    >
                                        <Box height="18px" width="18px">
                                            {item.icon}
                                        </Box>
                                        <Button
                                            key={index}
                                            as={motion.button}
                                            justifyContent="flex-end"
                                            padding="5px 10px"
                                            borderRadius="none"
                                            minWidth="0"
                                            bg="none"
                                            border="none"
                                            height="60px"
                                            fontWeight="300"
                                            color="inherit"
                                            _hover={{}}
                                        >
                                            {item.title}
                                        </Button>
                                    </Flex>
                                    <Divider bg="#aeaeae" />
                                </>
                            ))}
                        </PopoverBody>
                    </PopoverContent>
                </Popover>

                <Flex flexDir="column" gap="15px" display={{ base: 'none', lg: 'flex' }}>
                    {menuList.map((item, index) => (
                        <Tooltip
                            key={index}
                            label={
                                <Box color="#2c2c2c">
                                    <Heading fontWeight="500" fontSize="16px" mb="5px">
                                        {item.title}
                                    </Heading>
                                    <Heading fontWeight="300" fontSize="14px">
                                        {item.description}
                                    </Heading>
                                </Box>
                            }
                            placement="left"
                            right="20px"
                            bg="#F1F1F1"
                            padding="10px 15px"
                            borderRadius="5px"
                            maxWidth="400px"
                        >
                            <Button
                                borderRadius="50%"
                                as={motion.button}
                                padding="10px"
                                height="40px"
                                border="none"
                                boxShadow="0 1px 1px 1px #edebeb"
                                width="40px"
                                bg="#F1F1F1"
                                whileHover={{ scale: 1.2, backgroundColor: '#464646', color: 'white' }}
                                onClick={() => router.push(item.url)}
                            >
                                {item.icon}
                            </Button>
                        </Tooltip>
                    ))}
                </Flex>
            </Flex>
        </motion.div>
    );
}
