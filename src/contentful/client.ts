import { createClient } from 'contentful';

const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!CONTENTFUL_ACCESS_TOKEN || !CONTENTFUL_SPACE_ID)
    throw new Error('Required environment variables not found: Contentful');

export const contentfulClient = createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_ACCESS_TOKEN,
});
