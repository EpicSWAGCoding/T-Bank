import client from "./sanity";

let sanityQuery = (query, params?) => client.fetch(query, params)

export const getUser = () => {
    return sanityQuery(`
        *[_type=='user']{
          name,
          email
        }
    `)
}

export const getStories = () => {
    return sanityQuery(`
        *[_type=='stories']{
            heading,
            "images": images[]{
            "url": asset->url,
            }
        }
    `)
}

export const getAccounts = () => {
    return sanityQuery(`
        *[_type=='account']{
            name,
            currency,
            userId,
            cardNumber,
            balance
        }
    `)
}

export const getMessages = () => {
    return sanityQuery(`
    *[_type == "Message"]
    `)
}