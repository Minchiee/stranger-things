import React, {useEffect} from 'react'
import {Login} from './'
import {getMe} from '../api-adapter'


const Me = () => {
    
    useEffect(() => {
        console.log('helllo')
        const getMeData = async () => {
        const myself = await getMe(localStorage.getItem('token'))
        console.log(myself)
      } 
      getMeData()
    }, [])
    
  return (
    <div>Hello</div>
  )
}

export default Me