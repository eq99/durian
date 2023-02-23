import { Button, Checkbox, InputNumber } from "antd"
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { Sample } from "./lib";
import { genPassword } from "./lib"

export default function ({ onGen }: any) {
  const [sample, setSample] = useState<Sample>({
    digits: true,
    lower: true,
    upper: true,
    symbol: true,
  })

  const [len, setLen] = useState(10);

  function handleGen() {
    onGen(genPassword(sample, len))
  }

  useEffect(() => {
    handleGen();
  }, [sample, len]);

  // const setLen = (value: number) => {
  //   console.log('changed', value);
  // };
  return (
    <div className="flex items-center mt-8">
      <Checkbox checked={sample.digits} onChange={(e) => { setSample({ ...sample, digits: e.target.checked }) }}>数字</Checkbox>
      <Checkbox checked={sample.lower} onChange={(e) => { setSample({ ...sample, lower: e.target.checked }) }}>小写</Checkbox>
      <Checkbox checked={sample.upper} onChange={(e) => { setSample({ ...sample, upper: e.target.checked }) }}>大写</Checkbox>
      <Checkbox checked={sample.symbol} onChange={(e) => { setSample({ ...sample, symbol: e.target.checked }) }}>符号</Checkbox>
      <div className="flex items-center">
        <span className="ml-4 mr-2">长度:</span>
        <InputNumber min={6} max={32} value={len} onChange={(value) => { setLen(value || 6) }} />
      </div>
      <Button type="primary" className="ml-4" onClick={() => { handleGen() }}>生成</Button>
    </div>
  )
}