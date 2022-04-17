import React from 'react';
import { Button, Dropdown, Image, Menu } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';
import logo from "../assets/logo192.png";
import menuConfig from "../menuConfig";
import { Link } from 'react-router-dom'

const getSubMenu = (subMenus) => (
  <Menu>
    {
      subMenus.map(menu => (
        <Link key={menu.itemKey} to={menu.link}>
          <Menu.Item>
            {menu.itemName}
          </Menu.Item>
        </Link>
      ))
    }
  </Menu>
)

const TopMenu = () => {
  return (
    <>
      <div className='nav'>
        <Link to="/">
          <Image className='logo' src={logo} preview={false} ></Image>
        </Link>
        {
          menuConfig.map(group => (
            group.link ? <span className='nav1'>{group.groupName}</span> :
            <Dropdown 
              key={group.groupKey}
              overlay={getSubMenu(group.items)} 
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