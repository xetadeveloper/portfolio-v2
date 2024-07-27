import { CSSProperties } from 'react';
import { BsGitlab } from 'react-icons/bs';
import { FaQuestionCircle } from 'react-icons/fa';
import { FaDocker, FaGit, FaGithub, FaNode, FaPython, FaReact } from 'react-icons/fa6';
import { IoLogoPwa } from 'react-icons/io5';
import { PiPlugsFill } from 'react-icons/pi';
import { RiJavascriptFill, RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import {
    SiAmazons3,
    SiChakraui,
    SiDjango,
    SiExpress,
    SiFramer,
    SiGraphql,
    SiJekyll,
    SiMongodb,
    SiMui,
    SiMysql,
    SiPostgresql,
    SiTypescript,
    SiVite,
    SiWebpack,
} from 'react-icons/si';

type stackName = 'react' | 'nodejs' | 'typescript' | 'github' | 'git' | 'expressjs' | 'javascript';

export function getTechIcon({ icon, styles }: { icon: stackName | string; styles?: CSSProperties }) {
    switch (icon) {
        case 'react':
            return <FaReact style={{ height: '100%', width: '100%', ...styles }} />;
        case 'nodejs':
            return <FaNode style={{ height: '100%', width: '100%', ...styles }} />;
        case 'typescript':
            return <SiTypescript style={{ height: '100%', width: '100%', ...styles }} />;
        case 'github':
            return <FaGithub style={{ height: '100%', width: '100%', ...styles }} />;
        case 'git':
            return <FaGit style={{ height: '100%', width: '100%', ...styles }} />;
        case 'nextjs':
            return <RiNextjsFill style={{ height: '100%', width: '100%', ...styles }} />;
        case 'expressjs':
            return <SiExpress style={{ height: '100%', width: '100%', ...styles }} />;
        case 'javascript':
            return <RiJavascriptFill style={{ height: '100%', width: '100%', ...styles }} />;
        case 'mongodb':
            return <SiMongodb style={{ height: '100%', width: '100%', ...styles }} />;
        case 'chakraui':
            return <SiChakraui style={{ height: '100%', width: '100%', ...styles }} />;
        case 'django':
            return <SiDjango style={{ height: '100%', width: '100%', ...styles }} />;
        case 'tailwindcss':
            return <RiTailwindCssFill style={{ height: '100%', width: '100%', ...styles }} />;
        case 'postgresdb':
            return <SiPostgresql style={{ height: '100%', width: '100%', ...styles }} />;
        case 'pwa':
            return <IoLogoPwa style={{ height: '100%', width: '100%', ...styles }} />;
        case 'mysql':
            return <SiMysql style={{ height: '100%', width: '100%', ...styles }} />;
        case 'framermotion':
            return <SiFramer style={{ height: '100%', width: '100%', ...styles }} />;
        case 'gitlab':
            return <BsGitlab style={{ height: '100%', width: '100%', ...styles }} />;
        case 'python':
            return <FaPython style={{ height: '100%', width: '100%', ...styles }} />;
        case 'jekyll':
            return <SiJekyll style={{ height: '100%', width: '100%', ...styles }} />;
        case 'websocket':
            return <PiPlugsFill style={{ height: '100%', width: '100%', ...styles }} />;
        case 'docker':
            return <FaDocker style={{ height: '100%', width: '100%', ...styles }} />;
        case 'materialui':
            return <SiMui style={{ height: '100%', width: '100%', ...styles }} />;
        case 'webpack':
            return <SiWebpack style={{ height: '100%', width: '100%', ...styles }} />;
        case 'graphql':
            return <SiGraphql style={{ height: '100%', width: '100%', ...styles }} />;
        case 'aws-s3':
            return <SiAmazons3 style={{ height: '100%', width: '100%', ...styles }} />;
        case 'vite':
            return <SiVite style={{ height: '100%', width: '100%', ...styles }} />;
    }

    return <FaQuestionCircle style={{ height: '100%', width: '100%', ...styles }} />;
}

export function getTechDisplayTitle(stack: string) {
    switch (stack) {
        case 'react':
            return 'ReactJS';
        case 'nodejs':
            return 'NodeJS';
        case 'typescript':
            return 'Typescript';
        case 'github':
            return 'Github';
        case 'git':
            return 'Git';
        case 'nextjs':
            return 'NextJS';
        case 'expressjs':
            return 'ExpressJS';
        case 'javascript':
            return 'Javascript';
        case 'mongodb':
            return 'MongoDB';
        case 'django':
            return 'Django';
        case 'tailwindcss':
            return 'Tailwind CSS';
        case 'chakraui':
            return 'Chakra UI';
        case 'materialui':
            return 'Material UI';
        case 'postgresdb':
            return 'PostgresDB';
        case 'pwa':
            return 'Progressive Web Apps';
        case 'mysql':
            return 'MySQL';
        case 'framermotion':
            return 'Framer Motion';
        case 'gitlab':
            return 'GitLab';
        case 'python':
            return 'Python';
        case 'jekyll':
            return 'Jekyll';
        case 'websocket':
            return 'WebSocket';
        case 'docker':
            return 'Docker';
        case 'webpack':
            return 'Webpack';
        case 'graphql':
            return 'GraphQL';
        case 'aws-s3':
            return 'AWS S3';
        case 'vite':
            return 'Vite';
    }

    return stack;
}
