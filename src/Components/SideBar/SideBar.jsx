import React, { useEffect, useState } from 'react'
import "../SideBar/SideBar.css"
import { LuLayoutDashboard } from "react-icons/lu";
import { GrAnalytics } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoFolderOpenOutline,IoNewspaperOutline,IoDocumentTextOutline,IoSettingsOutline  } from "react-icons/io5";
import { MdOutlineDownloadForOffline  } from "react-icons/md";

export default function SideBar() {
    const [openMenu,setOpenMenu] = useState(true)
    const handleMenu = () =>{
        if (openMenu === true) {
            setOpenMenu(false)
             const closeButton = document.getElementsByClassName('close');
             for (let index = 0; index < closeButton.length; index++) {
                closeButton[index].style.display= 'none'
             }
             document.getElementsByClassName('sideBar-container')[0].style.width='120px'
             const links = document.getElementsByClassName('link');
             for (let index = 0; index < links.length; index++) {
                links[index].style.justifyContent= 'center'
                links[index].style.fontSize= '20px'
                links[index].style.width= '50%'
             }
             document.getElementsByClassName('section')[0].style.textAlign='center' 
             document.getElementsByClassName('section')[1].style.textAlign='center'
             document.getElementsByClassName('logo-container')[0].style.justifyContent= 'center'
             document.getElementsByClassName('profile-container')[0].style.justifyContent= 'center'
        }
        else{
            setOpenMenu(true)
            const closeButton = document.getElementsByClassName('close');
             for (let index = 0; index < closeButton.length; index++) {
                closeButton[index].style.display= 'inline-block'
             }
             document.getElementsByClassName('sideBar-container')[0].style.width='250px'
             const links = document.getElementsByClassName('link');
             for (let index = 0; index < links.length; index++) {
                links[index].style.justifyContent= 'flex-start'
                links[index].style.fontSize= '16px'
                links[index].style.width= '90%'
             }
             document.getElementsByClassName('section')[0].style.textAlign='start'
             document.getElementsByClassName('section')[1].style.textAlign='start'
             document.getElementsByClassName('logo-container')[0].style.justifyContent= 'flex-start'
             document.getElementsByClassName('profile-container')[0].style.justifyContent= 'flex-start'

        }
    }
    useEffect(()=>{

    },[setOpenMenu])
  return (
    <aside className='sideBar-container border-end py-2'>
        <div className="sidebar-content">
            <div className="container logo-container w-100 mb-4" onClick={handleMenu}>
            <img src="dashboard.png" alt="logo" className='logo rounded-circle'/>
            {openMenu && <span className="userName fw-bolder fs-3">Ramora</span>}
            </div>
            <div className="container profile-container w-100 mb-4">
            <img src="profile.png" alt="profile" className='profile rounded'/>
            {openMenu && <span className="userName fw-bolder ps-3 fs-4">Yousuf</span>}
            </div>
                <span className="section fs-6 fw-bold text-uppercase">menu</span>
                <a href="#" className="link  text-secondary fw-bold rounded"><LuLayoutDashboard  className='me-2'/> <span className='close'>Dashboard</span> </a>
                <a href="#" className="link  text-secondary fw-bold rounded"><GrAnalytics  className='me-2'/> <span className='close'>Compaign</span></a>
                <a href="#" className="link  text-secondary fw-bold rounded"><FaRegUser  className='me-2'/> <span className='close'>User</span></a>
                <a href="#" className="link  text-secondary fw-bold rounded"><IoFolderOpenOutline  className='me-2'/> <span className='close'>Analytics</span></a>
                <a href="#" className="link  text-secondary fw-bold rounded"><IoNewspaperOutline  className='me-2'/> <span className='close'>Billing</span></a>
                <span className="section fs-6 fw-bold text-uppercase">help</span>
                <a href="#" className="link  text-secondary fw-bold rounded"><MdOutlineDownloadForOffline  className='me-2'/> <span className='close'>Internal Pages</span></a>
                <a href="#" className="link  text-secondary fw-bold rounded"><IoDocumentTextOutline   className='me-2'/> <span className='close'>Documentaion</span></a>
                <a href="#" className="link  text-secondary fw-bold rounded"><IoSettingsOutline   className='me-2'/> <span className='close'>Settings</span></a>
                <a href="#" className="link logOut mt-5 text-secondary fw-bold rounded"><RiLogoutCircleRLine   className='me-2'/> <span className='close'>Log Out</span></a>
        </div>
    </aside>
  )
}
