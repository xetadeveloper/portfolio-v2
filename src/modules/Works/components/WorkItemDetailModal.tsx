// Modules
import React, { useState } from 'react';

// Components
import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    Stack,
    Text,
} from '@chakra-ui/react';
import { WorkItemDetail } from '~/types';

// Types
export interface WorkItemDetailModalProps {
    isOpen?: boolean;
    onClose?: () => void;
}

export default function WorkItemDetailModal({
    shortDescription,
    previewImage,
    title,
    galleryImages,
    repoLink,
    stack,
    liveLink,
    post,
    isOpen = false,
    onClose,
}: WorkItemDetailModalProps & WorkItemDetail) {
    const [isGalleryMode, setIsGalleryMode] = useState(false);

    return (
        <Modal isOpen={isOpen} onClose={() => {}} size="full">
            <ModalOverlay />
            <ModalContent
                borderRadius="5px"
                padding="20px"
                width={{ base: '90%', lg: '80%' }}
                maxWidth="1000px"
                margin="20px 0px"
                maxHeight="90%"
                minHeight="auto"
            >
                <ModalCloseButton top="5px" right="10px" color="#595959" onClick={() => onClose && onClose()} />

                <ModalBody as={Stack} gap="20px" padding={{ base: '0', md: '10px' }} overflow="auto" mt="20px">
                    <Flex justifyContent="space-between" alignItems="center">
                        <Heading fontSize={{ base: '24px', md: '26px' }}>{title}</Heading>
                        <Button
                            as="a"
                            href={repoLink}
                            target="_blank"
                            mr="10px"
                            color="gray.600"
                            border="1px solid transparent"
                            borderColor="gray.600"
                        >
                            View Repo
                        </Button>
                    </Flex>

                    <Flex gap="20px" flexDirection={{ base: 'column', md: 'row' }} alignItems="center">
                        {/* Image */}
                        <Flex position="relative" gap="20px" borderRadius="5px">
                            <Image
                                src={previewImage}
                                width={300}
                                alt={`image for ${'journalme'}`}
                                borderRadius="5px"
                                style={{
                                    aspectRatio: '1/0.6',
                                }}
                            />

                            <Box position="absolute" bg="#34343489" inset="0" borderRadius="5px"></Box>

                            <Flex
                                position="absolute"
                                zIndex="2"
                                gap="20px"
                                flexDirection="column"
                                top="50%"
                                left="50%"
                                transform="translate(-50%, -50%)"
                            >
                                {liveLink ? (
                                    <Button
                                        href={liveLink}
                                        as="a"
                                        border="1px solid transparent"
                                        justifyContent="center"
                                        width="100%"
                                        color="white"
                                        borderColor="white"
                                    >
                                        View live site
                                    </Button>
                                ) : null}

                                <Button
                                    border="1px solid transparent"
                                    justifyContent="center"
                                    color="white"
                                    borderColor="white"
                                    width="100%"
                                    onClick={() => {
                                        setIsGalleryMode(true);
                                    }}
                                >
                                    View pictures of site
                                </Button>
                            </Flex>
                        </Flex>

                        {/* Description */}
                        <Stack
                            justifyContent="center"
                            alignItems="center"
                            flexGrow="1"
                            gap="40px"
                        >
                            <Box margin="0 auto" border="1px solid re">
                                <Heading fontSize="14px" fontWeight="500" mb="10px">
                                    Description
                                </Heading>
                                <Heading fontWeight="300" fontSize={{ base: '18px', md: '24px' }} maxWidth="400px">
                                    {shortDescription}
                                </Heading>
                            </Box>

                            <Flex gap="20px" flexWrap="wrap" border="1px solid rd" margin="0 auto">
                                {stack.map(({ icon, title }, index) => (
                                    <Flex key={index} alignItems="center" gap="10px">
                                        <Box height="40px" width="40px" color="#383838">
                                            {icon}
                                        </Box>
                                        <Heading fontWeight="400">{title}</Heading>
                                    </Flex>
                                ))}
                            </Flex>
                        </Stack>
                    </Flex>

                    <Text mt={{ base: '30px', md: '10px' }}>{post}</Text>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
