import { Button, Checkbox, Input, InputNumber, Tooltip } from "antd";
import { CopyOutlined } from '@ant-design/icons';

import type { CheckboxChangeEvent } from 'antd/es/checkbox';


export default function () {
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const setLen = (value: number) => {
    console.log('changed', value);
  };


  return (
    <div>

      <div className="flex items-center">
        <Checkbox onChange={onChange}>数字</Checkbox>
        <Checkbox onChange={onChange}>小写</Checkbox>
        <Checkbox onChange={onChange}>大写</Checkbox>
        <Checkbox onChange={onChange}>符号</Checkbox>
        <div className="flex items-center">
          <span className="ml-4 mr-2">长度:</span><InputNumber min={1} max={10} defaultValue={3} onChange={() => { setLen }} />
        </div>
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
      <Button type="primary">生成</Button>
    </div>
  )
}