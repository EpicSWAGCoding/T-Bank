export default {
    name: 'account',
    title: 'Account',
    type: 'document',
    fields: [
        {
            name: 'userId',
            title: 'User ID',
            type: 'string',
        },
        {
            name: 'balance',
            title: 'Balance',
            type: 'number',
        },
        {
            name: 'cardNumber',
            title: 'Card Number',
            type: 'string',
        },
        {
            name: 'currency',
            title: 'Currency',
            type: 'string', // You may want to create a reference to a separate currency type schema
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string', // You may want to create a reference to a separate name type schema
        },
    ],
};
