import getTechIcon from '~/utils/techStackIcons';
import Products from './Products';
import Projects from './Projects';
import Testimonials from './Testimonials';
import { ReactElement } from 'react';
import { TWorkItem, WorkItemDetail } from '~/types';

const dummyModal: WorkItemDetail = {
    title: 'JournalMe',
    shortDescription: '  A forex journaling application for ease of use and clean UI',
    previewImage: '/images/journalme/home.png',
    galleryImages: [],
    repoLink: '',
    stack: [
        { icon: getTechIcon({ icon: 'react' }), title: 'React' },
        { icon: getTechIcon({ icon: 'react' }), title: 'React' },
        { icon: getTechIcon({ icon: 'react' }), title: 'React' },
        { icon: getTechIcon({ icon: 'react' }), title: 'React' },
    ],
    liveLink: '',
    post: ` Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of type
    and scrambled it to make a type specimen book. It has survived not
    only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s
    with the release of Letraset sheets containing Lorem Ipsum passages,
    and more recently with desktop publishing software like Aldus
    PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
    dummy text of the printing and typesetting industry. Lorem Ipsum has
    been the industry's standard dummy text ever since the 1500s, when
    an unknown printer took a galley of type and scrambled it to make a
    type specimen book. It has survived not only five centuries, but
    also the leap into electronic typesetting, remaining essentially
    unchanged. It was popularised in the 1960s with the release of
    Letraset sheets containing Lorem Ipsum passages, and more recently
    with desktop publishing software like Aldus PageMaker including
    versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the
    printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it to make a type
    specimen book. It has survived not only five centuries, but also the
    leap into electronic typesetting, remaining essentially unchanged.
    It was popularised in the 1960s with the release of Letraset sheets
    containing Lorem Ipsum passages, and more recently with desktop
    publishing software like Aldus PageMaker including versions of Lorem
    Ipsum. Lorem Ipsum is simply dummy text of the printing and
    typesetting industry. Lorem Ipsum has been the industry's standard
    dummy text ever since the 1500s, when an unknown printer took a
    galley of type and scrambled it to make a type specimen book. It has
    survived not only five centuries, but also the leap into electronic
    typesetting, remaining essentially unchanged. It was popularised in
    the 1960s with the release of Letraset sheets containing Lorem Ipsum
    passages, and more recently with desktop publishing software like
    Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is
    simply dummy text of the printing and typesetting industry. Lorem
    Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled
    it to make a type specimen book. It has survived not only five
    centuries, but also the leap into electronic typesetting, remaining
    essentially unchanged. It was popularised in the 1960s with the
    release of Letraset sheets containing Lorem Ipsum passages, and more
    recently with desktop publishing software like Aldus PageMaker
    including versions of Lorem Ipsum.`,
};

export const products: TWorkItem[] = [
    {
        imgUrl: '/images/journalme/home.png',
        title: 'JournalMe',
        description:
            "MongoDB NoSQL database is used to store the trader's data on user info and trades info, and the data is stored in the cloud using the MongoDB Atlas DBaaS platform, which employs cluster support as replica sets of the database to increase data redundancy and availability.",
        imgAlt: 'JournalMe homepage screenshot',
        techStack: [
            { icon: getTechIcon({ icon: 'react' }), stackTitle: 'React' },
            { icon: getTechIcon({ icon: 'react' }), stackTitle: 'React' },
            { icon: getTechIcon({ icon: 'react' }), stackTitle: 'React' },
            { icon: getTechIcon({ icon: 'react' }), stackTitle: 'React' },
        ],
        details: dummyModal,
    },
    {
        imgUrl: '/images/picskeep/home.png',
        title: 'PicsKeep',
        description:
            "MongoDB NoSQL database is used to store the trader's data on user info and trades info, and the data is stored in the cloud using the MongoDB Atlas DBaaS platform, which employs cluster support as replica sets of the database to increase data redundancy and availability.",
        imgAlt: 'Picskeep homepage screenshot',
        techStack: [{ icon: getTechIcon({ icon: 'react' }), stackTitle: 'React' }],
        details: dummyModal,
    },
    {
        imgUrl: '/images/chatstill/home.png',
        title: 'ChatStill',
        description:
            "MongoDB NoSQL database is used to store the trader's data on user info and trades info, and the data is stored in the cloud using the MongoDB Atlas DBaaS platform, which employs cluster support as replica sets of the database to increase data redundancy and availability.",
        imgAlt: 'ChatStill homepage screenshot',
        techStack: [{ icon: getTechIcon({ icon: 'react' }), stackTitle: 'React' }],
        details: dummyModal,
    },
];

export const projects: TWorkItem[] = [
    {
        imgUrl: '/images/taskbright/home.png',
        title: 'Taskbright',
        description:
            "MongoDB NoSQL database is used to store the trader's data on user info and trades info, and the data is stored in the cloud using the MongoDB Atlas DBaaS platform, which employs cluster support as replica sets of the database to increase data redundancy and availability.",
        imgAlt: 'Taskbright homepage screenshot',
        techStack: [{ icon: getTechIcon({ icon: 'react' }), stackTitle: 'React' }],
        details: dummyModal,
    },
    {
        imgUrl: '/images/journalme/home.png',
        title: 'JournalMe',
        description:
            "MongoDB NoSQL database is used to store the trader's data on user info and trades info, and the data is stored in the cloud using the MongoDB Atlas DBaaS platform, which employs cluster support as replica sets of the database to increase data redundancy and availability.",
        imgAlt: 'JournalMe homepage screenshot',
        techStack: [{ icon: getTechIcon({ icon: 'react' }), stackTitle: 'React' }],
        details: dummyModal,
    },
    {
        imgUrl: '/images/picskeep/home.png',
        title: 'PicsKeep',
        description:
            "MongoDB NoSQL database is used to store the trader's data on user info and trades info, and the data is stored in the cloud using the MongoDB Atlas DBaaS platform, which employs cluster support as replica sets of the database to increase data redundancy and availability.",
        imgAlt: 'Picskeep homepage screenshot',
        techStack: [{ icon: getTechIcon({ icon: 'react' }), stackTitle: 'React' }],
        details: dummyModal,
    },
    {
        imgUrl: '/images/chatstill/home.png',
        title: 'ChatStill',
        description:
            "MongoDB NoSQL database is used to store the trader's data on user info and trades info, and the data is stored in the cloud using the MongoDB Atlas DBaaS platform, which employs cluster support as replica sets of the database to increase data redundancy and availability.",
        imgAlt: 'ChatStill homepage screenshot',
        techStack: [{ icon: getTechIcon({ icon: 'javascript' }), stackTitle: 'Javascript' }],
        details: dummyModal,
    },
];

export const testimonials = [];

export interface WorkTab {
    title: string;
    component: ReactElement;
}

export const tabs: WorkTab[] = [
    {
        title: "Products I've worked on",
        component: <Products />,
    },
    {
        title: 'Personal projects',
        component: <Projects />,
    },
    {
        title: 'Testimonials',
        component: <Testimonials />,
        // modal: {
        //     description: '',
        //     previewImage: '',
        //     title: '',
        //     galleryImages: [],
        //     repoLink: '',
        //     stack: [],
        //     liveLink: '',
        //     post: '',
        // },
    },
];
