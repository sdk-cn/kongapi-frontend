import {
  getInterfaceInfoByIdUsingPOST,
  invokeInterfaceInfoUsingPOST
} from '@/services/kongapi-backend/interfaceInfoController';
import { PageContainer } from '@ant-design/pro-components';
import {Button, Card, Descriptions, Divider, Form, message} from 'antd';
import React,{ useEffect,useState } from 'react';
import { useParams } from 'react-router';
import TextArea from "antd/es/input/TextArea";

const Index: React.FC = () => {
  //加载组件
  const [loading, setLoading] = useState(false);
  //接口数据
  const [data, setData] = useState<API.InterfaceInfo>();
  //调用结果
  const [invokeRes, setInvokeRes] = useState<any>();
  const [invokeLoading, setInvokeLoading] = useState(false);

  //使用useMatch钩子将当前URL与指定的路径模式/interface/:id进行匹配
  //并将匹配结果赋值给match对象
  //const match = useMatch('/interface_info/:id');
  //alert(JSON.stringify(match));

  //使用useParams获取动态路由参数
  const params = useParams();

  //定义异步加载数据的函数
  const loadData = async () => {
    if (!params.id) {
      message.error('参数不存在');
      return;
    }
    //设置loading状态为true
    setLoading(true);
    //异步获取该id的接口信息
    try {
      //请求数据
      const res = await getInterfaceInfoByIdUsingPOST({
        id: Number(params.id),
      });
      //将结果数据设置到data状态中
      setData(res?.data ?? undefined);
    } catch (error: any) {
      //请求失败，打印错误信息
      message.error('请求失败，' + error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    //页面加载完成后调用加载数据的函数
    loadData();
  }, []);

  const onFinish=async (values:any)=>{
    if(!params.id){
      return;
    }
    setInvokeLoading(true);
    try{
      const res = await invokeInterfaceInfoUsingPOST({
        id:params.id,
        ...values,
      });
      setInvokeRes(res.data);
      message.success("请求成功");

    }catch(error:any){
      message.error("操作失败，"+error.message);
    }
    setInvokeLoading(false);
  };

  return (
    //使用antd的PageContainer作为页面的容器
    <PageContainer title="查看接口文档">
      <Card loading={loading}>
        {data ? (
          <Descriptions
            title={data.name}
            column={1}
          >
            <Descriptions.Item label="接口状态">{data.status?'开启':'关闭'}</Descriptions.Item>
            <Descriptions.Item label="描述">{data.description}</Descriptions.Item>
            <Descriptions.Item label="请求地址">{data.url}</Descriptions.Item>
            <Descriptions.Item label="请求方法">{data.method}</Descriptions.Item>
            <Descriptions.Item label="请求头">{data.requestHeader}</Descriptions.Item>
            <Descriptions.Item label="请求参数">{data.requestParams}</Descriptions.Item>
            <Descriptions.Item label="响应头">{data.responseHeader}</Descriptions.Item>
            <Descriptions.Item label="创建时间">{data.createTime}</Descriptions.Item>
            <Descriptions.Item label="更新时间">{data.updateTime}</Descriptions.Item>
          </Descriptions>
        ) : (
          <>接口不存在</>
        )}
      </Card>
      <Divider />
      <Card title="在线测试">
        <Form
          name="invoke"
          layout={"vertical"}
          onFinish={onFinish}
        >
          <Form.Item
            label="请求参数"
            name="requestParams"
          >
            <TextArea></TextArea>
          </Form.Item>
          <Form.Item wrapperCol={{span:16}}>
            <Button type="primary" htmlType="submit">
              调用
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Divider />
      <Card title="返回结果" loading={invokeLoading}>
        {invokeRes}
      </Card>
    </PageContainer>
  );
};

export default Index;
