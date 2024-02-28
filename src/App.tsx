/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import Form from './components/Form';

function App() {
  const [name, setName] = useState('John');
  return (
    <>
      <Form />
    </>
  );
}

export default App;
