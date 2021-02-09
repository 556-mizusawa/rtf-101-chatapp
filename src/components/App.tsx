import React, { useState } from 'react';

import Main from './Main';
import SignIn from './SignIn';
import config from '../config.json';

const App: React.FC<{}> = () => {
  const [name, setName] = useState<string>('');

  if (config.signInEnabled && name === '') {
    return <SignIn setName={setName} />;
  } else {
    return <Main name={name} />;
  }
};

export default App;
