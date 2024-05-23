'use client';
import { Center, Flex, Heading } from '@chakra-ui/react';
import { fonts } from '../assets/fonts';
import { techStack } from '~/config';
import { BsLinkedin, BsTwitterX } from 'react-icons/bs';
import { IoMail } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa6';
import SocialLink from '~/components/SocialLink';
import SlantDivAnimation from '~/components/SlantDivAnimation';
import { motion } from 'framer-motion';
import NavSide from '~/components/NavSide';
import { GetStaticPropsResult } from 'next';

const socials = [
    { icon: <BsTwitterX style={{ height: '100%', width: '100%' }} />, url: 'https://google.com' },
    { icon: <IoMail style={{ height: '100%', width: '100%' }} />, url: 'https://google.com' },
    { icon: <BsLinkedin style={{ height: '100%', width: '100%' }} />, url: 'https://google.com' },
    { icon: <FaGithub style={{ height: '100%', width: '100%' }} />, url: 'https://google.com' },
];

interface HomeProps {}

export default function Home(props: HomeProps) {
    return (
        <Center
            as="main"
            bg="brand.bg"
            border="1px solid rd"
            height="100vh"
            position="relative"
            flexDir="column"
            padding="10px"
            overflow="hidden"
        >
            {/* <SlantDivAnimation /> */}

            <Heading
                style={{ userSelect: 'none' }}
                draggable={false}
                fontSize={{ base: '300px', md: '483px' }}
                position="absolute"
                left="50%"
                transform="translate(-50%, -50%)"
                top="50%"
                sx={{ ...fonts.im_fell_french_cannon.style }}
            >
                <motion.div
                    initial={{ color: '#F3F3F3' }}
                    // animate={{ color: '#4B4B4B' }}
                    transition={{ delay: 0.5 }}
                >
                    F
                </motion.div>
            </Heading>

            <motion.div
                // animate={{ color: '#FFF' }}
                initial={{ color: '#2c2c2c' }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                <Flex
                    style={{ userSelect: 'none' }}
                    flexDir="column"
                    border="1px solid blu"
                    position="relative"
                    zIndex="1"
                    textAlign="center"
                >
                    <Flex flexDir="column" mb="100px">
                        <Heading fontSize={{ base: '25px', md: '36px' }} mb="40px" fontWeight="300">
                            Hi!
                        </Heading>
                        <Heading fontSize={{ base: '40px', md: '60px' }} fontWeight="500" mb="30px">
                            I'm Fego Etese
                        </Heading>
                        <Heading fontSize={{ base: '25px', md: '32px' }} fontWeight="100" mb="10px">
                            Web Developer
                        </Heading>
                        <Heading fontSize={{ base: '16px', md: '20px' }} fontWeight="100">
                            I love creating clean and beautiful websites with focus on user experience!
                        </Heading>
                    </Flex>
                    <Flex flexDir="column">
                        <Heading fontWeight="600" fontSize="18px">
                            My Stack
                        </Heading>
                        <Heading fontSize="20px" fontWeight="300">
                            {techStack.join(' | ')}
                        </Heading>
                    </Flex>
                </Flex>
            </motion.div>

            <Flex position="absolute" bottom="20px" left="30px" gap="15px">
                {socials.map(({ icon, url }, index) => (
                    <SocialLink icon={icon} url={url} key={index} />
                ))}
            </Flex>

            <NavSide />
        </Center>
    );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Partial<HomeProps>>> {
    return {
        props: {},
    };
}
