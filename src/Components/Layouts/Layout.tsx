import React from 'react'
import Appbar from './Appbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from '../Navbar/Navbar'
import { useRecoilValue } from 'recoil'
import { userAtom } from '../../Recoil/User'

const Layout = () => {
  // TODO = > Implement functionality to know if user is logged in, if not loggedn in then navigate to login page.
  // const user = useRecoilValue(userAtom)
  // console.log("user", user)
  return (
    <div>
        <div className='shadow-lg w-[100%] h-14 fixed bg-white'><Appbar/></div>
        <div className='overflow-auto min-h-[calc(100vh-82px)]'><Outlet/></div>
        <div className='h-6'><Footer/></div>
    </div>
  )
}

export default Layout