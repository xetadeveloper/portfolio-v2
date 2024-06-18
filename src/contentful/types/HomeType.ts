import { EntrySkeletonType } from 'contentful';
import { TypeHomeFields } from '../__generated__';

export interface HomeType extends EntrySkeletonType {
    contentTypeId: string;
    fields: TypeHomeFields;
}
