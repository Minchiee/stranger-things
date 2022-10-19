import React from 'react'
import {Login} from './'
const Me = () => {
    async function getMe() {
    
        const options = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer TOKEN_STRING_HERE'
            }
        }
        const response = await fetch(`${BASE_URL}/users/me`, options)
        const result = await response.json()
        return result.data
    }


  return (
    <div>Me</div>
  )
}

export default Me