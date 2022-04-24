import React from 'react';
import { Button, Dropdown, Image, Menu } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';
import logo from "../assets/logo192.png";
import menuConfig from "../config/menuConfig";
import { Link, useLocation } from 'react-router-dom'

const getSubMenu = (subMenus, isHome) => (
  <Menu>
    {
      subMenus.map(menu => (
        <Link key={menu.itemKey} to={isHome ? "/" : menu.link} target="_blank">
          <Menu.Item key={menu.itemKey}>
            {menu.itemName}
          </Menu.Item>
        </Link>
      ))
    }
  </Menu>
)

const TopMenu = () => {
  const location = useLocation();
  return (
    <>
      <div className='nav'>
        <Link to="/">
          <Image className='logo' src={logo} preview={false} ></Image>
        </Link>
        {
          menuConfig.map(group => (
            group.link ? <span key={group.groupKey} className='nav1'>{group.groupName}</span> :
            <Dropdown 
              key={group.groupKey}
              overlay={getSubMenu(group.items, location.pathname === "/")} 
              placement="bottom">
              <span className='nav1'>{group.groupName}</span>
            </Dropdown>
          ))
        }
      </div>
      <div className='contact'>
        <PhoneOutlined className='phone-icon' />
        <div className='number'>
          <span>400-123-45678</span>
          <span>123456789@gmail.com</span>
        </div>
        <Button className='btn-login'>登录</Button>
        <Button type="primary">注册</Button>
      </div>
    </>
  )
};

export default TopMenu;