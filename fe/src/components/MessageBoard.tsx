import React, { useState } from 'react';

function MessageBoard() {
  // State to store messages
  const [messages, setMessages] = useState<string[]>([]);
  
  // State to store new message input
  const [newMessage, setNewMessage] = useState('');

  // Function to handle submitting a new message
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  return (
    <div>
      <h2>Message Board</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Type your message..." 
            value={newMessage} 
            onChange={(e) => setNewMessage(e.target.value)} 
          />
          <button type="submit">Post</button>
        </form>
      </div>
      <div>
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MessageBoard;
