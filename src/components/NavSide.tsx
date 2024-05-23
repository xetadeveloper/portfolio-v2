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
} from '@chakra-ui/react';
import { BiSolidHome, BiSolidUser } from 'react-icons/bi';
import { GoHomeFill } from 'react-icons/go';
import { FaBriefcase } from 'react-icons/fa6';
import { BsEnvelopeFill, BsMenuButton, BsMenuButtonFill } from 'react-icons/bs';
import { PiNotepadFill } from 'react-icons/pi';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { fonts } from '~/assets/fonts';

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

    return (
        <Flex flexDir="column" gap="15px" bottom="20px" right="10px" position="absolute">
            <Popover placement="left-start">
                <PopoverTrigger>
                    <Button
                        display={{ base: 'flex', lg: 'none' }}
                        onClick={() => setisOpen((prev) => !prev)}
                        borderRadius="50%"
                        as={motion.button}
                        padding="10px"
                        height="60px"
                        width="60px"
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
                >
                    <PopoverHeader textAlign="left" fontWeight="600">
                        Looking for?
                    </PopoverHeader>
                    <PopoverBody display="flex" flexDir="column" mt="0px" textAlign="right" gap="0px" minWidth="180px">
                        {menuList.map((item, index) => (
                            <>
                                <Flex gap="10px" alignItems='center'>
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
                                        height="60px"
                                        fontWeight="300"
                                        // border="1px solid #aeaeae"
                                        // borderRight="none"
                                        // borderLeft="none"
                                        // borderTop={index === 0 ? 'none' : '1px solid #aeaeae'}
                                        // borderBottom={index === menuList.length - 1 ? 'none' : '1px solid #aeaeae'}
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
                            <Box>
                                <Heading fontWeight="600" mb="3px">
                                    {item.title}
                                </Heading>
                                <Heading fontSize="14px">{item.description}</Heading>
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
    );
}
