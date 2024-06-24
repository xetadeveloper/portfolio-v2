import { CSSProperties } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { RiTwitterXFill } from 'react-icons/ri';
import { SiTypescript } from 'react-icons/si';

type socialNames = 'linkedin' | 'twitter' | 'email' | 'github';

export function getSocialIcon({ icon, styles }: { icon: socialNames | string; styles?: CSSProperties }) {
    switch (icon) {
        case 'linkedin':
            return <FaLinkedin style={{ height: '100%', width: '100%', ...styles }} />;
        case 'email':
            return <MdEmail style={{ height: '100%', width: '100%', ...styles }} />;
        case 'typescript':
            return <SiTypescript style={{ height: '100%', width: '100%', ...styles }} />;
        case 'github':
            return <FaGithub style={{ height: '100%', width: '100%', ...styles }} />;
        case 'twitter':
            return <RiTwitterXFill style={{ height: '100%', width: '100%', ...styles }} />;
    }

    return <FaQuestionCircle style={{ height: '100%', width: '100%', ...styles }} />;
}

export function getSocialDisplayTitle(social: string) {
    switch (social) {
        case 'linkedin':
            return 'LinkedIn';
        case 'twitter':
            return 'X';
        case 'email':
            return 'Email';
        case 'github':
            return 'Github';
    }

    return social;
}
