import React, { useState } from 'react';
import SignIn from './SignIn';

const App: React.FC<{}> = () => {
  const [name, setName] = useState<string>('');
  console.log({ name });

  return (
    <>
      <SignIn setName={setName} />
    </>
  );
};

export default App;
