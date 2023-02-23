import { Button, Checkbox, Form, Input, InputNumber, Select, Tooltip } from "antd";
import { CopyOutlined } from '@ant-design/icons';

import type { CheckboxChangeEvent } from 'antd/es/checkbox';

function Content() {
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const setLen = (value: number) => {
    console.log('changed', value);
  };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="flex flex-col items-center">

      {/* 密码生成器 */}
      <div className="flex items-center mt-8">
        <Checkbox onChange={onChange}>数字</Checkbox>
        <Checkbox onChange={onChange}>小写</Checkbox>
        <Checkbox onChange={onChange}>大写</Checkbox>
        <Checkbox onChange={onChange}>符号</Checkbox>
        <div className="flex items-center">
          <span className="ml-4 mr-2">长度:</span><InputNumber min={1} max={10} defaultValue={3} onChange={() => { setLen }} />
        </div>
        <Button type="primary" className="ml-4">生成</Button>
      </div>

      {/* 加密保存 */}
      <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="w-600px mt-6"
      >
        <Form.Item
          label="应用密码"
          name="randompw"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input.Group compact>
            <Input
              style={{ width: 'calc(100% - 32px)' }}
              defaultValue="git@github.com:ant-design/ant-design.git"
            />
            <Tooltip title="copy git url">
              <Button icon={<CopyOutlined />} />
            </Tooltip>
          </Input.Group>
        </Form.Item>
        <Form.Item
          label="应用名称"
          name="randompw"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="加密算法"
          name="algo"
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

        <Form.Item
          label="加密密码"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="加密结果"
          name="result"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            加密
          </Button>
          <Button type="primary" htmlType="submit">
            保存
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Content;