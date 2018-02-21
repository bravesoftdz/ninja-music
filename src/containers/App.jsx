import React from 'react';
import classNames from 'classnames';

import Layout from '../components/Layout';
import { MusicListContainer } from './MusicList/index';


const App = () => (
  <div className={classNames('app')}>
    <Layout>
      <MusicListContainer />
    </Layout>
  </div>
);

export default App;
