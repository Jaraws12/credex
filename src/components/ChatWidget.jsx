import React, { useState } from 'react';
import axios from 'axios';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hi! How can I help you today?', type: 'bot' },
    { text: 'Examples: "How do I sell my license?", "What are the pricing plans?"', type: 'bot' },
  ]);
  const [input, setInput] = useState('');
//   const API_KEY = AIzaSyBp1vNk_90BkcgRghGEuM1ARSvJ9qpg1Wo;

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, type: 'user' }];
    setMessages(newMessages);
    setInput('');

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${"AIzaSyB4sucBNZ6ZxAf1T2Ks69RcM2pkXamJjXM"}`,
        {
          contents: [
            {
              parts: [{ text: input }],
            },
          ],
        }
      );

      const aiReply = response.data.candidates[0]?.content?.parts[0]?.text || "Sorry, I couldn't understand that.";
      setMessages([...newMessages, { text: aiReply, type: 'bot' }]);
    } catch (error) {
      setMessages([
        ...newMessages,
        { text: 'Something went wrong. Please try again later.', type: 'bot' },
      ]);
      console.error(error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <>
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: isOpen ? '300px' : '60px',
          height: isOpen ? '400px' : '60px',
          backgroundColor: '#fff',
          borderRadius: '20px',
          boxShadow: '0 0 15px rgba(0,0,0,0.2)',
          transition: 'all 0.3s',
          overflow: 'hidden',
          zIndex: 1000,
        }}
      >
        {isOpen ? (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px' }}>
              <strong>AI Assistant</strong>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  float: 'right',
                  background: 'none',
                  border: 'none',
                  color: '#fff',
                  fontSize: '16px',
                  cursor: 'pointer',
                }}
              >
                ✕
              </button>
            </div>
            <div
              style={{
                flex: 1,
                padding: '10px',
                overflowY: 'auto',
                fontSize: '14px',
              }}
            >
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  style={{
                    textAlign: msg.type === 'user' ? 'right' : 'left',
                    marginBottom: '10px',
                  }}
                >
                  <div
                    style={{
                      display: 'inline-block',
                      backgroundColor: msg.type === 'user' ? '#007bff' : '#f1f1f1',
                      color: msg.type === 'user' ? '#fff' : '#000',
                      padding: '8px 12px',
                      borderRadius: '15px',
                      maxWidth: '80%',
                    }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', borderTop: '1px solid #ccc' }}>
              <input
                type="text"
                placeholder="Type your question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                style={{
                  flex: 1,
                  border: 'none',
                  padding: '10px',
                  fontSize: '14px',
                  outline: 'none',
                }}
              />
              <button
                onClick={sendMessage}
                style={{
                  border: 'none',
                  background: '#007bff',
                  color: '#fff',
                  padding: '0 16px',
                  cursor: 'pointer',
                }}
              >
                Send
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setIsOpen(true)}
            style={{
              backgroundColor: '#007bff',
              border: 'none',
              width: '100%',
              height: '100%',
              borderRadius: '20px',
              color: '#fff',
              fontSize: '24px',
              cursor: 'pointer',
            }}
          >
            💬
          </button>
        )}
      </div>
    </>
  );
};

export default ChatWidget;
