import './Sidebar.css';
import { Link } from "react-router-dom";

import {LineStyle, Timeline, TrendingUp, MoneyOutlined,
   CategoryOutlined, PersonOutline,
    Transform, ReportProblemOutlined, NotificationsOutlined, ShoppingCartOutlined, StoreOutlined} from '@material-ui/icons'
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
            <li className="sidebarListItem" ><Timeline/>
            <div className='label'>
            Analytics
            </div></li>
            <li className="sidebarListItem"><TrendingUp/>
            <div className='label'>
            Sales</div></li>
          </ul>
           <h5 className="saidbarTitle">Quick access</h5>
          <ul className="sidebarList">
            <Link to="/user" className="link">
            <li className="sidebarListItem" onClick={() => {setIndex(2)}}><PersonOutline/>
            <div className='label'>
            Users
            {index === 2 && <div className="active"></div>}
            </div></li></Link>
            <Link to="/products" className="link">
            <li className="sidebarListItem" onClick={() => {setIndex(3)}}><StoreOutlined/>
            <div className='label'>
            Products
           {index === 3 && <div className="active"></div>}
            </div></li></Link>
            <Link to="/categories" className="link">
            <li className="sidebarListItem" onClick={() => {setIndex(4)}}><CategoryOutlined/>
            <div className='label'>
            Categories
           {index === 4 && <div className="active"></div>}
            </div></li></Link>
            <li className="sidebarListItem"><MoneyOutlined/>
            <div className='label'>
            Payments</div></li>
          </ul>
          <h5 className="saidbarTitle">General</h5>
          <ul className="sidebarList">
            <li className="sidebarListItem"><ReportProblemOutlined/>
            <div className='label'>
            Reports</div></li>
            <li className="sidebarListItem"><Transform/>
            <div className='label'>
            Transactions</div></li>
            <li className="sidebarListItem"><NotificationsOutlined/>
            <div className='label'>
            Notifications</div></li>
          </ul>
        </div>
      </div>
    
    </div>
  )
}
