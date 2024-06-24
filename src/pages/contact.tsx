// Modules
import React from 'react';

// Styles
import { Box, Center, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { RiTwitterXLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { GetStaticPropsResult } from 'next';
import { contentfulClient } from '~/contentful/client';
import {
    TypeContactSkeleton,
    TypeContactWithoutUnresolvableLinksResponse,
    TypeSocialWithoutUnresolvableLinksResponse,
} from '~/contentful/__generated__';
import { getSocialIcon } from '~/utils/socialsIcons';

// Components

// Types
export interface ContactProps {
    data: TypeContactWithoutUnresolvableLinksResponse;
}

export default function Contact({ data }: ContactProps) {
    return (
        <Center bg="brand.bg" minHeight="100%" flexDir="column" gap={{ base: '40px', md: '60px' }} padding="30px">
            <Heading fontWeight="500" fontSize={{ base: '30px', md: '34px' }} textAlign="center">
                {data.fields.headerText}
            </Heading>

            <VStack gap="30px">
                {data.fields.socials.map((social, index) => {
                    const socialT = social as TypeSocialWithoutUnresolvableLinksResponse;

                    return (
                        <a href={socialT.fields.url} key={index} target="_blank">
                            <SimpleGrid
                                as={motion.div}
                                borderRadius="5px"
                                gridTemplateColumns="minmax(auto, 300px) auto"
                                alignItems="center"
                                gap={{ base: '20px', md: '30px' }}
                                padding="10px 20px"
                                whileHover={{ scale: 1.05, backgroundColor: '#434343', color: 'white' }}
                            >
                                <Text>{socialT.fields.description}</Text>
                                <Box height="60px" width="60px">
                                    {getSocialIcon({ icon: socialT.fields.type })}
                                </Box>
                            </SimpleGrid>
                        </a>
                    );
                })}
            </VStack>
        </Center>
    );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<ContactProps>> {
    const data =
        await contentfulClient.withoutUnresolvableLinks.getEntry<TypeContactSkeleton>('4UCEdrKim3TAxmE8JTXDg4');

    if (!data) {
        return { notFound: true };
    }

    return {
        props: {
            data,
        },
    };
}
