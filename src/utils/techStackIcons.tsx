import { CSSProperties } from 'react';
import { FaGit, FaGithub, FaNodeJs, FaReact } from 'react-icons/fa6';
import { RiJavascriptFill, RiNextjsLine } from 'react-icons/ri';
import { SiExpress, SiTypescript } from 'react-icons/si';

export default function getTechIcon({ icon, styles }: { icon: keyof typeof icons; styles?: CSSProperties }) {
    const icons = {
        react: <FaReact style={{ height: '100%', width: '100%', ...styles }} />,
        nodejs: <FaNodeJs style={{ height: '100%', width: '100%', ...styles }} />,
        typescript: <SiTypescript style={{ height: '100%', width: '100%', ...styles }} />,
        github: <FaGithub style={{ height: '100%', width: '100%', ...styles }} />,
        git: <FaGit style={{ height: '100%', width: '100%', ...styles }} />,
        nextjs: <RiNextjsLine style={{ height: '100%', width: '100%', ...styles }} />,
        expressjs: <SiExpress style={{ height: '100%', width: '100%' }} />,
        javascript: <RiJavascriptFill style={{ height: '100%', width: '100%' }} />
    };

    return icons[icon];
}
