// Modules
import React from 'react';

// Styles
import { Box, Center, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { RiTwitterXLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { GetStaticPropsResult } from 'next';

// Components

// Types
export interface ContactProps {}

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

export default function Contact(props: ContactProps) {
    return (
        <Center bg="brand.bg" minHeight="100%" flexDir="column" gap="60px">
            <Heading fontWeight="500" fontSize="34px">
                Hey I'd love to get in touch!
            </Heading>

            <VStack gap="30px">
                {contactItems.map(({ icon, description, url }, index) => (
                    <a href={url} key={index} target="_blank">
                        <SimpleGrid
                            as={motion.div}
                            borderRadius="5px"
                            gridTemplateColumns="minmax(auto, 300px) auto"
                            alignItems="center"
                            gap="30px"
                            whileHover={{ scale: 1.2, backgroundColor: '#434343', color: 'white', padding: '10px' }}
                        >
                            <Text>{description}</Text>
                            <Box height="60px" width="60px">
                                {icon}
                            </Box>
                        </SimpleGrid>
                    </a>
                ))}
            </VStack>
        </Center>
    );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Partial<ContactProps>>> {
    return {
        props: {},
    };
}
