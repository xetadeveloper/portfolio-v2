import { CSSProperties } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
import { FaGit, FaGithub, FaNodeJs, FaReact } from 'react-icons/fa6';
import { RiJavascriptFill, RiNextjsLine } from 'react-icons/ri';
import { SiExpress, SiTypescript } from 'react-icons/si';

type stackName = 'react' | 'nodejs' | 'typescript' | 'github' | 'git' | 'expressjs' | 'javascript';

export function getTechIcon({ icon, styles }: { icon: stackName | string; styles?: CSSProperties }) {
    switch (icon) {
        case 'react':
            return <FaReact style={{ height: '100%', width: '100%', ...styles }} />;
        case 'nodejs':
            return <FaNodeJs style={{ height: '100%', width: '100%', ...styles }} />;
        case 'typescript':
            return <SiTypescript style={{ height: '100%', width: '100%', ...styles }} />;
        case 'github':
            return <FaGithub style={{ height: '100%', width: '100%', ...styles }} />;
        case 'git':
            return <FaGit style={{ height: '100%', width: '100%', ...styles }} />;
        case 'nextjs':
            return <RiNextjsLine style={{ height: '100%', width: '100%', ...styles }} />;
        case 'expressjs':
            return <SiExpress style={{ height: '100%', width: '100%' }} />;
        case 'javascript':
            return <RiJavascriptFill style={{ height: '100%', width: '100%' }} />;
    }

    return <FaQuestionCircle style={{ height: '100%', width: '100%' }} />;
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
    }

    return stack;
}
