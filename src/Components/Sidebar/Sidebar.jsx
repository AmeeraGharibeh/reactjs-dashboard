import './Sidebar.css';
import { Link } from "react-router-dom";

import {LineStyle,  PersonOutline, PublicOutlined, SettingsOutlined, ForumOutlined} from '@material-ui/icons'
import { useState } from 'react';

export default function Sidebar() {
  const [index, setIndex] = useState(1);
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h5 className="saidbarTitle">Main panel</h5>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem" onClick={() => {setIndex(1)}}>
              <LineStyle/>
            <div className='label'>Home
            {index === 1 && <div className="active"></div>}
            </div>
            </li></Link>
                <Link to="/user" className="link">
            <li className="sidebarListItem" onClick={() => {setIndex(2)}}><PersonOutline/>
            <div className='label'>
            Users
            {index === 2 && <div className="active"></div>}
            </div></li></Link>
               <Link to="/countries" className="link">
            <li className="sidebarListItem" onClick={() => {setIndex(3)}}><PublicOutlined/>
            <div className='label'>
            Countries
           {index === 3 && <div className="active"></div>}
            </div></li></Link>
            <Link to="/rooms" className="link">
            <li className="sidebarListItem" onClick={() => {setIndex(4)}}><ForumOutlined/>
            <div className='label'>
            Rooms
           {index === 4 && <div className="active"></div>}
            </div></li></Link>
            <Link to="/categories" className="link">
            <li className="sidebarListItem" onClick={() => {setIndex(5)}}><SettingsOutlined/>
            <div className='label'>
            Advanced
           {index === 5 && <div className="active"></div>}
            </div></li></Link>
          </ul>
        
        </div>
      </div>
    
    </div>
  )
}
