// Modules
import React, { useState } from 'react';

// Styles
import { Avatar, Button, Divider, Flex, Heading, Slide, Text, useTheme } from '@chakra-ui/react';
import AboutTitle from '~/modules/About/components/AboutTitle';
import AboutBody from '~/modules/About/components/AboutBody';
import { specializeTechStack } from '~/modules/About/constants';
import AboutTechStackCard from '~/modules/About/components/AboutTechStackCard';
import { GetStaticPropsResult } from 'next';
import { RiMenuFold3Fill } from 'react-icons/ri';
import { BiX } from 'react-icons/bi';
import { useMediaQuery } from 'usehooks-ts';

// Components

// Types
export interface AboutProps {}

export default function About(props: AboutProps) {
    const [showSidebar, setShowSidebar] = useState(false);
    const isLargeScreen = useMediaQuery('(min-width: 960px)');
    const theme = useTheme();

    console.log('IsLargeSCreen: ', isLargeScreen);

    return (
        <Flex bg="brand.bg" height="100%" width="100%">
            <Slide
                in={isLargeScreen ? true : showSidebar}
                direction="left"
                style={{
                    position: isLargeScreen ? 'relative' : 'absolute',
                    zIndex: '1',
                    backgroundColor: theme.colors.brand.bg,
                    height: '100%',
                    overflow: 'auto',
                    width: '240px',
                    minWidth: '240px',
                }}
            >
                <Flex
                    as="aside"
                    flexDir="column"
                    borderRight="1px solid #dedede"
                    padding="20px 0px 10px"
                    alignItems="center"
                >
                    <Flex flexDir="column" alignItems="center" gap="50px" padding="0 20px" position="relative">
                        <Button
                            position="absolute"
                            zIndex="1"
                            top="0"
                            right="10px"
                            padding="3px"
                            minWidth="0"
                            border="none"
                            onClick={() => setShowSidebar(false)}
                            hidden={isLargeScreen}
                        >
                            <BiX style={{ height: '25px', width: '25px' }} />
                        </Button>

                        <Avatar height="150px" width="150px" src="/profile-pic.jpg" />

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
                </Flex>
            </Slide>

            <Flex as="section" flexGrow="1" flexDir="column" padding="20px 0" overflow="auto">
                <Flex
                    justifyContent={{ base: 'flex-start', md: 'space-between' }}
                    padding={{ base: '0 20px', md: '0 30px' }}
                    alignItems={{ base: 'flex-start', md: 'center' }}
                    gap={{ base: '15px', md: '30px' }}
                    textAlign="start"
                    flexDirection={{ base: 'column', md: 'row' }}
                >
                    <Flex alignItems="center" gap="10px">
                        <Button
                            width="40px"
                            height="40px"
                            padding="0"
                            justifyContent="center"
                            onClick={() => setShowSidebar(true)}
                            hidden={isLargeScreen}
                        >
                            <RiMenuFold3Fill
                                style={{
                                    width: '20px',
                                    height: '20px',
                                }}
                            />
                        </Button>
                        <Heading fontSize={{ base: '20px', md: '24px' }} fontWeight="400">
                            Hey, nice to e-meet you!
                        </Heading>
                    </Flex>
                    <Text fontWeight="300" fontSize={{ base: '14px', md: '16px' }} maxWidth={{ md: '400px' }}>
                        I am a web developer with a passion for creating only the best products and making an impact.
                    </Text>
                </Flex>

                <Divider margin="20px 0 20px" />

                <Flex flexDir="column" padding={{ base: '0 20px', md: '0 30px' }} gap="40px">
                    <Flex as="section" flexDir="column" gap="20px">
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

                    <Flex as="section" flexDir="column" gap="20px">
                        <AboutTitle>Frontend Development</AboutTitle>

                        <AboutBody>
                            I'm a multidisciplined developer concerned with adhering to established standards but also
                            not afraid to think out of the box to implement creative and performant solutions. I'm very
                            enthusiastic about any opportunity to learn technology that will further my ability to
                            create better performant and usable applications. I create responsive web applications
                            because I love giving the end users a flexible platform to be productive.
                        </AboutBody>
                    </Flex>

                    <Flex as="section" flexDir="column" gap="20px">
                        <AboutTitle>Backend Development</AboutTitle>

                        <AboutBody>
                            I'm a multidisciplined developer concerned with adhering to established standards but also
                            not afraid to think out of the box to implement creative and performant solutions. I'm very
                            enthusiastic about any opportunity to learn technology that will further my ability to
                            create better performant and usable applications. I create responsive web applications
                            because I love giving the end users a flexible platform to be productive.
                        </AboutBody>
                    </Flex>

                    <Flex as="section" flexDir="column" gap="20px">
                        <AboutTitle>User Interaction and Experience</AboutTitle>

                        <AboutBody>
                            I work mainly with the MERN stack both front and back end, and here’s the complicated part,
                            I am more stable with front end but I have always preferred backend more, but I am flexible
                            to work on both sides. I work with Jekyll, bundling and transpiling tools such as Webpack
                            and Babel. This site was also built with Jekyll. I have the knowledge of Java SE of which I
                            obtained the Java SE 8 OCP certification in 2017.
                        </AboutBody>
                    </Flex>

                    <Flex as="section" flexDir="column" gap="40px">
                        <Heading fontWeight="400" fontSize="20px">
                            Technologies, Tools and Languages
                        </Heading>

                        <Flex flexDir="column" gap="40px">
                            <AboutTechStackCard
                                title="Specailize in"
                                subtitle="These are technologies and tools I am most comfortable with, specialize in
                                        and make use of daily."
                                techStack={specializeTechStack}
                            />
                            <AboutTechStackCard
                                title="Familiar with"
                                subtitle="These are technologies and tools I have used in personal projects or in the past and I understand them but I don't currently use them daily."
                                techStack={specializeTechStack}
                            />
                            <AboutTechStackCard
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

export async function getStaticProps(): Promise<GetStaticPropsResult<Partial<AboutProps>>> {
    return {
        props: {},
    };
}
