import { Center, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

export function getStatusIcon(status: 'live' | 'in-progress', liveLink?: string) {
    return (
        <Center
            as={status === 'live' ? Link : 'div'}
            color="#fff"
            // @ts-expect-error
            href={liveLink}
            target="_blank"
            borderRadius="10px"
            padding="3px 10px"
            bg={status === 'live' ? '#09c905' : '#061ea5'}
            gap="5px"
            cursor={status === 'live' ? 'pointer' : 'default'}
            _hover={{
                boxShadow: status === 'live' ? '0 1px 2px 1px #089e05' : 'none',
            }}
        >
            {status === 'live' ? <FaExternalLinkAlt style={{ stroke: 'CurrentColor', width: '10px' }} /> : null}
            <Heading fontWeight="500" fontSize="12px">
                {status === 'live' ? 'Live' : 'In progress'}
            </Heading>
        </Center>
    );
}
