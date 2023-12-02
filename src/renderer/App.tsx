import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './App.css';

const { ipcRenderer } = window.electron;

function Hello() {
  const [messages, setMessages] = useState<string[]>([]);
  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index}>
            <div style={{ color: index % 2 === 0 ? 'white' : 'chartreuse' }}>
              {message}
            </div>
          </div>
        ))}
      </div>
      <form
        className="chat-input"
        onSubmit={(e) => {
          e.preventDefault();
          const input = document.getElementById(
            'chat-input',
          ) as HTMLInputElement;
          const message = input.value;

          setMessages((c) => [...c, `User: ${message}`]);
          const index = messages.length + 1;

          ipcRenderer.removeAllListeners('chat-stream');
          ipcRenderer.on('chat-stream', (arg) => {
            if (!arg) return;
            setMessages((c) => {
              const newMessages = [...c];
              (newMessages as any)[index] =
                ((newMessages as any)[index] ?? '') + arg;
              return newMessages;
            });
          });

          ipcRenderer.sendMessage('send-message-to-gpt', message);

          input.value = '';
          setMessages([...messages, message]);
        }}
      >
        <input type="text" id="chat-input" name="chat-input" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    ipcRenderer.sendMessage('init-gpt');
    ipcRenderer.once('gpt-initialized', () => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
