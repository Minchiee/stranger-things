const BASE_URL = 'https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT'

export async function getPosts() {
    const response = await fetch(`${BASE_URL}/posts`)
    const result = await response.json()
    const posts = result.data.posts
    return posts
}

export async function registerUser(username, password) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({
            user: {
                username,
                password
            }
        })
    }
    const response = await fetch(`${BASE_URL}/users/register`, options)
    const result = await response.json()
   return result.data
}

export async function loginUser(username, password) {
    // console.log(username, password)
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username,
                password
            }
        })
    }
    const response = await fetch(`${BASE_URL}/users/login`,options)
    const result = await response.json()
    console.log(result)
    return result.data
}

export async function getMe(token) {
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    const response = await fetch(`${BASE_URL}/users/me`, options)
    const result = await response.json()
    // console.log(response)
    return result.data
}

export async function updatePost(post, id, token) {
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }, body: JSON.stringify({
            post
        })
    }
    const response = await fetch(`${BASE_URL}/posts/${id}`, options)
    const result = await response.json()
    return result
}
export async function deletePost(id, token) {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    const response = await fetch(`${BASE_URL}/posts/${id}`, options)
    const result = await response.json()
    return result
}

export async function getPostsDetails(id, token) {
    const options = {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            post: {
                title: `${title}`,
                description: `${description}`,
                price: `${price}`,
                location: `${location}`,
                willDeliver: `${willDeliver}`,
            }
        })
    }
    const response = await fetch(`${BASE_URL}/posts/${id}`, options)
    const result = await response.json()
    return result.data
}