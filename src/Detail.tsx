import React from 'react';
import { Button, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import passwordSlice, { Password } from './reducer/password';
import { useAppSelector } from './store';
import {
  DeleteOutlined,
  EditOutlined,
  KeyOutlined,
} from '@ant-design/icons';

import { useAppDispatch } from './store';




export default function App() {
  const dispatch = useAppDispatch();
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
          <Button
            type="primary"
            danger
            icon={<DeleteOutlined />}
            onClick={() => dispatch(passwordSlice.actions.remove(record.id))}
          />
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => console.log(1)
            }
          />
          <Button
            type="primary"
            icon={<KeyOutlined />}
            onClick={() => console.log(1)
            }
          />
        </Space>
      ),
    },
  ];

  const data = useAppSelector(state => state.password);
  return (
    <Table rowKey={(record) => record.id} columns={columns} dataSource={data} />
  )
};