// Modules
import React, { useEffect, useState } from 'react';

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
    SimpleGrid,
    Stack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { TWorkItem } from '../types';
import { getTechDisplayTitle, getTechIcon } from '~/utils/techStackIcons';
import { getStatusIcon } from '~/utils';
import { IoMdLock } from 'react-icons/io';
import MarkdownDisplay from '~/components/MarkdownDisplay';

// Types
export interface WorkItemDetailModalProps {
    isOpen?: boolean;
    onClose?: () => void;
}

export default function WorkItemDetailModal({
    isOpen = false,
    onClose,
    ...props
}: WorkItemDetailModalProps & TWorkItem) {
    const [isGalleryMode, setIsGalleryMode] = useState(false);
    const [selectedGalleryPicIndex, setSelectedGalleryPicIndex] = useState(-1);

    useEffect(() => {
        const pic = document.getElementById(`picture-${selectedGalleryPicIndex < 0 ? 0 : selectedGalleryPicIndex}`);
        if (pic) pic.scrollIntoView();
    }, [selectedGalleryPicIndex]);

    return (
        <Modal
            isOpen={isOpen}
            onClose={() => {
                setIsGalleryMode(false);
                setSelectedGalleryPicIndex(-1);
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
                        <Box>
                            <Heading fontSize={{ base: '24px', md: '26px' }}>{props.title}</Heading>
                            <Flex mt="10px" gap="10px">
                                {props.status.map((item) => getStatusIcon(item, props.liveLink))}
                            </Flex>
                        </Box>

                        {isGalleryMode ? (
                            <Button
                                minWidth="100px"
                                justifyContent="center"
                                borderRadius="5px"
                                onClick={() => {
                                    setIsGalleryMode(false);
                                    setSelectedGalleryPicIndex(-1);
                                }}
                            >
                                Exit gallery
                            </Button>
                        ) : props.isPrivateRepository ? (
                            <Flex gap="5px">
                                <IoMdLock />
                                <Heading fontSize="14px" fontWeight="500">
                                    This repository is private
                                </Heading>
                            </Flex>
                        ) : (
                            <Button
                                hidden={!props.repoLink}
                                as="a"
                                href={props.repoLink}
                                target="_blank"
                                mr="10px"
                                color="gray.600"
                                border="1px solid transparent"
                                borderColor="gray.600"
                                rightIcon={<FaExternalLinkAlt style={{ width: '13px', height: '13px' }} />}
                            >
                                Github
                            </Button>
                        )}
                    </Flex>

                    <Flex gap="40px" flexDirection={{ base: 'column', md: 'row' }} alignItems="center">
                        {/* Gallery */}
                        <Flex
                            as={motion.div}
                            position="relative"
                            flexDirection={isGalleryMode ? 'column' : 'row'}
                            gap="20px"
                            borderRadius="5px"
                            animate={{ width: isGalleryMode ? '100%' : 'auto' }}
                            overflow="auto"
                            height="100%"
                        >
                            <Flex
                                as={motion.div}
                                animate={{
                                    width: isGalleryMode ? '100%' : '300px',
                                }}
                                aspectRatio={isGalleryMode ? '' : '1/0.6'}
                                boxShadow="0 0 1px 1px #d6d6d6"
                                overflow="hidden"
                                height="fit-content"
                                borderRadius="5px"
                                scrollBehavior="smooth"
                            >
                                {props.galleryImagesUrl.map((image, index) => {
                                    return (
                                        <Image
                                            id={`picture-${index}`}
                                            src={image}
                                            width="100%"
                                            height="100%"
                                            alt={`image for ${'gallery'}`}
                                        />
                                    );
                                })}
                            </Flex>

                            {/* Next and Prev buttons */}
                            {isGalleryMode ? (
                                <Flex justifyContent="center" gap="20px">
                                    <Button
                                        // minWidth="30px"
                                        justifyContent="center"
                                        borderRadius="5px"
                                        onClick={() => {
                                            const newSelection = selectedGalleryPicIndex - 1;

                                            setSelectedGalleryPicIndex(newSelection);
                                        }}
                                        isDisabled={selectedGalleryPicIndex === 0}
                                        hidden={selectedGalleryPicIndex === 0}
                                    >
                                        <GrFormPrevious style={{ height: '20px', width: '20px' }} /> Previous
                                    </Button>
                                    <Button
                                        minWidth="50px"
                                        justifyContent="center"
                                        borderRadius="5px"
                                        onClick={() => {
                                            const newSelection = selectedGalleryPicIndex + 1;
                                            setSelectedGalleryPicIndex(newSelection);
                                        }}
                                        isDisabled={selectedGalleryPicIndex === props.galleryImagesUrl.length - 1}
                                        hidden={selectedGalleryPicIndex === props.galleryImagesUrl.length - 1}
                                    >
                                        Next
                                        <GrFormNext style={{ height: '20px', width: '20px' }} />
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
                                        {props.liveLink ? (
                                            <Button
                                                href={props.liveLink}
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
                                                setSelectedGalleryPicIndex(0);
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
                        {!isGalleryMode ? (
                            <Stack
                                justifyContent="center"
                                alignItems="center"
                                flexGrow="1"
                                gap="40px"
                                // border="1px solid green"
                                width="100%"
                            >
                                <Box margin="0 auto" border="1px solid re">
                                    <Heading fontSize="14px" fontWeight="500" mb="10px">
                                        Description
                                    </Heading>
                                    <Heading fontWeight="300" fontSize={{ base: '18px', md: '24px' }} maxWidth="400px">
                                        {props.previewDescription}
                                    </Heading>
                                </Box>

                                <SimpleGrid
                                    gap="20px 40px"
                                    flexWrap="wrap"
                                    maxWidth="400px"
                                    maxHeight="400px"
                                    width="100%"
                                    margin="0 auto"
                                    gridTemplateColumns="repeat(auto-fill, 100px)"
                                    overflow="auto"
                                >
                                    {props.stack.map((item, index) => {
                                        const icon = getTechIcon({ icon: item });

                                        return (
                                            <SimpleGrid
                                                gridTemplateColumns="20px 1fr"
                                                columnGap="20px"
                                                key={index}
                                                alignItems="center"
                                                gap="10px"
                                            >
                                                <Box height="30px" width="30px" color="#383838">
                                                    {icon}
                                                </Box>
                                                <Heading fontWeight="400">{getTechDisplayTitle(item)}</Heading>
                                            </SimpleGrid>
                                        );
                                    })}
                                </SimpleGrid>
                            </Stack>
                        ) : null}
                    </Flex>

                    {!isGalleryMode ? (
                        <Box mt="20px">
                            <MarkdownDisplay>{props.longDescription}</MarkdownDisplay>
                        </Box>
                    ) : null}
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
