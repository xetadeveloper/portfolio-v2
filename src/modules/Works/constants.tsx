import { FaReact } from 'react-icons/fa6';
import { WorkItemProps } from './components/WorkItem';
import { RiJavascriptFill } from 'react-icons/ri';

export const products: WorkItemProps[] = [
    {
        imgUrl: '/images/journalme/home.png',
        title: 'JournalMe',
        description:
            "MongoDB NoSQL database is used to store the trader's data on user info and trades info, and the data is stored in the cloud using the MongoDB Atlas DBaaS platform, which employs cluster support as replica sets of the database to increase data redundancy and availability.",
        imgAlt: 'JournalMe homepage screenshot',
        techStack: [
            { icon: <FaReact style={{ height: '100%', width: '100%' }} />, stackTitle: 'React' },
            { icon: <FaReact style={{ height: '100%', width: '100%' }} />, stackTitle: 'React' },
            { icon: <FaReact style={{ height: '100%', width: '100%' }} />, stackTitle: 'React' },
            { icon: <FaReact style={{ height: '100%', width: '100%' }} />, stackTitle: 'React' },
        ],
    },
    {
        imgUrl: '/images/picskeep/home.png',
        title: 'PicsKeep',
        description:
        "MongoDB NoSQL database is used to store the trader's data on user info and trades info, and the data is stored in the cloud using the MongoDB Atlas DBaaS platform, which employs cluster support as replica sets of the database to increase data redundancy and availability.",
        imgAlt: 'Picskeep homepage screenshot',
        techStack: [{ icon: <FaReact style={{ height: '100%', width: '100%' }} />, stackTitle: 'React' }],
    },
    {
        imgUrl: '/images/chatstill/home.png',
        title: 'ChatStill',
        description:
            "MongoDB NoSQL database is used to store the trader's data on user info and trades info, and the data is stored in the cloud using the MongoDB Atlas DBaaS platform, which employs cluster support as replica sets of the database to increase data redundancy and availability.",
        imgAlt: 'ChatStill homepage screenshot',
        techStack: [{ icon: <FaReact style={{ height: '100%', width: '100%' }} />, stackTitle: 'React' }],
    },
];

export const projects: WorkItemProps[] = [
    {
        imgUrl: '/images/taskbright/home.png',
        title: 'Taskbright',
        description:
            "MongoDB NoSQL database is used to store the trader's data on user info and trades info, and the data is stored in the cloud using the MongoDB Atlas DBaaS platform, which employs cluster support as replica sets of the database to increase data redundancy and availability.",
        imgAlt: 'Taskbright homepage screenshot',
        techStack: [{ icon: <FaReact style={{ height: '100%', width: '100%' }} />, stackTitle: 'React' }],
    },
    {
        imgUrl: '/images/journalme/home.png',
        title: 'JournalMe',
        description:
            "MongoDB NoSQL database is used to store the trader's data on user info and trades info, and the data is stored in the cloud using the MongoDB Atlas DBaaS platform, which employs cluster support as replica sets of the database to increase data redundancy and availability.",
        imgAlt: 'JournalMe homepage screenshot',
        techStack: [{ icon: <FaReact style={{ height: '100%', width: '100%' }} />, stackTitle: 'React' }],
    },
    {
        imgUrl: '/images/picskeep/home.png',
        title: 'PicsKeep',
        description:
            "MongoDB NoSQL database is used to store the trader's data on user info and trades info, and the data is stored in the cloud using the MongoDB Atlas DBaaS platform, which employs cluster support as replica sets of the database to increase data redundancy and availability.",
        imgAlt: 'Picskeep homepage screenshot',
        techStack: [{ icon: <FaReact style={{ height: '100%', width: '100%' }} />, stackTitle: 'React' }],
    },
    {
        imgUrl: '/images/chatstill/home.png',
        title: 'ChatStill',
        description:
            "MongoDB NoSQL database is used to store the trader's data on user info and trades info, and the data is stored in the cloud using the MongoDB Atlas DBaaS platform, which employs cluster support as replica sets of the database to increase data redundancy and availability.",
        imgAlt: 'ChatStill homepage screenshot',
        techStack: [
            { icon: <RiJavascriptFill style={{ height: '100%', width: '100%' }} />, stackTitle: 'Javascript' },
        ],
    },
];

export const testimonials = [];
