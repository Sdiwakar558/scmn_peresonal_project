import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react';
import {Menu,MenuItem} from '@mui/material';


const Header = () => {
    // const handleMenuOpen = () =>{
    //     set
    // }

    const Data_for_Navbar = {
        Company_name:"SCMN",
        menu_item:{menu1:"Data1",menu2:"Data2",menu3:"Data3"},
        Button_data:"LogIn"
    }
  return (
    <div className='Container'>
        <AppBar color='inherit' sx={{position:"static"}}>
            <Toolbar>
                <Typography>
                {Data_for_Navbar.Company_name}
                </Typography>
                <Typography>
                <Menu>
                
                <MenuItem>Counter</MenuItem>
                <MenuItem >Tail</MenuItem>
                <MenuItem >His</MenuItem>
                </Menu>
                </Typography>            
            </Toolbar>

        </AppBar>

      
    </div>
  )
}

export default Header

