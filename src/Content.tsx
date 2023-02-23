import { Button, Form, Input, Select, Tooltip } from "antd";
import { CopyOutlined } from '@ant-design/icons';
import PassGen from "./PassGen";
import { encrypt } from "./lib";

export interface Modal {
  raw: string
  subject: string
  algo: string
  secret: string
}

function Content() {
  const [raw, setRaw] = useState("");
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldValue("raw", raw);
  }, [raw])


  const onFinish = (values: Modal) => {
    let res = encrypt(values.raw, values.secret, values.algo);
    form.setFieldValue("hash", res);
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
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ algo: "lucy" }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="w-560px mt-6"
      >
        <Form.Item
          label="应用密码"
        >
          <Input.Group compact>
            <Form.Item
              name="raw"
              style={{ width: 'calc(100% - 32px)' }}
              rules={[{ required: true, message: '请输入或生成密码' }]}
            >
              <Input />
            </Form.Item>
            <Tooltip title="复制密码">
              <Button icon={<CopyOutlined />} />
            </Tooltip>
          </Input.Group>
        </Form.Item>

        <Form.Item
          label="应用名称"
          name="subject"
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
            style={{ width: 120 }}
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
          name="secret"
          rules={[{ required: true, message: '请输入加密密码' }]} >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="加密结果">
          <Input.Group compact>
            <Form.Item
              name="hash"
              style={{ width: 'calc(100% - 32px)' }}>
              <Input />
            </Form.Item>
            <Tooltip title="复制">
              <Button icon={<CopyOutlined />} />
            </Tooltip>
          </Input.Group>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            加密并保存
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Content;