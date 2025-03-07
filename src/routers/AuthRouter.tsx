import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Login, SignUp } from '../screens'
import { Typography } from 'antd'

const { Title } = Typography;

const AuthRouters = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col d-none d-lg-block text-center" style={{marginTop: '15%'}}>
          <div className='mb-3'>
            <img src="/assets/logoTest.svg" alt="Logo"/>
          </div>
          <Title>App Test</Title>
        </div>
        <div className="col content-center">
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/sign-up' element={<SignUp />} />
          </Routes>
        </BrowserRouter>
        </div>
      </div>
    </div>
    
  )
}

export default AuthRouters