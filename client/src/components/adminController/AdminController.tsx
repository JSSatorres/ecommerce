import React from 'react'
import {useGetUsersQuery,useGetUserByIdQuery} from '../../store/api/usersSliceApi'

const AdminController = () => {
    const {data:users }= useGetUsersQuery() 
    const {data:user}=  useGetUserByIdQuery ("62dfdb1774b0259a2a698447")
    const allUsers = users?.users 
    console.log(allUsers);
    console.log(user);
    
  return (
    <div>
       


    </div>
  )
}

export default AdminController