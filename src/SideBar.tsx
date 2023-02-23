import React, { useEffect, useState } from 'react';
import { Avatar, Button, Divider, Input, List, Skeleton } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAppSelector, useAppDispatch } from './store';
import Search from 'antd/es/input/Search';
import type { Password } from "./reducer/password"


const SideBar = () => {
  const [loading, setLoading] = useState(false);
  // const [data, setData] = useState<DataType[]>([]);
  const data = useAppSelector(state => state.password);

  const loadMoreData = () => {
    // if (loading) {
    //   return;
    // }
    // setLoading(true);
    // fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
    //   .then((res) => res.json())
    //   .then((body) => {
    //     setData([...data, ...body.results]);
    //     setLoading(false);
    //   })
    //   .catch(() => {
    //     setLoading(false);
    //   });
    console.log("loading more")
  };

  useEffect(() => {

  }, []);

  const onSearch = (value: string) => console.log(value);


  return (
    <div>
      <Input placeholder="Basic usage" />
      <div
        id="scrollableDiv"
        style={{
          height: "calc(100vh - 90px)", // 48+42
          overflow: 'auto',
          padding: '0 16px',
          border: '1px solid rgba(140, 140, 140, 0.35)',
        }}
      >
        <InfiniteScroll
          dataLength={data.length}
          next={loadMoreData}
          hasMore={data.length < 50}
          loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
          endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
          scrollableTarget="scrollableDiv"
        >
          <List
            dataSource={data}
            renderItem={(item) => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  // avatar={<Avatar src={item.picture.large} />}
                  title={<a>{item.subject}</a>}
                  description={item.createdAt}
                />
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </div>
    </div >
  );
};

export default SideBar;