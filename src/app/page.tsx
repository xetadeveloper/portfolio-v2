import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import { fonts } from './fonts';
import { techStack } from '~/config';
import { BsLinkedin, BsTwitterX } from 'react-icons/bs';
import { IoMail } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa6';
import SocialLink from '~/components/SocialLink';
import SlantDivAnimation from '~/components/SlantDivAnimation';

const socials = [
    { icon: <BsTwitterX style={{ height: '100%', width: '100%' }} />, url: 'https://google.com' },
    { icon: <IoMail style={{ height: '100%', width: '100%' }} />, url: 'https://google.com' },
    { icon: <BsLinkedin style={{ height: '100%', width: '100%' }} />, url: 'https://google.com' },
    { icon: <FaGithub style={{ height: '100%', width: '100%' }} />, url: 'https://google.com' },
];

export default function Home() {
    return (
        <Center as="main" bg="brand.bg" border="1px solid rd" height="100vh" position="relative" flexDir="column">
            <SlantDivAnimation />

            <Heading
                className={fonts.im_fell_french_cannon.className}
                fontSize="483px"
                // color="#F3F3F3"
                color="#4B4B4B"
                position="absolute"
                left="50%"
                transform="translate(-50%, -50%)"
                top="50%"
            >
                F
            </Heading>

            <Flex
                flexDir="column"
                border="1px solid blu"
                position="relative"
                zIndex="1"
                textAlign="center"
                color="white"
            >
                <Flex flexDir="column" mb="100px">
                    <Heading fontSize="36px" mb="40px">
                        Hi!
                    </Heading>
                    <Heading fontSize="60px" fontWeight="500" mb="30px">
                        I'm Fego Etese
                    </Heading>
                    <Heading fontSize="32px" fontWeight="100" mb="10px">
                        Web Developer
                    </Heading>
                    <Heading fontSize="20px" fontWeight="100">
                        I love creating clean and beautiful websites with focus on user experience!
                    </Heading>
                </Flex>
                <Flex flexDir="column">
                    <Heading fontWeight="600" fontSize="18px">
                        My Stack
                    </Heading>
                    <Heading fontSize='20px'>{techStack.join(' | ')}</Heading>
                </Flex>
            </Flex>

            <Flex position="absolute" bottom="20px" left="30px" gap="15px">
                {socials.map(({ icon, url }) => (
                    <SocialLink icon={icon} url={url} />
                ))}
            </Flex>
        </Center>
    );
}
