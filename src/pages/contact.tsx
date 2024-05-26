// Modules
import React from 'react';

// Styles
import style from './contact.module.css';
import { Box, Center, Flex, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { BsTwitterX } from 'react-icons/bs';
import { RiTwitterXLine } from 'react-icons/ri';

// Components

// Types
export interface contactProps {}

const contactItems = [
    {
        icon: <FaGithub style={{ height: '100%', width: '100%' }} />,
        description: 'You can find my personal projects here, I’ll love to collaborate too!',
        url: 'https://github.com/xetadeveloper',
    },
    {
        icon: <FaLinkedin style={{ height: '100%', width: '100%' }} />,
        description: 'Let’s connect, and grow our professional network.',
        url: 'https://www.linkedin.com/in/fego-etese-b9136a76/',
    },
    {
        icon: <MdEmail style={{ height: '100%', width: '100%' }} />,
        description: 'Any inquiries, feel free to email me, I’ll respond as soon as I get it!',
        url: 'mailto:jazelogin@hotmail.com',
    },
    {
        icon: <RiTwitterXLine style={{ height: '100%', width: '100%' }} />,
        description: "Let's exchange ideas.",
        url: 'https://twitter.com/theXOSound',
    },
];

export default function Contact(props: contactProps) {
    return (
        <Center bg="brand.bg" minHeight="100%" flexDir="column" gap="60px">
            <Heading fontWeight="500" fontSize="34px">
                Hey I'd love to get in touch!
            </Heading>

            <VStack gap="30px">
                {contactItems.map(({ icon, description, url }, index) => (
                    <SimpleGrid
                        gridTemplateColumns="minmax(auto, 300px) auto"
                        key={index}
                        alignItems="center"
                        gap="30px"
                    >
                        <Text>{description}</Text>
                        <a href={url} style={{ height: '60px', width: '60px' }}>
                            {icon}
                        </a>
                    </SimpleGrid>
                ))}
            </VStack>
        </Center>
    );
}
