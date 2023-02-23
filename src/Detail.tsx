import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Password } from './reducer/password';
import { useAppSelector } from './store';



const columns: ColumnsType<Password> = [
  {
    title: 'Id',
    dataIndex: 'id',
  },
  {
    title: '应用名称',
    dataIndex: 'subject',
    ellipsis: true,

  },
  {
    title: '加密算法',
    dataIndex: 'algo',
  },
  {
    title: '加密密码',
    dataIndex: 'hash',
    ellipsis: true,

  },
  {
    title: 'Action',
    render: (_, record) => (
      <Space size="middle">
        <a>删除</a>
        <a>修改</a>
        <a>解密</a>
      </Space>
    ),
  },
];


export default function App() {
  const data = useAppSelector(state => state.password);
  return (
    <Table rowKey={(record) => record.id} columns={columns} dataSource={data} />
  )
};