// Modules
import React, { ReactElement } from 'react';

// Styles
import style from './TitleLayout.module.css';
import { Box, Flex, Heading, Spinner } from '@chakra-ui/react';
import { motion } from 'framer-motion';

// Components

// Types
export interface TitleLayoutProps {
    children: ReactElement;
    pageTitle: string;
    isFetching?: boolean;
}

/**
 * The purpose of this layout is to enable the page title be in the center at first and scale up and down twice
 * before revealing its children. The animatoin has to be perfect.
 */

export default function TitleLayout({ children, pageTitle, isFetching }: TitleLayoutProps) {
    return (
        <Flex height="100%" width="100%" position="relative">
            <motion.div
                style={{
                    position: 'absolute',
                    inset: '0',
                    zIndex: '1',
                }}
                initial={{ left: '0' }}
                animate={{ left: '200%', transition: { delay: 1.5, duration: 1 } }}
                transition={{ delay: 1, duration: 1 }}
            >
                <Heading
                    as={motion.div}
                    zIndex="2"
                    bg="brand.bg"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    fontSize="34px"
                    height="100%"
                    flexDir="column"
                    gap="40px"
                >
                    {pageTitle}

                    <Spinner
                        as={motion.div}
                        animate={{ opacity: 0, transition: { delay: 1.2 } }}
                        width="20px"
                        height="20px"
                    />
                </Heading>
            </motion.div>

            <motion.div style={{ height: '100%', width: '100%' }}>{children}</motion.div>
        </Flex>
    );
}
