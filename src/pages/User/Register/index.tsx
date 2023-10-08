import Footer from '@/components/Footer';
import {
LockOutlined,
UserOutlined
} from '@ant-design/icons';
import {
LoginFormPage,
ProFormText
} from '@ant-design/pro-components';
import { useEmotionCss } from '@ant-design/use-emotion-css';
// @ts-ignore
import { BACKGROUND_IMAGE_URL } from "@/constant";
import { userRegisterUsingPOST } from "@/services/kongapi-backend/userController";
import { history } from '@umijs/max';
import { message,Tabs } from 'antd';
import React from 'react';
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  const containerClassName = useEmotionCss(() => {
    return {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
    };
  });

  const handleSubmit = async (values: API.UserRegisterRequest) => {
    //校验
    const {userPassword, checkPassword} = values;
    if (userPassword !== checkPassword) {
      message.error("再次输入的密码不一致")
      return;
    }
    try {
      // 注册
      const res = await userRegisterUsingPOST({
        ...values,
      });
      if (res.code===0) {
        const defaultRegisterSuccessMessage="注册成功!";
        message.success(defaultRegisterSuccessMessage);
        const urlParams = new URL(window.location.href).searchParams;
        history.push(urlParams.get('redirect') || '/');
        return;
      } else {
        message.error(res.message)
      }
    } catch (error) {
      const defaultLoginFailureMessage = '注册失败，请重试！';
      message.error(defaultLoginFailureMessage);
    }
  };
  return (
    <div className={containerClassName}>
      <div
        style={{
          backgroundColor: 'white',
          height: 'calc(100vh - 48px)',
          margin: -24,
        }}
      >
        <LoginFormPage
          backgroundImageUrl={BACKGROUND_IMAGE_URL}
          logo={<img alt="logo" src="/logo.svg" />}
          title="Kong API"
          subTitle={<span>致力于让接口调用更简单 <img src="/smile.png"/></span>}
          submitter={{
            searchConfig: {
              submitText: "注册"
            }
          }}
          onFinish={async (values) => {
            await handleSubmit(values as API.UserLoginRequest);
          }}
        >
          <Tabs
            centered
            items={[
              {
                key: 'register',
                label: '账号注册',
              }
            ]}
          />

          <ProFormText
            name="userAccount"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined />,
            }}
            placeholder={'请输入用户名'}
            rules={[
              {
                required: true,
                message: '请输入用户名！',
              },
              {
                min: 4,
                type:'string',
                message: '长度不能小于4！！',
              },
            ]}
          />
          <ProFormText.Password
            name="userPassword"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined />,
            }}
            placeholder={'请输入密码'}
            rules={[
              {
                required: true,
                message: '请输入密码！',
              },
              {
                min: 8,
                type: 'string',
                message: '长度不能小于8！',
              },
            ]}
          />
          <ProFormText.Password
            name="checkPassword"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined />,
            }}
            placeholder={'请再次输入密码'}
            rules={[
              {
                required: true,
                message: '请再次输入密码！',
              },
              {
                min: 8,
                type: 'string',
                message: '长度不能小于8！'
              },
            ]}
          />
          <ProFormText>
            <Link
              to={'/user/login'}
            >
              返回登录👈
            </Link>
          </ProFormText>
        </LoginFormPage>

      </div>
      <Footer />
    </div>
  );
};
export default Register;
