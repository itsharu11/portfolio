import {createClient, groq} from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production", // "production"
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!, // "pv8y60vp"
    apiVersion: "2022-11-16",
    useCdn: process.env.NODE_ENV === 'production', // server-side is statically generated, the CDN is only necessary beneficial if queries are called on-demand
        
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
    createImageUrlBuilder(config).image(source)


