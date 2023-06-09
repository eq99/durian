import { Button, Space, Table, } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import passwordSlice, { Password, saveToFile } from './reducer/password';
import {
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons';

import { useAppDispatch, useAppSelector } from './store';

export interface Props {
  data: Password[],
  setEditId: React.Dispatch<React.SetStateAction<string | undefined>>,
  setOpenEdit: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function App(props: Props) {
  const dispatch = useAppDispatch();

  const storeDate = useAppSelector(state => state.password);
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
      title: '修改时间',
      dataIndex: 'createdAt',
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
            onClick={() => {
              dispatch(passwordSlice.actions.remove(record.id));
              dispatch(saveToFile(JSON.stringify(storeDate.filter(item => item.id !== record.id))))
            }}
          />
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => { props.setEditId(record.id); props.setOpenEdit(true); }}
          />
        </Space>
      ),
    },
  ];
  return (
    <Table rowKey={(record) => record.id} columns={columns} dataSource={props.data} />
  )
};