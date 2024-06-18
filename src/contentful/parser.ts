import { Entry, EntryCollection } from 'contentful';
import { TWorkItem } from '~/modules/Works/types';
import { ProjectType } from './types/ProjectType';

export default {};

// export function convertProjectsToList(works: EntryCollection<ProjectType, undefined, string>): TWorkItem[] {
//     const convertedItems: TWorkItem[] = [];

//     works.items.map((work) => {
//         const converted: TWorkItem = {
//             type: work.fields.type[0],
//             title: work.fields.title,
//             shortDescription: work.fields.shortDescription,
//             imgAlt: `Preview image of ${work.fields.title}`,
//             imgUrl: work.fields.previewImage,
//             techStack: work.fields.stack,
//             details: {
//                 galleryImages: work.fields.galleryImages ?? [],
//             },
//         };
//     });

//     return convertedItems;
// }
