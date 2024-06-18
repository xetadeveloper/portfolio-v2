import { ReactElement } from 'react';

export type TWorkItem = {
    type: 'personal' | 'commercial';
    title: string;
    shortDescription: string;
    imgUrl: string;
    imgAlt: string;
    status: 'live' | 'in-progress';
    longDescription: string;
    liveLink?: string;
    previewDescription: string;
    previewImage: string;
    galleryImages: string[];
    repoLink: string;
    stack: { icon: ReactElement; title: string }[];
};

export interface ContentfulWorksProject {
    title: string;
    description: string;
    imgUrl: string;
    stack: string[];
    type: 'commercial' | 'personal';
    shortDescription: string;
    previewDescription: string;
    previewImage: string;
    repositoryLink: string;
    liveLink: string;
    details: string;
    galleryImages: string[];
    status: 'live' | 'inProgress';
}
