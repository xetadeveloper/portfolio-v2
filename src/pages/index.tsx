import { Button, Center, Flex, Heading } from '@chakra-ui/react';
import { fonts } from '../assets/fonts';
import { BsLinkedin, BsTwitterX } from 'react-icons/bs';
import { IoMail } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa6';
import SocialLink from '~/components/SocialLink';
import SlantDivAnimation from '~/components/SlantDivAnimation';
import { motion } from 'framer-motion';
import { GoChevronRight } from 'react-icons/go';
import Link from 'next/link';

const socials = [
    { icon: <BsTwitterX style={{ height: '100%', width: '100%' }} />, url: 'https://google.com' },
    { icon: <IoMail style={{ height: '100%', width: '100%' }} />, url: 'https://google.com' },
    { icon: <BsLinkedin style={{ height: '100%', width: '100%' }} />, url: 'https://google.com' },
    { icon: <FaGithub style={{ height: '100%', width: '100%' }} />, url: 'https://google.com' },
];

interface HomeProps {
    developerName: string;
}

const delay = 1;

const techStack = ['MongoDB', 'React', 'NextJS', 'NodeJS'];

export default function Home({ developerName }: HomeProps) {
    console.log('Developer name gotten: ', developerName);

    return (
        <Center
            as="main"
            bg="brand.bg"
            height="100%"
            position="relative"
            flexDir="column"
            padding="10px"
            overflow="hidden"
            // justifyContent="space-between"
        >
            <Heading
                style={{ userSelect: 'none' }}
                draggable={false}
                fontSize={{ base: '400px', md: '483px' }}
                position="absolute"
                left="50%"
                transform="translate(-50%, -50%)"
                top="50%"
                sx={{ ...fonts.im_fell_french_cannon.style }}
            >
                <motion.div
                    initial={{ color: '#F3F3F3' }}
                    // animate={{ color: '#4B4B4B' }}
                    transition={{ delay }}
                >
                    F
                </motion.div>
            </Heading>

            <motion.div
                // animate={{ color: '#FFF' }}
                initial={{ color: '#2c2c2c' }}
                transition={{ delay, duration: 1 }}
            >
                <Flex
                    style={{ userSelect: 'none' }}
                    flexDir="column"
                    border="1px solid blu"
                    position="relative"
                    zIndex="1"
                    textAlign="center"
                >
                    <Flex flexDir="column" mb={{ base: '70px', md: '100px' }}>
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

                    <motion.div
                        initial={{ opacity: 0, y: 120 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.5, type: 'spring' }}
                    >
                        <Flex flexDir="column">
                            <Heading fontWeight="600" fontSize={{ base: '16px', md: '18px' }}>
                                My Stack
                            </Heading>
                            <Heading fontSize={{ base: '16px', md: '20px' }} fontWeight="300">
                                {techStack.join(' | ')}
                            </Heading>
                        </Flex>
                    </motion.div>
                </Flex>
            </motion.div>

            <motion.div
                whileTap={{ scale: 1, transition: { delay: 0, duration: 0.3, type: 'tween' } }}
                whileHover={{ scale: 1.1, transition: { delay: 0, duration: 0.3, type: 'tween' } }}
                initial={{ y: 400 }}
                animate={{ y: 0, transition: { delay: 1, duration: 0.5, type: 'spring' } }}
                style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}
            >
                <Button
                    as={Link}
                    href="/works"
                    width="200px"
                    height="50px"
                    fontSize="16px"
                    fontWeight="300"
                    rightIcon={<GoChevronRight style={{ height: '20px', width: '20px', right: '5px' }} />}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    Check out my work
                </Button>
            </motion.div>

            <Flex
                as={motion.div}
                initial={{ x: -200 }}
                animate={{ x: 0 }}
                position="absolute"
                bottom="20px"
                left={{ base: '20px', md: '30px' }}
                gap="18px"
            >
                {socials.map(({ icon, url }, index) => (
                    <SocialLink icon={icon} url={url} key={index} />
                ))}
            </Flex>
        </Center>
    );
}
