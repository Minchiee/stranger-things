const BASE_URL = 'https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT'
const COHORT = '2209-FTB-ET-WEB-FT'

export async function getPosts() {
    const response = await fetch(`${BASE_URL}/api/${COHORT}/posts`)
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
    const response = await fetch(`${BASE_URL}/api/${COHORT}/users/register`, options)
    const result = await response.json()
    console.log(result)
    return result.data

}

export async function loginUser(username, password) {
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
    const response = await fetch(`${BASE_URL}/api/${COHORT}/users/login`,options)
    const result = await response.json()
    // let newUserList = [...userList, result.data.newUser];
    // setUserList(newUserList);
    console.log(result)
}


// async function getPosts() {
//     const response = await fetch(`${BASE_URL}/api/${COHORT}/posts`);
//     const users = await response.json();
//     setPosts(users.data.posts);
// }


// function chooseUser(paramId) {
//     let chosen = puppyList.filter(elem => elem.id === paramId)[0];
//     setChosenPuppy(chosen);
//     console.log(chosen);
// }