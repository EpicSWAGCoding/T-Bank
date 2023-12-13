export default {
    name: 'stories',
    title: 'Stories',
    type: 'document',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
            description: 'Enter the heading for your document',
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image' }],
            description: 'Upload or select images for your document',
        },
    ],
};
