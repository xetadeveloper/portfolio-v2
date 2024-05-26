// Modules
import React, { ReactElement } from 'react';

// Styles
import style from './about.module.css';
import { Avatar, Box, Button, Center, Divider, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import NavSide from '~/components/NavSide';
import { BiDownload } from 'react-icons/bi';
import AboutTitle from '~/modules/About/components/AboutTitle';
import AboutBody from '~/modules/About/components/AboutBody';
import { specializeTechStack } from '~/modules/About/constants';
import TechStackCard from '~/modules/About/components/TechStackCard';

// Components

// Types
export interface aboutProps {}

export default function About(props: aboutProps) {
    return (
        <Flex bg="brand.bg" height="100%" width="100%">
            <Flex
                as="aside"
                flexDir="column"
                width="240px"
                minWidth="240px"
                borderRight="1px solid #dedede"
                padding="20px 0px 10px"
                alignItems="center"
                overflowY="auto"
            >
                <Flex flexDir="column" alignItems="center" gap="50px" padding="0 20px">
                    <Avatar height="150px" width="150px" />

                    <Flex flexDir="column" gap="5px">
                        <Heading fontSize="16px" fontWeight="600" mb="10px">
                            Education
                        </Heading>
                        <Text fontWeight="400">BSc. Computer Science</Text>
                        <Text fontWeight="300">McPherson University, Ogun State, Nigeria.</Text>
                    </Flex>
                </Flex>

                <Divider mt="20px" mb="20px" borderWidth="1px" />

                <Flex flexDir="column" gap="10px" padding="0 20px">
                    <Text fontSize="16px" fontWeight="600" textAlign="start" mb="10px">
                        Professional Certifications
                    </Text>
                    <Text fontSize="16px">Oracle Certified Associate Java Programmer (OCAJP)</Text>
                    <Text>Oracle Certified Professional Java Programmer (OCPJP)</Text>
                </Flex>

                <Divider mt="20px" mb="20px" borderWidth="1px" />

                <Flex flexDir="column" padding="0 20px" gap="10px">
                    <Text fontSize="16px" fontWeight="600" textAlign="start" mb="10px">
                        Soft Skills
                    </Text>
                    <Text fontSize="16px">Verbal and written communication skills</Text>
                    <Text>Collaboration with teams</Text>
                </Flex>

                {/* <Button mt="30px" width="180px" leftIcon={<BiDownload />}>
                    Resume
                </Button> */}
            </Flex>

            <Flex as="section" flexGrow="1" flexDir="column" padding="20px 0" overflow="auto">
                <Flex
                    justifyContent="space-between"
                    padding="0 20px"
                    border="1px solid bue"
                    alignItems="center"
                    minHeight="80px"
                >
                    <Heading fontSize="24px" fontWeight="400">
                        Hey, nice to e-meet you!
                    </Heading>
                    <Text fontWeight="300">
                        I am a web developer with a passion for creating only the best products and making an impact.
                    </Text>
                </Flex>
                <Divider mb="10px" />

                <Flex flexDir="column" padding="0 20px">
                    <Flex as="section" mt="40px" flexDir="column" gap="20px">
                        <AboutTitle fontWeight="500" fontSize="26px">
                            About Me
                        </AboutTitle>

                        <AboutBody>
                            I'm a multidisciplined developer concerned with adhering to established standards but also
                            not afraid to think out of the box to implement creative and performant solutions. I'm very
                            enthusiastic about any opportunity to learn technology that will further my ability to
                            create better performant and usable applications. I create responsive web applications
                            because I love giving the end users a flexible platform to be productive.
                        </AboutBody>
                    </Flex>

                    <Flex as="section" mt="40px" flexDir="column" gap="20px">
                        <AboutTitle>Frontend Development</AboutTitle>

                        <AboutBody>
                            I'm a multidisciplined developer concerned with adhering to established standards but also
                            not afraid to think out of the box to implement creative and performant solutions. I'm very
                            enthusiastic about any opportunity to learn technology that will further my ability to
                            create better performant and usable applications. I create responsive web applications
                            because I love giving the end users a flexible platform to be productive.
                        </AboutBody>
                    </Flex>

                    <Flex as="section" mt="40px" flexDir="column" gap="20px">
                        <AboutTitle>Backend Development</AboutTitle>

                        <AboutBody>
                            I'm a multidisciplined developer concerned with adhering to established standards but also
                            not afraid to think out of the box to implement creative and performant solutions. I'm very
                            enthusiastic about any opportunity to learn technology that will further my ability to
                            create better performant and usable applications. I create responsive web applications
                            because I love giving the end users a flexible platform to be productive.
                        </AboutBody>
                    </Flex>

                    <Flex as="section" mt="40px" flexDir="column" gap="20px">
                        <AboutTitle>User Interaction and Experience</AboutTitle>

                        <Text fontWeight="300" width="100%" whiteSpace="none" maxWidth="80%">
                            I work mainly with the MERN stack both front and back end, and here’s the complicated part,
                            I am more stable with front end but I have always preferred backend more, but I am flexible
                            to work on both sides. I work with Jekyll, bundling and transpiling tools such as Webpack
                            and Babel. This site was also built with Jekyll. I have the knowledge of Java SE of which I
                            obtained the Java SE 8 OCP certification in 2017.
                        </Text>
                    </Flex>

                    <Flex as="section" mt="40px" flexDir="column" gap="40px">
                        <Heading fontWeight="400" fontSize="20px">
                            Technologies, Tools and Languages
                        </Heading>

                        <Flex flexDir="column" gap="40px">
                            <TechStackCard
                                title="Specailize in"
                                subtitle="These are technologies and tools I am most comfortable with, specialize in
                                        and make use of daily."
                                techStack={specializeTechStack}
                            />
                            <TechStackCard
                                title="Familiar with"
                                subtitle="These are technologies and tools I have used in personal projects or in the past and I understand them but I don't currently use them daily."
                                techStack={specializeTechStack}
                            />
                            <TechStackCard
                                title="Experimented with"
                                subtitle="These are technologies and tools I have and probably still experimenting with and have used them in demo projects but have not spent a lot of time with."
                                techStack={specializeTechStack}
                            />
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}
