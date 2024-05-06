import React from 'react'
import "../SideBar/SideBar.css"
import { LuLayoutDashboard } from "react-icons/lu";
import { GrAnalytics } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { IoFolderOpenOutline,IoNewspaperOutline,IoDocumentTextOutline,IoSettingsOutline  } from "react-icons/io5";
import { MdOutlineDownloadForOffline } from "react-icons/md";


export default function SideBar() {
  return (
    <aside className='sideBar-container border-end py-2'>
        <div className="row ps-3 gap-2">
            <div className="container w-100 mb-4 d-flex flex-row justify-content-start align-items-center">
            <img src="dashboard.png" alt="logo" className='logo rounded-circle'/>
            <span className="userName fw-bolder ps-3 fs-3">Ramora</span>
            </div>
            <div className="container w-100 mb-4 d-flex flex-row justify-content-start align-items-center">
            <img src="profile.png" alt="profile" className='profile rounded'/>
            <span className="userName fw-bolder ps-3 fs-4">Yousuf</span>
            </div>
            <div className="container mb-1">
                <span className="section fs-6 fw-bold text-uppercase section">menu</span>
            </div>
                <a href="#" className="link w-100 d-flex flex-row justify-content-start align-items-center text-secondary fs-6 fw-bold rounded"><LuLayoutDashboard  className='me-2'/> Dashboard</a>
                <a href="#" className="link w-100 d-flex flex-row justify-content-start align-items-center text-secondary fs-6 fw-bold rounded"><GrAnalytics  className='me-2'/> Compaign</a>
                <a href="#" className="link w-100 d-flex flex-row justify-content-start align-items-center text-secondary fs-6 fw-bold rounded"><FaRegUser  className='me-2'/> User</a>
                <a href="#" className="link w-100 d-flex flex-row justify-content-start align-items-center text-secondary fs-6 fw-bold rounded"><IoFolderOpenOutline  className='me-2'/> Analytics</a>
                <a href="#" className="link w-100 d-flex flex-row justify-content-start align-items-center text-secondary fs-6 fw-bold rounded"><IoNewspaperOutline  className='me-2'/> Billing</a>
            <div className="container">
                <span className="section fs-6 fw-bold text-uppercase section">help</span>
            </div>
                <a href="#" className="link w-100 d-flex flex-row justify-content-start align-items-center text-secondary fs-6 fw-bold rounded"><MdOutlineDownloadForOffline  className='me-2'/> Internal Pages</a>
                <a href="#" className="link w-100 d-flex flex-row justify-content-start align-items-center text-secondary fs-6 fw-bold rounded"><IoDocumentTextOutline   className='me-2'/> Documentaion</a>
                <a href="#" className="link w-100 d-flex flex-row justify-content-start align-items-center text-secondary fs-6 fw-bold rounded"><IoSettingsOutline   className='me-2'/> Settings</a>
        </div>
    </aside>
  )
}
