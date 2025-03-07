import { Card, Form, Input, Typography } from 'antd';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import SocialLogin from './components/SocialLogin';
import handleAPI from '../../apis/handleAPI';

const{Title, Paragraph, Text} = Typography;

const Login = () => {
  
  const [isLoading, setIsLoading] = useState(false);
  const [isRemember, setIsRemember] = useState(false);

  const [form] = Form.useForm();
  
  const handleLogin = async (values: {email: string; password: string}) => {
    console.log(values);

    try {
      const res = await handleAPI('/auth/register', values, 'post');
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Card>
        <div className="text-center">
          <img className='mb-3' src="/assets/logoTest.svg" alt="Logo" style={{ width: 48, height: 48 }}/>
          <Title>Login to your account</Title>
          <Paragraph>Welcome back! Please enter your details.</Paragraph>
        </div>
        <Form layout='vertical' form={form} onFinish={handleLogin} disabled = {isLoading} size='large'>

          <Form.Item label='Email' name='email' rules={[{required: true, message: 'Please enter your email'}]}>
            <Input placeholder='Enter your email' type='email' className='form-control' />
          </Form.Item>

          <Form.Item label='Password' name='password' rules={[{required: true, message: 'Please enter your password'}]}>
            <Input.Password placeholder='Enter password' type='password' className='form-control' />
          </Form.Item>  
        </Form>

        <div className="row">
          <div className="col">
            <input type='checkbox' checked={isRemember} onChange={() => setIsRemember(!isRemember)} />
            <label style={{marginLeft: '10px'}}>Remember for 30 days</label>
          </div>

          <div className="col text-right">
            <Link to={'/'}>Forgot password</Link>
          </div>
        </div>

        <div className="mt-4 mb-3">
          <button onClick={() => form.submit()} className='btn btn-lg btn-primary' type='submit' style={{width: '100%'}}>Login</button>
        </div>

        <SocialLogin />

        <div className="text-center mt-4">
          <Text type='secondary'>
            Don't have an account? 
          </Text>
          <Link to={'/sign-up'}>Sign up</Link>
        </div>
      </Card>

      
    </div>
  )
}

export default Login