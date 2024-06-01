import { WorkItemProps } from './components/WorkItem';
import getTechIcon from '~/utils/techStackIcons';

export const products: WorkItemProps[] = [
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
    },
    {
        imgUrl: '/images/picskeep/home.png',
        title: 'PicsKeep',
        description:
            "MongoDB NoSQL database is used to store the trader's data on user info and trades info, and the data is stored in the cloud using the MongoDB Atlas DBaaS platform, which employs cluster support as replica sets of the database to increase data redundancy and availability.",
        imgAlt: 'Picskeep homepage screenshot',
        techStack: [{ icon: getTechIcon({ icon: 'react' }), stackTitle: 'React' }],
    },
    {
        imgUrl: '/images/chatstill/home.png',
        title: 'ChatStill',
        description:
            "MongoDB NoSQL database is used to store the trader's data on user info and trades info, and the data is stored in the cloud using the MongoDB Atlas DBaaS platform, which employs cluster support as replica sets of the database to increase data redundancy and availability.",
        imgAlt: 'ChatStill homepage screenshot',
        techStack: [{ icon: getTechIcon({ icon: 'react' }), stackTitle: 'React' }],
    },
];

export const projects: WorkItemProps[] = [
    {
        imgUrl: '/images/taskbright/home.png',
        title: 'Taskbright',
        description:
            "MongoDB NoSQL database is used to store the trader's data on user info and trades info, and the data is stored in the cloud using the MongoDB Atlas DBaaS platform, which employs cluster support as replica sets of the database to increase data redundancy and availability.",
        imgAlt: 'Taskbright homepage screenshot',
        techStack: [{ icon: getTechIcon({ icon: 'react' }), stackTitle: 'React' }],
    },
    {
        imgUrl: '/images/journalme/home.png',
        title: 'JournalMe',
        description:
            "MongoDB NoSQL database is used to store the trader's data on user info and trades info, and the data is stored in the cloud using the MongoDB Atlas DBaaS platform, which employs cluster support as replica sets of the database to increase data redundancy and availability.",
        imgAlt: 'JournalMe homepage screenshot',
        techStack: [{ icon: getTechIcon({ icon: 'react' }), stackTitle: 'React' }],
    },
    {
        imgUrl: '/images/picskeep/home.png',
        title: 'PicsKeep',
        description:
            "MongoDB NoSQL database is used to store the trader's data on user info and trades info, and the data is stored in the cloud using the MongoDB Atlas DBaaS platform, which employs cluster support as replica sets of the database to increase data redundancy and availability.",
        imgAlt: 'Picskeep homepage screenshot',
        techStack: [{ icon: getTechIcon({ icon: 'react' }), stackTitle: 'React' }],
    },
    {
        imgUrl: '/images/chatstill/home.png',
        title: 'ChatStill',
        description:
            "MongoDB NoSQL database is used to store the trader's data on user info and trades info, and the data is stored in the cloud using the MongoDB Atlas DBaaS platform, which employs cluster support as replica sets of the database to increase data redundancy and availability.",
        imgAlt: 'ChatStill homepage screenshot',
        techStack: [{ icon: getTechIcon({ icon: 'javascript' }), stackTitle: 'Javascript' }],
    },
];

export const testimonials = [];
