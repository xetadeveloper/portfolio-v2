'use client';
// Modules
import React from 'react';
import { motion } from 'framer-motion';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import { techStack } from '~/config';
import { fonts } from '~/assets/fonts';

// Components

// Types
export interface SlantDivAnimationProps {}

export default function SlantDivAnimation(props: SlantDivAnimationProps) {
    return (
        <motion.div
            // initial={{
            //     height: '0px',
            // }}
            // animate={{
            //     height: '2000px',
            // }}
            // transition={{ delay: 1, duration: 0.5 }}
            style={{
                backgroundColor: '#464646',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // width: '60%',
                position: 'absolute',
                // transform: 'translate(-100%, -55%) rotate(-45deg)',
                // transformOrigin: 'top center',
                // transform: 'translate(-50%, -50%) rotate(-45deg)',
                zIndex: '1',
                // inset: '0',
                clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
            }}
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
                <motion.div style={{ color: '#4B4B4B' }} transition={{ delay: 1 }}>
                    F
                </motion.div>
            </Heading>

            <motion.div transition={{ delay: 1, duration: 1 }} style={{ color: '#FFF' }}>
                <Flex
                    style={{ userSelect: 'none' }}
                    flexDir="column"
                    border="1px solid blu"
                    position="relative"
                    zIndex="1"
                    textAlign="center"
                >
                    <Flex flexDir="column" mb="100px">
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
                            <Heading fontWeight="600" fontSize="18px">
                                My Stack
                            </Heading>
                            <Heading fontSize="20px" fontWeight="300">
                                {techStack.join(' | ')}
                            </Heading>
                        </Flex>
                    </motion.div>

                    <Button mt="40px">Check my work</Button>
                </Flex>
            </motion.div>
        </motion.div>
    );
}
