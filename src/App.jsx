import React from 'react';
import './index.css';
import Input from './input'; // Correcting the import, assuming the file is named Input.jsx

const App = () => {
  return (
    <div className='flex flex-col items-center mt-10'>

      <div className='flex items-center'>
        

        <div className='ml-4'>
          <Input />
        </div>
      </div>
    </div>
  );
};

export default App;


