import { Button, Form, Input, message, Select, Tooltip } from "antd";
import { CopyOutlined } from '@ant-design/icons';
import PassGen from "./PassGen";
import { encrypt, decrypt } from "./lib";
import { useAppDispatch, useAppSelector } from "./store";
import passwordSlice, { Password, saveToFile } from "./reducer/password";
import { nanoid } from "nanoid";
import { writeText } from '@tauri-apps/api/clipboard';

export interface Model {
  raw: string
  subject: string
  algo: string
  secret: string
}

const algoOptions = [
  { value: 'aes', label: 'AES' },
]

export interface Props {
  data?: Password,
}

function Content(props: Props) {
  const [raw, setRaw] = useState("");
  const [secret, setSecret] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const [form] = Form.useForm();
  const dispatch = useAppDispatch();

  const storeDate = useAppSelector(state => state.password);

  useEffect(() => {
    form.setFieldValue("raw", raw);
  }, [raw])


  const onFinish = (values: Model) => {
    let hash = encrypt(values.raw, values.secret, values.algo);
    form.setFieldValue("hash", hash);
    let newPass =
    {
      id: nanoid(10),
      subject: values.subject,
      algo: values.algo,
      hash,
      createdAt: new Date().toLocaleString()
    }
    dispatch(passwordSlice.actions.create(newPass));
    dispatch(saveToFile(JSON.stringify([...storeDate, newPass])));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  function handleDecry() {
    let de = decrypt(props.data?.hash || "", secret, props.data?.algo || "");
    if (de.length > 0) {
      messageApi.open({
        type: 'success',
        content: '解密成功',
      });
    } else {
      messageApi.open({
        type: 'error',
        content: '解密失败',
      });
    }
    setRaw(de);
  }

  async function handleCopyRaw() {
    await writeText(raw);
  }


  return (
    <div className="flex flex-col items-center">
      {contextHolder}

      {/* 密码生成器 */}
      <PassGen onGen={setRaw}></PassGen>

      {/* 加密保存 */}
      <Form
        name="basic"
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        initialValues={{
          subject: props.data?.subject || "",
          algo: props.data?.algo || algoOptions[0].value,
          hash: props.data?.hash || ""
        }}
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
              <Button icon={<CopyOutlined />} onClick={() => handleCopyRaw()} />
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
            options={algoOptions}
          />
        </Form.Item>

        <Form.Item
          label="加密密码"
          name="secret"
          rules={[{ required: true, message: '请输入加密密码' }]} >
          <Input.Password onChange={(e) => setSecret(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="加密结果"
          name="hash"
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          {
            props.data &&
            <Button type="primary" className="mr-4" onClick={() => { handleDecry() }}>
              解密
            </Button>
          }
          <Button type="primary" htmlType="submit">
            加密并保存
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Content;