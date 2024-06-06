import { ReactElement } from 'react';

export type ArticleItem = {
    title: string;
    imageUrl: string;
    author: string;
    createdOn: string;
    articleUrl: string;
};

export type TWorkItem = {
    title: string;
    description: string;
    imgUrl: string;
    imgAlt: string;
    techStack: { icon: ReactElement; stackTitle: string }[];
    details: WorkItemDetail;
};

export type WorkItemDetail = {
    title: string;
    shortDescription: string;
    previewImage: string;
    galleryImages: string[];
    repoLink: string;
    stack: { icon: ReactElement; title: string }[];
    liveLink: string;
    post: string;
};
