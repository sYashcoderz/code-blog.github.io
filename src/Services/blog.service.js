import Axios from 'axios'

export const fetchAllData = async (data) => {
try {
    const response = await Axios.get('https://jsonplaceholder.typicode.com/posts')
    if (response) {
    console.log(response)
        return response.data
    } else {
        return null
    }
} catch (error) {
    return { error }
}
}

export const fetchAllCommentsByPostId = async (id) => {
try {
    const response = await Axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    if (response) {
    console.log(response)
        return response.data
    } else {
        return null
    }
} catch (error) {
    return { error }
}
}

export const fetchAuthorByUserId = async (id) => {
try {
    const response = await Axios.get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
    if (response) {
    console.log(response)
        return response.data
    } else {
        return null
    }
} catch (error) {
    return { error }
}
}