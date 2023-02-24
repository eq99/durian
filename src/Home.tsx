import { Button } from "antd";
import Search from "antd/es/input/Search";
import Modal from "antd/es/modal/Modal"
import Create from './Create';
import Detail from "./Detail";
import { useAppDispatch, useAppSelector } from "./store";
import { saveToFile, readFromFile, Password } from "./reducer/password";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const storeDate = useAppSelector(state => state.password);
  const [data, setData] = useState(storeDate);
  const [editId, setEditId] = useState<string>();

  useEffect(() => {
    if (storeDate.length === 0) {
      dispatch(readFromFile());
    }

    return () => {
      dispatch(saveToFile(JSON.stringify(storeDate)));
    }
  }, []);

  useEffect(() => {
    setData(storeDate);
  }, [storeDate]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSearch = (value: string) => setData(storeDate.filter(item => item.subject.includes(value)));

  return (
    <div>
      <div className="flex items-center mb-2">
        <Search placeholder="input search text" className="w-240px" onChange={(e) => onSearch(e.target.value)} onSearch={onSearch} enterButton />
        <Button className="ml-auto" type="primary" onClick={showModal}>添加</Button>
      </div>
      <Detail data={data} setEditId={setEditId} setOpenEdit={setIsModalOpen}></Detail>
      <Modal className="px-4 py-8" footer={null} style={{ top: 0 }} width={600} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Create editId={editId} />
      </Modal>
    </div>
  )
}