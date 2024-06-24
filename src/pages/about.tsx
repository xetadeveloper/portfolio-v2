// Modules
import React, { useState } from 'react';

// Styles
import { Avatar, Button, Divider, Flex, Heading, Slide, Stack, Text, useTheme } from '@chakra-ui/react';
import AboutTitle from '~/modules/About/components/AboutTitle';
import AboutBody from '~/modules/About/components/AboutBody';
import { specializeTechStack } from '~/modules/About/constants';
import AboutTechStackCard from '~/modules/About/components/AboutTechStackCard';
import { GetStaticPropsResult } from 'next';
import { RiMenuFold3Fill } from 'react-icons/ri';
import { BiX } from 'react-icons/bi';
import { useMediaQuery } from 'usehooks-ts';
import styles from '~/modules/About/about.module.css';
import { contentfulClient } from '~/contentful/client';
import {
    TypeAbout,
    TypeAboutFields,
    TypeAboutSkeleton,
    TypeCertfication,
    TypeCertficationFields,
    TypeCertficationWithoutUnresolvableLinksResponse,
    TypeEducation,
    TypeEducationSkeleton,
    TypeEducationWithoutLinkResolutionResponse,
    TypeTechStack,
} from '~/contentful/__generated__';
import { Entry } from 'contentful';
import { getTechDisplayTitle, getTechIcon } from '~/utils/techStackIcons';
// Components

// Types
export interface AboutProps {
    content: Entry<TypeAboutSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>;
}

export default function About({ content }: AboutProps) {
    const [showSidebar, setShowSidebar] = useState(false);
    const isLargeScreen = useMediaQuery('(min-width: 960px)');
    const theme = useTheme();

    return (
        <Flex bg="brand.bg" height="100%" width="100%">
            <Slide
                className={`${styles.sidebar}`}
                in={isLargeScreen ? true : showSidebar}
                direction="left"
                style={{
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
                    height="100%"
                >
                    <Flex
                        flexDir="column"
                        alignItems="center"
                        gap="50px"
                        padding="0 20px"
                        position="relative"
                        width="100%"
                    >
                        <Button
                            position="absolute"
                            zIndex="1"
                            top="0"
                            right="10px"
                            padding="3px"
                            minWidth="0"
                            border="none"
                            onClick={() => setShowSidebar(false)}
                            display={{ base: 'flex', md_large: 'none' }}
                        >
                            <BiX style={{ height: '25px', width: '25px' }} />
                        </Button>

                        <Avatar height="150px" width="150px" src="/profile-pic.jpg" />

                        <Flex flexDir="column" gap="5px" width="100%">
                            <Heading fontSize="16px" fontWeight="600" mb="10px">
                                Education
                            </Heading>

                            {content.fields.education.map((edu) => {
                                const item = edu as TypeEducation<'WITHOUT_LINK_RESOLUTION'>;

                                return (
                                    <Stack>
                                        <Text fontWeight="300">{item.fields.institution}</Text>
                                        <Text fontWeight="400" fontSize="14px">
                                            {item.fields.degreeAwarded}
                                        </Text>
                                    </Stack>
                                );
                            })}
                        </Flex>
                    </Flex>

                    <Divider mt="20px" mb="20px" borderWidth="1px" />

                    <Flex flexDir="column" gap="10px" padding="0 20px">
                        <Text fontSize="16px" fontWeight="600" textAlign="start" mb="10px">
                            Professional Certifications
                        </Text>

                        {content.fields.certifications.map((cert) => {
                            if (cert) {
                                return (
                                    <Text fontSize="16px">
                                        {
                                            (cert as TypeCertficationWithoutUnresolvableLinksResponse).fields
                                                .certificateAwarded
                                        }
                                    </Text>
                                );
                            }

                            return null;
                        })}
                    </Flex>

                    <Divider mt="20px" mb="20px" borderWidth="1px" />

                    <Flex flexDir="column" padding="0 20px" gap="10px">
                        <Text fontSize="16px" fontWeight="600" textAlign="start" mb="10px">
                            Soft Skills
                        </Text>
                        {content.fields.softSkills.map((skill) => {
                            return <Text fontSize="16px">{skill}</Text>;
                        })}
                    </Flex>
                </Flex>
            </Slide>

            {/* Main body */}
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
                            display={{ base: 'flex', md_large: 'none' }}
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
                        {content.fields.personalQuote}
                    </Text>
                </Flex>

                <Divider margin="20px 0 20px" />

                <Flex flexDir="column" padding={{ base: '0 20px', md: '0 30px' }} gap="40px">
                    <Flex as="section" flexDir="column" gap="20px">
                        <AboutTitle fontWeight="500" fontSize="26px">
                            About Me
                        </AboutTitle>
                        <AboutBody>{content.fields.description}</AboutBody>
                    </Flex>

                    <Flex as="section" flexDir="column" gap="20px">
                        <AboutTitle>Frontend Development</AboutTitle>
                        <AboutBody>{content.fields.frontendDescription}</AboutBody>
                    </Flex>

                    <Flex as="section" flexDir="column" gap="20px">
                        <AboutTitle>Backend Development</AboutTitle>
                        <AboutBody>{content.fields.backendDescription}</AboutBody>
                    </Flex>

                    <Flex as="section" flexDir="column" gap="20px">
                        <AboutTitle>User Interaction and Experience</AboutTitle>
                        <AboutBody>{content.fields.uxDescription}</AboutBody>
                    </Flex>

                    <Flex as="section" flexDir="column" gap="40px">
                        <Heading fontWeight="400" fontSize="20px">
                            Technologies, Tools and Languages
                        </Heading>

                        <Flex flexDir="column" gap="40px">
                            {content.fields.specializationStack ? (
                                <AboutTechStackCard
                                    title={content.fields.specializationStack.fields.title}
                                    subtitle={content.fields.specializationStack.fields.description ?? ''}
                                    techStack={content.fields.specializationStack.fields.stack.map((item) => ({
                                        icon: getTechIcon({ icon: item }),
                                        title: getTechDisplayTitle(item),
                                    }))}
                                />
                            ) : null}

                            {content.fields.familiarStack ? (
                                <AboutTechStackCard
                                    title={content.fields.familiarStack.fields.title}
                                    subtitle={content.fields.familiarStack.fields.description ?? ''}
                                    techStack={content.fields.familiarStack.fields.stack.map((item) => ({
                                        icon: getTechIcon({ icon: item }),
                                        title: getTechDisplayTitle(item),
                                    }))}
                                />
                            ) : null}

                            {content.fields.experimentalStack ? (
                                <AboutTechStackCard
                                    title={content.fields.experimentalStack.fields.title}
                                    subtitle={content.fields.experimentalStack.fields.description ?? ''}
                                    techStack={content.fields.experimentalStack.fields.stack.map((item) => ({
                                        icon: getTechIcon({ icon: item }),
                                        title: getTechDisplayTitle(item),
                                    }))}
                                />
                            ) : null}
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<AboutProps>> {
    const data = await contentfulClient.withoutUnresolvableLinks.getEntry<TypeAboutSkeleton>('3fkKjBYsCa2lfPcyBuW0mV');

    return {
        props: {
            content: data,
        },
    };
}
