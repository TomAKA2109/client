import React, { useState } from 'react'
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { Link } from 'react-router-dom';
import Card from 'antd/lib/card';
import SocialLogin from './components/SocialLogin';
import handleAPI from '../../apis/handleAPI';

const { Title, Paragraph, Text } = Typography;

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRemember, setIsRemember] = useState(false);

  const [form] = Form.useForm();
  
  const handleLogin = async (values: {email: string; password: string}) => {
    setIsLoading(true);  
    try {
      const res = await handleAPI('/auth/register', values, 'post');
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <Card>
        <div className="text-center">
        <img className='mb-3' src="/assets/logoTest.svg" alt="Logo" style={{ width: 48, height: 48 }}/>
          <Title>Create an account</Title>
          <Paragraph>Start your 30-day free trial</Paragraph>
        </div>
        <Form layout='vertical' form={form} onFinish={handleLogin} disabled = {isLoading} size='large'>

          <Form.Item label='Name' name='name' rules={[{required: true, message: 'Please enter your name'}]}>
            <Input placeholder='Enter your name' type='text' className='form-control' />
          </Form.Item>

          <Form.Item label='Email' name='email' rules={[{required: true, message: 'Please enter your email'}]}>
            <Input placeholder='Enter your email' type='email' className='form-control' />
          </Form.Item>

          <Form.Item label='Password' name='password' rules={[{required: true, message: 'Please enter your password'}, { validator: (_, value) => {
            if (value && value.length < 8) {
              return Promise.reject('Password must be at least 8 characters');
            } else {
              return Promise.resolve();
            }
          }}]}>
            <Input.Password placeholder='Create password' type='password' className='form-control' />
          </Form.Item>  

          <Form.Item label='Password' name='password' rules={[{required: true, message: 'Please re-enter your password'} , { validator: (_, value) => {
            if (value && value.length < 8) {
              return Promise.reject('Password must be at least 8 characters');
            } else {
              return Promise.resolve();
            }
          }}]}>
            <Input.Password placeholder='Re-enter password' type='password' className='form-control' />
          </Form.Item> 

        </Form>

        <div className="mt-4 mb-3">
          <button onClick={() => form.submit()} className='btn btn-lg btn-primary' type='submit' style={{width: '100%'}}>Sign Up</button>
        </div>

        <SocialLogin />

        <div className="text-center mt-4">
          <Text type='secondary'>
            Already have an account? 
          </Text>
          <Link to={'/login'}>Login</Link>
        </div>
      </Card>

      
    </div>
  )
}

export default SignUp