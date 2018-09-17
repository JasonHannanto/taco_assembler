import React, { Component } from 'react';

import Header from '../../Components/Header/Header';

const App = ({ children }) => (
  <>
    <Header />
    <main>
      {children}
    </main>
  </>
);

export default App;
