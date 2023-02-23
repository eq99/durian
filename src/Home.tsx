import { Button } from "antd";
import Search from "antd/es/input/Search";
import Modal from "antd/es/modal/Modal"
import Create from './Create';
import Detail from "./Detail";

export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSearch = (value: string) => console.log(value);

  return (
    <div>
      <div className="flex items-center mb-2">
        <Search placeholder="input search text" className="w-240px" onSearch={onSearch} enterButton />
        <Button className="ml-auto" type="primary" onClick={showModal}>添加</Button>
      </div>
      <Detail></Detail>
      <Modal className="px-4 py-8" style={{ top: 0 }} width={600} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Create />
      </Modal>
    </div>
  )
}