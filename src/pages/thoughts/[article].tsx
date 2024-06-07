// Modules
import {
    Button,
    Flex,
    Heading,
    Link,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverTrigger,
    Stack,
    Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import NextLink from 'next/link';
import React from 'react';
import { RiMenuFold3Fill } from 'react-icons/ri';
import { articlesList } from '~/utils/dummyArticles';

// Components

// Types
export interface ArticleProps {}

const article = {
    title: 'How to create a portfolio that stands out',
    imageUrl: '/article-demo.jpg',
    author: 'Fego Etese',
    createdOn: '2024-05-06',
    articleUrl: '/thoughts/create-portfolio',
};

export default function Article(props: ArticleProps) {
    return (
        <Stack bg="brand.bg" height="100%" gap="20px" padding="20px 0">
            <Flex padding=" 0 20px" justifyContent="space-between" gap="18px">
                <Heading fontSize={{ base: '18px', md: '24px', lg: '28px' }} fontWeight="400">
                    {article.title}
                </Heading>

                <Flex alignItems="center" gap="10px">
                    <Heading fontWeight="400" display={{ base: 'none', md: 'initial' }}>
                        More Articles
                    </Heading>
                    <Popover placement="left-start">
                        <PopoverTrigger>
                            <Button
                                as={motion.button}
                                whileTap={{ scale: 0.95 }}
                                border="none"
                                borderRadius="50%"
                                width="40px"
                                height="40px"
                                justifyContent="center"
                                padding="0"
                            >
                                <RiMenuFold3Fill style={{ height: '20px', width: '20px' }} />
                            </Button>
                        </PopoverTrigger>

                        <PopoverContent padding="20px 20px 20px" width="auto">
                            <PopoverArrow />
                            <PopoverCloseButton border="none" as={Button} height="30px" width="30px" minWidth="auto" />

                            <PopoverBody as={Stack} bg="#fff" gap="20px" padding="0">
                                <Heading fontWeight="400">More Articles</Heading>

                                <Stack gap="20px" height="450px" overflow="auto">
                                    {articlesList.slice(0, 5).map((article, index) => (
                                        <Link
                                            as={NextLink}
                                            key={index}
                                            href={article.articleUrl}
                                            width="200px"
                                            gap="10px"
                                            display="flex"
                                            flexDir="column"
                                        >
                                            <Image
                                                height={200}
                                                width={200}
                                                src={article.imageUrl}
                                                alt="image for article"
                                                style={{ borderRadius: '5px' }}
                                            />
                                            <Heading fontWeight="400">{article.title}</Heading>
                                        </Link>
                                    ))}
                                </Stack>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </Flex>
            </Flex>

            <Stack
                margin={{ base: '0 10px', md: '0 20px' }}
                padding={{ base: '20px 15px', md: '20px 30px' }}
                overflow="auto"
                flexGrow="1"
                bg="#fff"
                maxW={{ base: '100%', md: '90%' }}
                borderRadius="5px"
                boxShadow="0 2px 4px 0px #C6C6C6"
            >
                <Text as="pre" whiteSpace="wrap" fontFamily="inherit">
                    Whether you’re an individual showcasing your work or a design agency, a well-crafted portfolio site
                    can make a significant impact. Here’s a concise guide to get you started: What is a Portfolio
                    Website? A portfolio website serves as a professional platform to present information about an
                    individual or a company and showcase their work. Whether you’re a freelance designer, photographer,
                    developer, or part of a creative agency, your portfolio website is your digital business card.
                    Primary Purpose of a Portfolio Website: The primary purpose of a portfolio website is to: Display
                    Compelling Content: Your portfolio should feature your best work, demonstrating your skills and
                    expertise. Provide Basic Information: It should offer essential details about you or your company.
                    Lead to Client Acquisition: Ultimately, it should attract potential clients and encourage them to
                    hire you. Essential Sections of a Portfolio Website: Work Showcase: Use slideshows, thumbnail
                    galleries, or video presentations to display your projects. Showcasing your work helps visitors
                    understand your capabilities. For example, check out Ed Yau’s portfolio with its thumbnail gallery.
                    About Section: Summarize your experience, credentials, and professional background. Include relevant
                    details about yourself or your team. For instance, see Pablo Dominguez’s “About” page. Testimonials:
                    Feature testimonials from satisfied clients. Testimonials build trust and credibility. Take a look
                    at Theory’s testimonials. Contact Information: Make it easy for potential clients to reach out to
                    you. Include a contact form or provide direct contact details. Additional Components to Consider:
                    Blog: Share insights, case studies, or industry-related content. Services Offered: Describe the
                    services you provide. Client List: Highlight notable clients you’ve worked with. Process: Explain
                    your creative process or workflow. Awards and Recognition: Showcase any awards or recognition you’ve
                    received. Remember, your portfolio website is a reflection of your brand and expertise. Keep it
                    clean, visually appealing, and easy to navigate. Happy designing! 🚀 galleries, or video
                    presentations to display your projects. Showcasing your work helps visitors understand your
                    capabilities. For example, check out Ed Yau’s portfolio with its thumbnail gallery. About Section:
                    Summarize your experience, credentials, and professional background. Include relevant details about
                    yourself or your team. For instance, see Pablo Dominguez’s “About” page. Testimonials: Feature
                    testimonials from satisfied clients. Testimonials build trust and credibility. Take a look at
                    Theory’s testimonials. Contact Information: Make it easy for potential clients to reach out to you.
                    Include a contact form or provide direct contact details. Additional Components to Consider: Blog:
                    Share insights, case studies, or industry-related content. Services Offered: Describe the services
                    you provide. Client List: Highlight notable clients you’ve worked with. Process: Explain your
                    creative process or workflow. Awards and Recognition: Showcase any awards or recognition you’ve
                    received. Remember, your portfolio website is a reflection of your brand and expertise. Keep it
                    clean, visually appealing, and easy to navigate. Happy designing! 🚀 galleries, or video
                    presentations to display your projects. Showcasing your work helps visitors understand your
                    capabilities. For example, check out Ed Yau’s portfolio with its thumbnail gallery. About Section:
                    Summarize your experience, credentials, and professional background. Include relevant details about
                    yourself or your team. For instance, see Pablo Dominguez’s “About” page. Testimonials: Feature
                    testimonials from satisfied clients. Testimonials build trust and credibility. Take a look at
                    Theory’s testimonials. Contact Information: Make it easy for potential clients to reach out to you.
                    Include a contact form or provide direct contact details. Additional Components to Consider: Blog:
                    Share insights, case studies, or industry-related content. Services Offered: Describe the services
                    you provide. Client List: Highlight notable clients you’ve worked with. Process: Explain your
                    creative process or workflow. Awards and Recognition: Showcase any awards or recognition you’ve
                    received. Remember, your portfolio website is a reflection of your brand and expertise. Keep it
                    clean, visually appealing, and easy to navigate. Happy designing! 🚀 galleries, or video
                    presentations to display your projects. Showcasing your work helps visitors understand your
                    capabilities. For example, check out Ed Yau’s portfolio with its thumbnail gallery. About Section:
                    Summarize your experience, credentials, and professional background. Include relevant details about
                    yourself or your team. For instance, see Pablo Dominguez’s “About” page. Testimonials: Feature
                    testimonials from satisfied clients. Testimonials build trust and credibility. Take a look at
                    Theory’s testimonials. Contact Information: Make it easy for potential clients to reach out to you.
                    Include a contact form or provide direct contact details. Additional Components to Consider: Blog:
                    Share insights, case studies, or industry-related content. Services Offered: Describe the services
                    you provide. Client List: Highlight notable clients you’ve worked with. Process: Explain your
                    creative process or workflow. Awards and Recognition: Showcase any awards or recognition you’ve
                    received. Remember, your portfolio website is a reflection of your brand and expertise. Keep it
                    clean, visually appealing, and easy to navigate. Happy designing! 🚀 galleries, or video
                    presentations to display your projects. Showcasing your work helps visitors understand your
                    capabilities. For example, check out Ed Yau’s portfolio with its thumbnail gallery. About Section:
                    Summarize your experience, credentials, and professional background. Include relevant details about
                    yourself or your team. For instance, see Pablo Dominguez’s “About” page. Testimonials: Feature
                    testimonials from satisfied clients. Testimonials build trust and credibility. Take a look at
                    Theory’s testimonials. Contact Information: Make it easy for potential clients to reach out to you.
                    Include a contact form or provide direct contact details. Additional Components to Consider: Blog:
                    Share insights, case studies, or industry-related content. Services Offered: Describe the services
                    you provide. Client List: Highlight notable clients you’ve worked with. Process: Explain your
                    creative process or workflow. Awards and Recognition: Showcase any awards or recognition you’ve
                    received. Remember, your portfolio website is a reflection of your brand and expertise. Keep it
                    clean, visually appealing, and easy to navigate. Happy designing! 🚀 galleries, or video
                    presentations to display your projects. Showcasing your work helps visitors understand your
                    capabilities. For example, check out Ed Yau’s portfolio with its thumbnail gallery. About Section:
                    Summarize your experience, credentials, and professional background. Include relevant details about
                    yourself or your team. For instance, see Pablo Dominguez’s “About” page. Testimonials: Feature
                    testimonials from satisfied clients. Testimonials build trust and credibility. Take a look at
                    Theory’s testimonials. Contact Information: Make it easy for potential clients to reach out to you.
                    Include a contact form or provide direct contact details. Additional Components to Consider: Blog:
                    Share insights, case studies, or industry-related content. Services Offered: Describe the services
                    you provide. Client List: Highlight notable clients you’ve worked with. Process: Explain your
                    creative process or workflow. Awards and Recognition: Showcase any awards or recognition you’ve
                    received. Remember, your portfolio website is a reflection of your brand and expertise. Keep it
                    clean, visually appealing, and easy to navigate. Happy designing! 🚀 galleries, or video
                    presentations to display your projects. Showcasing your work helps visitors understand your
                    capabilities. For example, check out Ed Yau’s portfolio with its thumbnail gallery. About Section:
                    Summarize your experience, credentials, and professional background. Include relevant details about
                    yourself or your team. For instance, see Pablo Dominguez’s “About” page. Testimonials: Feature
                    testimonials from satisfied clients. Testimonials build trust and credibility. Take a look at
                    Theory’s testimonials. Contact Information: Make it easy for potential clients to reach out to you.
                    Include a contact form or provide direct contact details. Additional Components to Consider: Blog:
                    Share insights, case studies, or industry-related content. Services Offered: Describe the services
                    you provide. Client List: Highlight notable clients you’ve worked with. Process: Explain your
                    creative process or workflow. Awards and Recognition: Showcase any awards or recognition you’ve
                    received. Remember, your portfolio website is a reflection of your brand and expertise. Keep it
                    clean, visually appealing, and easy to navigate. Happy designing! 🚀 galleries, or video
                    presentations to display your projects. Showcasing your work helps visitors understand your
                    capabilities. For example, check out Ed Yau’s portfolio with its thumbnail gallery. About Section:
                    Summarize your experience, credentials, and professional background. Include relevant details about
                    yourself or your team. For instance, see Pablo Dominguez’s “About” page. Testimonials: Feature
                    testimonials from satisfied clients. Testimonials build trust and credibility. Take a look at
                    Theory’s testimonials. Contact Information: Make it easy for potential clients to reach out to you.
                    Include a contact form or provide direct contact details. Additional Components to Consider: Blog:
                    Share insights, case studies, or industry-related content. Services Offered: Describe the services
                    you provide. Client List: Highlight notable clients you’ve worked with. Process: Explain your
                    creative process or workflow. Awards and Recognition: Showcase any awards or recognition you’ve
                    received. Remember, your portfolio website is a reflection of your brand and expertise. Keep it
                    clean, visually appealing, and easy to navigate. Happy designing! 🚀 galleries, or video
                    presentations to display your projects. Showcasing your work helps visitors understand your
                    capabilities. For example, check out Ed Yau’s portfolio with its thumbnail gallery. About Section:
                    Summarize your experience, credentials, and professional background. Include relevant details about
                    yourself or your team. For instance, see Pablo Dominguez’s “About” page. Testimonials: Feature
                    testimonials from satisfied clients. Testimonials build trust and credibility. Take a look at
                    Theory’s testimonials. Contact Information: Make it easy for potential clients to reach out to you.
                    Include a contact form or provide direct contact details. Additional Components to Consider: Blog:
                    Share insights, case studies, or industry-related content. Services Offered: Describe the services
                    you provide. Client List: Highlight notable clients you’ve worked with. Process: Explain your
                    creative process or workflow. Awards and Recognition: Showcase any awards or recognition you’ve
                    received. Remember, your portfolio website is a reflection of your brand and expertise. Keep it
                    clean, visually appealing, and easy to navigate. Happy designing! 🚀 galleries, or video
                    presentations to display your projects. Showcasing your work helps visitors understand your
                    capabilities. For example, check out Ed Yau’s portfolio with its thumbnail gallery. About Section:
                    Summarize your experience, credentials, and professional background. Include relevant details about
                    yourself or your team. For instance, see Pablo Dominguez’s “About” page. Testimonials: Feature
                    testimonials from satisfied clients. Testimonials build trust and credibility. Take a look at
                    Theory’s testimonials. Contact Information: Make it easy for potential clients to reach out to you.
                    Include a contact form or provide direct contact details. Additional Components to Consider: Blog:
                    Share insights, case studies, or industry-related content. Services Offered: Describe the services
                    you provide. Client List: Highlight notable clients you’ve worked with. Process: Explain your
                    creative process or workflow. Awards and Recognition: Showcase any awards or recognition you’ve
                    received. Remember, your portfolio website is a reflection of your brand and expertise. Keep it
                    clean, visually appealing, and easy to navigate. Happy designing! 🚀 galleries, or video
                    presentations to display your projects. Showcasing your work helps visitors understand your
                    capabilities. For example, check out Ed Yau’s portfolio with its thumbnail gallery. About Section:
                    Summarize your experience, credentials, and professional background. Include relevant details about
                    yourself or your team. For instance, see Pablo Dominguez’s “About” page. Testimonials: Feature
                    testimonials from satisfied clients. Testimonials build trust and credibility. Take a look at
                    Theory’s testimonials. Contact Information: Make it easy for potential clients to reach out to you.
                    Include a contact form or provide direct contact details. Additional Components to Consider: Blog:
                    Share insights, case studies, or industry-related content. Services Offered: Describe the services
                    you provide. Client List: Highlight notable clients you’ve worked with. Process: Explain your
                    creative process or workflow. Awards and Recognition: Showcase any awards or recognition you’ve
                    received. Remember, your portfolio website is a reflection of your brand and expertise. Keep it
                    clean, visually appealing, and easy to navigate. Happy designing! 🚀 galleries, or video
                    presentations to display your projects. Showcasing your work helps visitors understand your
                    capabilities. For example, check out Ed Yau’s portfolio with its thumbnail gallery. About Section:
                    Summarize your experience, credentials, and professional background. Include relevant details about
                    yourself or your team. For instance, see Pablo Dominguez’s “About” page. Testimonials: Feature
                    testimonials from satisfied clients. Testimonials build trust and credibility. Take a look at
                    Theory’s testimonials. Contact Information: Make it easy for potential clients to reach out to you.
                    Include a contact form or provide direct contact details. Additional Components to Consider: Blog:
                    Share insights, case studies, or industry-related content. Services Offered: Describe the services
                    you provide. Client List: Highlight notable clients you’ve worked with. Process: Explain your
                    creative process or workflow. Awards and Recognition: Showcase any awards or recognition you’ve
                    received. Remember, your portfolio website is a reflection of your brand and expertise. Keep it
                    clean, visually appealing, and easy to navigate. Happy designing! 🚀 galleries, or video
                    presentations to display your projects. Showcasing your work helps visitors understand your
                    capabilities. For example, check out Ed Yau’s portfolio with its thumbnail gallery. About Section:
                    Summarize your experience, credentials, and professional background. Include relevant details about
                    yourself or your team. For instance, see Pablo Dominguez’s “About” page. Testimonials: Feature
                    testimonials from satisfied clients. Testimonials build trust and credibility. Take a look at
                    Theory’s testimonials. Contact Information: Make it easy for potential clients to reach out to you.
                    Include a contact form or provide direct contact details. Additional Components to Consider: Blog:
                    Share insights, case studies, or industry-related content. Services Offered: Describe the services
                    you provide. Client List: Highlight notable clients you’ve worked with. Process: Explain your
                    creative process or workflow. Awards and Recognition: Showcase any awards or recognition you’ve
                    received. Remember, your portfolio website is a reflection of your brand and expertise. Keep it
                    clean, visually appealing, and easy to navigate. Happy designing! 🚀
                </Text>
            </Stack>
        </Stack>
    );
}
