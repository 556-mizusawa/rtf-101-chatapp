import React, { useState } from 'react';

import Main from './Main';
import SignIn from './SignIn';

const App: React.FC<{}> = () => {
  const [name, setName] = useState<string>('');
  console.log({ name });

  if (name === '') {
    return (
      <>
        <SignIn setName={setName} />
      </>
    );
  } else {
    return <Main />;
  }
};

export default App;
