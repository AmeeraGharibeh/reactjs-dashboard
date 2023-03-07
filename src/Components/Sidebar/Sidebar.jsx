import './Sidebar.css';
import { Link } from "react-router-dom";

import {LineStyle, Timeline, TrendingUp, MoneyOutlined,
   CategoryOutlined, PersonOutline,
    Transform, ReportProblemOutlined, NotificationsOutlined, ShoppingCartOutlined, StoreOutlined, ShoppingBasketOutlined} from '@material-ui/icons'
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
               <Link to="/stores" className="link">
            <li className="sidebarListItem" onClick={() => {setIndex(3)}}><StoreOutlined/>
            <div className='label'>
            Stores
           {index === 3 && <div className="active"></div>}
            </div></li></Link>
            <Link to="/products" className="link">
            <li className="sidebarListItem" onClick={() => {setIndex(4)}}><ShoppingBasketOutlined/>
            <div className='label'>
            Products
           {index === 4 && <div className="active"></div>}
            </div></li></Link>
            <Link to="/categories" className="link">
            <li className="sidebarListItem" onClick={() => {setIndex(5)}}><CategoryOutlined/>
            <div className='label'>
            Categories
           {index === 5 && <div className="active"></div>}
            </div></li></Link>
          </ul>
        
        </div>
      </div>
    
    </div>
  )
}
