import React from 'react'
import IconButton from "@material-ui/core/IconButton";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import './Navbar.css'
function Navbar() {
    return (
        <div className="navbar__container">
          <div className="nav__main">
              <div className="search__maincontainer">
                   <IconButton>
                     < SearchOutlined/>
                   </IconButton>
                 <div className="search__form"></div>
              </div>
              <div className="icon__container">
                    <IconButton>
                       <NotificationsIcon/>
                    </IconButton>
                    <IconButton>
                       <ArrowDropDownIcon/>
                    </IconButton>
                 <div className="account__box">
                    <IconButton>
                       <AccountCircleIcon/>
                    </IconButton>
                    <h3>test</h3>
                 </div>
             </div>
          </div>  
      </div>
    )
}

export default Navbar
