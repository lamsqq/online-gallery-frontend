import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createAuthor = async (author) => {
    const {data} = await $authHost.post('api/author', author)
    return data
}

export const fetchAuthors = async () => {
    const {data} = await $host.get('api/author')
    return data
}

export const createCategory = async (category) => {
    const {data} = await $authHost.post('api/category', category)
    return data
}

export const fetchCategories = async () => {
    const {data} = await $host.get('api/category', )
    return data
}

export const createPicture = async (picture) => {
    const {data} = await $authHost.post('api/picture', picture)
    return data
}

export const fetchPictures = async (authorId, categoryId, page, limit= 5) => {
    const {data} = await $host.get('api/picture', {params: {
            authorId, categoryId, page, limit
        }})
    return data
}

export const fetchOnePicture = async (id) => {
    const {data} = await $host.get('api/picture/' + id)
    return data
}