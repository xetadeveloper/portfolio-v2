import { ReactElement } from 'react';

export type TWorkItem = {
    type: ('personal' | 'commercial')[];
    title: string;
    shortDescription: string;
    status: ('live' | 'in-progress')[];
    longDescription: string;
    liveLink?: string;
    previewDescription: string;
    previewImageUrl: string;
    previewImgAlt: string;
    galleryImagesUrl: string[];
    repoLink?: string;
    stack: string[];
    isPrivateRepository: boolean;
    isFeaturedProject: boolean;
};
