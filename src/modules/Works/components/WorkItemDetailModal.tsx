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
import { AnimatePresence, motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

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
    const [selectedGalleryPic, setSelectedGalleryPic] = useState(-1);

    return (
        <Modal
            isOpen={isOpen}
            onClose={() => {
                setIsGalleryMode(false);
                setSelectedGalleryPic(-1);
            }}
            size="full"
        >
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

                <ModalBody
                    as={Stack}
                    gap="20px"
                    padding={{ base: '0', md: '10px' }}
                    overflow={isGalleryMode ? 'hidden' : 'auto'}
                    mt="20px"
                >
                    <Flex justifyContent="space-between" alignItems="center">
                        <Heading fontSize={{ base: '24px', md: '26px' }}>{title}</Heading>

                        {isGalleryMode ? (
                            <Button
                                minWidth="100px"
                                justifyContent="center"
                                borderRadius="5px"
                                onClick={() => {
                                    setIsGalleryMode(false);
                                    setSelectedGalleryPic(-1);
                                }}
                            >
                                Exit gallery
                            </Button>
                        ) : (
                            <Button
                                as="a"
                                href={repoLink}
                                target="_blank"
                                mr="10px"
                                color="gray.600"
                                border="1px solid transparent"
                                borderColor="gray.600"
                                rightIcon={<FaExternalLinkAlt style={{ width: '13px', height: '13px' }} />}
                            >
                                View Repo
                            </Button>
                        )}
                    </Flex>

                    <Flex gap="20px" flexDirection={{ base: 'column', md: 'row' }} alignItems="center">
                        {/* Image */}
                        <Flex
                            as={motion.div}
                            position="relative"
                            flexDirection={isGalleryMode ? 'column' : 'row'}
                            gap="20px"
                            borderRadius="5px"
                            animate={{ width: isGalleryMode ? '100%' : 'auto' }}
                        >
                            <Image
                                as={motion.img}
                                src={isGalleryMode ? galleryImages[selectedGalleryPic] : previewImage}
                                width={300}
                                alt={`image for ${'journalme'}`}
                                borderRadius="5px"
                                aspectRatio={isGalleryMode ? '' : '1/0.6'}
                                animate={{
                                    width: isGalleryMode ? '100%' : '',
                                }}
                            />

                            {/* Next and Prev buttons */}
                            {isGalleryMode ? (
                                <Flex justifyContent="center" gap="20px">
                                    <Button
                                        minWidth="100px"
                                        justifyContent="center"
                                        borderRadius="5px"
                                        onClick={() => setSelectedGalleryPic(selectedGalleryPic - 1)}
                                        isDisabled={selectedGalleryPic === 0}
                                        hidden={selectedGalleryPic === 0}
                                    >
                                        Previous
                                    </Button>
                                    <Button
                                        minWidth="100px"
                                        justifyContent="center"
                                        borderRadius="5px"
                                        onClick={() => setSelectedGalleryPic(selectedGalleryPic + 1)}
                                        isDisabled={selectedGalleryPic === galleryImages.length - 1}
                                        hidden={selectedGalleryPic === galleryImages.length - 1}
                                    >
                                        Next
                                    </Button>
                                </Flex>
                            ) : null}

                            {isGalleryMode ? (
                                <></>
                            ) : (
                                <>
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
                                                as={motion.a}
                                                border="1px solid transparent"
                                                justifyContent="center"
                                                width="100%"
                                                color="white"
                                                borderColor="white"
                                                _hover={{
                                                    bg: '#fff',
                                                    color: '#000',
                                                }}
                                                whileTap={{ scale: 0.96 }}
                                                rightIcon={
                                                    <FaExternalLinkAlt style={{ width: '13px', height: '13px' }} />
                                                }
                                            >
                                                View live site
                                            </Button>
                                        ) : null}

                                        <Button
                                            as={motion.button}
                                            border="1px solid transparent"
                                            justifyContent="center"
                                            color="white"
                                            borderColor="white"
                                            width="100%"
                                            _hover={{
                                                bg: '#fff',
                                                color: '#363636',
                                            }}
                                            onClick={() => {
                                                setIsGalleryMode(true);
                                                setSelectedGalleryPic(0);
                                            }}
                                            whileTap={{ scale: 0.96 }}
                                        >
                                            View pictures of site
                                        </Button>
                                    </Flex>
                                </>
                            )}
                        </Flex>

                        {/* Description */}
                        <AnimatePresence>
                            {!isGalleryMode ? (
                                <Stack
                                    as={motion.div}
                                    key="work-item-description"
                                    justifyContent="center"
                                    alignItems="center"
                                    flexGrow="1"
                                    gap="40px"
                                    initial={{ x: 0 }}
                                    exit={{ x: 1000 }}
                                >
                                    <Box margin="0 auto" border="1px solid re">
                                        <Heading fontSize="14px" fontWeight="500" mb="10px">
                                            Description
                                        </Heading>
                                        <Heading
                                            fontWeight="300"
                                            fontSize={{ base: '18px', md: '24px' }}
                                            maxWidth="400px"
                                        >
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
                            ) : null}
                        </AnimatePresence>
                    </Flex>

                    <AnimatePresence initial={false}>
                        {!isGalleryMode ? (
                            <Text
                                key="work-item-post"
                                as={motion.p}
                                exit={{ y: 1000 }}
                                mt={{ base: '30px', md: '10px' }}
                            >
                                {post}
                            </Text>
                        ) : null}
                    </AnimatePresence>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
