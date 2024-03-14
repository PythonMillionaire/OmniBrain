import React from 'react';

import Main from './components/chat/Main';

import useDocumentTitle from './hooks/useDocumentTitle';

import './assets/styles/styles.css';

function App() {
  useDocumentTitle("OmniBrain - The Ultimate AI Hub");

  return (
    <Main />
  );
}

export default App;
