import { EntrySkeletonType } from 'contentful';
import { TypeProjectFields } from '../__generated__';

export interface ProjectType extends EntrySkeletonType {
    contentTypeId: string;
    fields: TypeProjectFields;
}
