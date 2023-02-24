import { Button, Space, Table, } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import passwordSlice, { Password } from './reducer/password';
import {
  DeleteOutlined,
  EditOutlined,
  KeyOutlined,
} from '@ant-design/icons';

import { useAppDispatch } from './store';

export interface Props {
  data: Password[],
  setEditDate: React.Dispatch<React.SetStateAction<Password | undefined>>,
  setOpenEdit: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function App(props: Props) {
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
            onClick={() => dispatch(passwordSlice.actions.remove(record.id))}
          />
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => { props.setEditDate(record); props.setOpenEdit(true); }}
          />
        </Space>
      ),
    },
  ];
  return (
    <Table rowKey={(record) => record.id} columns={columns} dataSource={props.data} />
  )
};