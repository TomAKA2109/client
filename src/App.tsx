
import { ConfigProvider } from 'antd';
import './App.css';
import Routers from './routers/Routers';
import HomeScreen from './screens/HomeScreen';

function App() {

  return <ConfigProvider theme={{token: {colorTextHeading: '#F15E2B'}, components: {}}}>
    <Routers/>
  </ConfigProvider>
  
  ;

}

export default App;
