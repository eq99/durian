import { Button, Form, Input, Select, Tooltip } from "antd";
import { CopyOutlined } from '@ant-design/icons';
import PassGen from "./PassGen";

function Content() {
  const [raw, setRaw] = useState("");

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
      <PassGen onGen={setRaw}></PassGen>

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
          name="raw"
          rules={[{ required: true, message: '请输入或生成密码' }]}
        >
          <Input.Group compact>
            <Input
              style={{ width: 'calc(100% - 32px)' }}
              value={raw}
            />
            <Tooltip title="复制密码">
              <Button icon={<CopyOutlined />} />
            </Tooltip>
          </Input.Group>
        </Form.Item>
        <Form.Item
          label="应用名称"
          name="name"
          rules={[{ required: true, message: '请输入应用名称' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="加密算法"
          name="algo"
          rules={[{ required: true, message: '请选择加密算法' }]}
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
          rules={[{ required: true, message: '请输入加密密码' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="加密结果"
          name="result"
        >
          <Input disabled />
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