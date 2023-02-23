import React, { useEffect, useState } from 'react';
import { Avatar, Button, Divider, Input, List, Skeleton } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAppSelector, useAppDispatch } from './store';
import Search from 'antd/es/input/Search';
import type { Password } from "./reducer/password"

import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem((
    <Link to={`/`}>主页</Link>
  ),
    'home',
    <MailOutlined />
  ),
  getItem((
    <Link to={`/settings`}>设置</Link>
  ),
    'haa',
    <MailOutlined />
  ),
];


function SideBar() {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return (
    <div className='overflow-auto' style={{
      height: "calc(100vh - 48px)",
    }}>
      <Menu
        onClick={onClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
      />
    </div>
  );
};

export default SideBar;