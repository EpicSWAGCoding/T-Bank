import { createClient } from '@sanity/client'

const client = createClient({
    projectId: 'ffvmhhpx',
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-12-08'
})

export default client

export const urlFor = source => builder.image(source)