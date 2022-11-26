import React from 'react'
import {Menu,Container,Button,Image} from "semantic-ui-react";
import { useNavigate,Link } from 'react-router-dom';
import logo from "../asset/logo.svg";

const NavBar = () => {
    const navigate = useNavigate();
  return (
    <div>
        <Menu inverted borderless style={{padding:"o.3rem",marginBottom:"20px"}} attached>
            <Container>
                <Menu.Item name='Home' position='left'>
                    <Link to="/">
                    <Image size="mini" src={logo} alt="logo"/>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                   <h2>Laboratory Management System</h2> 
                </Menu.Item>
                <Menu.Item position='right'>
                    <Button size='mini' primary onClick={()=>navigate("/Add")}>
                        Add New
                    </Button>
                </Menu.Item>
            </Container>
        </Menu>

    </div>
  )
}

export default NavBar