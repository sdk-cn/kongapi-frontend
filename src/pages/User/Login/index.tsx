import Footer from '@/components/Footer';
import {
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  LoginFormPage,
  ProFormText,
} from '@ant-design/pro-components';
import { useEmotionCss } from '@ant-design/use-emotion-css';
// @ts-ignore
import { Helmet, history, useModel } from '@umijs/max';
import { message, Tabs } from 'antd';
import React, {useState} from 'react';
import Settings from '../../../../config/defaultSettings';
import {userLoginUsingPOST} from "@/services/kongapi-backend/userController";
import {flushSync} from "react-dom";
import {BACKGROUND_IMAGE_URL} from "@/constant";
import {Link} from "react-router-dom";

const Login: React.FC = () => {
  const [type, setType] = useState<string>('account');
  const { initialState, setInitialState } = useModel('@@initialState');
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

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      flushSync(() => {
        // @ts-ignore
        setInitialState((s) => ({
          ...s,
          currentUser: userInfo,
        }));
      });
    }
  };

  const handleSubmit = async (values: API.UserLoginRequest) => {
    try {
      // 登录
      const res = await userLoginUsingPOST({
        ...values,
      });
      if (res.code===0) {
        const defaultLoginSuccessMessage="登录成功!";
        message.success(defaultLoginSuccessMessage);
        await fetchUserInfo();
        const urlParams = new URL(window.location.href).searchParams;
        history.push(urlParams.get('redirect') || '/');
        return;
      } else {
        message.error(res.message)
      }
    } catch (error) {
      const defaultLoginFailureMessage = '登录失败，请重试！';
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
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values as API.UserLoginRequest);
          }}
        >
          <Tabs
            activeKey={type}
            onChange={setType}
            centered
            items={[
              {
                key: 'account',
                label: '账户密码登录',
              }
            ]}
          />

          {type === 'account' && (
            <>
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
                    message: '用户名是必填项！',
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
                    message: '密码是必填项！',
                  },
                ]}
              />
            </>
          )}

          <div
            style={{
              marginBottom: 24,
            }}
          >
            <ProFormText>
              <a
                style={{
                  float: 'left',
                }}
                onClick={()=>{
                  alert('请联系管理员，邮箱地址614993516@qq.com')
                }}
              >
                忘记密码?
              </a>
              <Link
                to={'/user/register'}
                style={{
                  float: 'right',
                }}
              >
                点此注册👉
              </Link>
            </ProFormText>

          </div>
        </LoginFormPage>

      </div>
      <Footer />
    </div>
  );
};
export default Login;
