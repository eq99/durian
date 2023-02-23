import { Button, Checkbox, Form, Input, InputNumber, Select, Tooltip } from "antd";
import { CopyOutlined } from '@ant-design/icons';

import type { CheckboxChangeEvent } from 'antd/es/checkbox';


export default function () {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div>

      <div className="flex items-center">
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'Yiminghe', label: 'yiminghe' },
              { value: 'disabled', label: 'Disabled', disabled: true },
            ]}
          />
        </Form.Item>
      </div>

      <Input.Group compact>
        <Input
          style={{ width: 'calc(100% - 200px)' }}
          defaultValue="git@github.com:ant-design/ant-design.git"
        />
        <Tooltip title="copy git url">
          <Button icon={<CopyOutlined />} />
        </Tooltip>
      </Input.Group>
      <Input.Group compact>
        <Input
          style={{ width: 'calc(100% - 200px)' }}
          defaultValue="git@github.com:ant-design/ant-design.git"
        />
        <Tooltip title="copy git url">
          <Button icon={<CopyOutlined />} />
        </Tooltip>
      </Input.Group>
      <Button type="primary">生成</Button>
    </div>
  )
}