import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import Habil from './components/Avatar';
import Carou from './components/Carousel';
import Boton from './components/Botones';

const { Meta } = Card;

const App: React.FC = () => (
  <Card
    style={{ width: 420 }}
   
    actions={[
      <>
      <Carou/>
      <Boton/>
      </>
    ]}
  >
    <Meta
      avatar={<Avatar style={{width:100, height:100}} src="https://lumiere-a.akamaihd.net/v1/images/marvelspidermanseries-emeagrid_45274dc0.jpeg?region=53,0,854,480&width=768" />}
      title="Spider-Man"
      description="Peter Parker"
    />
    <Habil/>
  </Card>
);

export default App;