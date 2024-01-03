import React, { useState, useEffect } from 'react';
import baby from './baby.png';
import card from './babyshower.png';

function Input() {
  const [name, setName] = useState('');
  const [rsvp, setRSVP] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log(rsvp);
  }, [rsvp]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRSVP(true);
    try {
        const formData = new URLSearchParams();
        formData.append('name', name);
        formData.append('message', message)
        const response = await fetch('https://main--tranquil-strudel-d10111.netlify.app/.netlify/functions/sendRsvp', {
      method: 'POST',
      headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name, message }),
});

      if (response.ok) {
        console.log('RSVP sent successfully');
        alert('Your RSVP has been sent Thank You');
      } else {
        console.error('Failed to send RSVP');
        alert('failed to send rsvp');
      }
    } catch (error) {
      alert('Failed to RSVP, try again later!');
      console.error('Error while sending RSVP', error);
    }
  };

  return (
    <>
    <img className='custom-animate-pulse border border-indigo-600 border-8' src={card} alt='babyshower' />
    <img className='animate-bounce'
        src={baby}
        alt='baby'
        />
    <h1 className='text-5xl text-white mb-10'>John and Hailey baby Shower</h1>
    <h1 className='text-2l text-white mb-10'>If you wish to come, please enter your name and a message and click RSVP!. There will be a Diaper Raffle, please bring size 1, 2 or 3 diapers.</h1>
    <h1 className='text-2l text-white mb-10'>Please No Newborn sized Clothes.</h1>
    
    <a href="https://www.babylist.com/list/hailey-parrelle" className='mb-5 text-2l text-white mb-10 hover:text-blue-500'>Click Here to see Registry</a>
    <p className='text-white mb-5 text-center'>Thank You!</p>
    <div className="bg-blue-500 p-4 rounded-md shadow-md">
      <label className="block mb-2 text-center text-blue-900 mb-10">Enter name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 p-2 mb-4 w-full"
      />
      <label className="block mb-2 text-center text-blue-900">Message</label>
      <input
        type="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border border-gray-300 p-2 mb-4 w-full"
      />
      <button
        onClick={handleSubmit}
        className="text-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        RSVP!
      </button>
    </div>
    </>
  );
}

export default Input;
