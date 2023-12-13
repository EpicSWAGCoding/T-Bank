// messageSchema.js

export default {
    name: 'message',
    title: 'Message',
    type: 'document',
    fields: [
        {
            name: 'text',
            title: 'Text',
            type: 'string',
            description: 'The text content of the message.',
        },
        {
            name: 'timestamp',
            title: 'Timestamp',
            type: 'string',
            description: 'The timestamp of the message.',
        },
        {
            name: 'userId',
            title: 'User ID',
            type: 'string',
            description: 'The user ID associated with the message.',
        },
    ],
};
