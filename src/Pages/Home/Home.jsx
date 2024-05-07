import React from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import Header from '../../Components/Header/Header'
export default function Home() {
  return (
    <div className='w-100 d-flex flex-row justify-content-start'>
        <SideBar />
        <Header />
    </div>
  )
}
