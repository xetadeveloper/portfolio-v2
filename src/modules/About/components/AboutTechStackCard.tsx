import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';

interface AboutTechStackCardProps {
    title: string;
    subtitle: string;
    techStack: { icon: ReactElement; title: string }[];
}

export default function AboutTechStackCard({ title, subtitle, techStack }: AboutTechStackCardProps) {
    return (
        <Flex
            bg="#fff"
            padding={{ base: '20px', md: '40px' }}
            borderRadius="5px"
            justifyContent="space-between"
            alignItems="center"
            maxWidth="800px"
            minWidth={{ base: '100%', md: '700px' }}
            gap="40px"
            boxShadow="0 2px 4px 0px #C6C6C6"
            flexDirection={{ base: 'column', md: 'row' }}
        >
            <Box border="1px solid blu">
                <Heading fontSize="20px" fontWeight="400" mb="15px">
                    {title}
                </Heading>
                <Text maxWidth="300px" fontWeight="400">
                    {subtitle}
                </Text>
            </Box>

            <SimpleGrid
                flexGrow="1"
                border="1px solid gree"
                gridTemplateColumns={{ base: '1fr', sm_large: '200px 200px' }}
                gap="20px"
                maxHeight="400px"
                overflow="auto"
                rowGap="20px"
                width={{ base: '100%', sm_large: '100%' }}
            >
                {techStack.map(({ icon, title }, index) => (
                    <Flex key={index} alignItems="center" gap="10px">
                        <Box height="40px" width="40px" color="#383838">
                            {icon}
                        </Box>
                        <Heading fontWeight="400">{title}</Heading>
                    </Flex>
                ))}
            </SimpleGrid>
        </Flex>
    );
}
