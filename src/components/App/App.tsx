import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../Layout';
import { Home } from '../../containers/home/ui';

import { Shop } from '../../containers/shop/ui';

const App: FC = () => {
  return (
    <div style={{ width: '100%' }}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route
              path='/*'
              element={
                <div style={{ textAlign: 'center' }}>Page not found</div>
              }
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
