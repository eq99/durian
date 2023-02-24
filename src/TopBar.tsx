import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { message } from '@tauri-apps/api/dialog';
import { open } from '@tauri-apps/api/shell';


import { SaveFilled, GithubOutlined, FileOutlined } from '@ant-design/icons';

const items: MenuProps['items'] = [
  {
    label: 'File',
    key: 'file',
    children: [
      {
        label: <span onClick={async (e) => { await message("还没实现") }}>另存为</span>,
        key: 'saveAs',
        icon: <SaveFilled />
      },
    ],
  },
  {
    label: 'Help',
    key: 'help',
    children: [
      {
        label: (<span onClick={async () => {
          await message(`$AppLocalData/data.json`);
        }}>数据文件夹</span>),
        key: 'showDataFolder',
        icon: <FileOutlined />
      },
      {
        label: (<span onClick={() => {
          open("https://github.com/xiayulu/durian");
        }}>GitHub</span>),
        key: 'github',
        icon: <GithubOutlined />
      },
    ],
  }
];

export default function TopBar() {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    // console.log('click ', e);
    // setCurrent(e.key);
  };

  return <Menu onClick={onClick} mode="horizontal" items={items} />;
};