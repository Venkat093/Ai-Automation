import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { colors, borderRadius } from '../constants/theme';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your AI assistant. How can I help you automate your business today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickActions = [
    'Show me service examples',
    'Recommend automations for my business',
    'Book a call',
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue('');

    // Mock bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Thanks for your message! This is a demo chatbot. In production, I'd be connected to AI to provide intelligent responses. Would you like to book a call with our team?",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const handleQuickAction = (action) => {
    const userMessage = {
      id: messages.length + 1,
      text: action,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages([...messages, userMessage]);

    setTimeout(() => {
      let response = '';
      if (action.includes('examples')) {
        response = 'We offer AI Chatbots, Lead Qualification, CRM Automation, and more! Check out our Services page for detailed examples.';
      } else if (action.includes('recommend')) {
        response = "I'd love to help! What industry are you in? (e.g., Real Estate, Healthcare, E-commerce)";
      } else if (action.includes('Book')) {
        response = 'Great! Click the "Book a Call" button at the top of the page to schedule your free strategy session.';
      }

      const botResponse = {
        id: messages.length + 2,
        text: response,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 800);
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 shadow-2xl transition-all duration-300 hover:scale-110"
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: colors.accentPrimary,
            color: colors.bgPrimary,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 0 30px ${colors.accentPrimary}40`,
            animation: 'pulse 2s infinite',
          }}
        >
          <MessageSquare size={28} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-6 right-6 z-50 shadow-2xl transition-all duration-300"
          style={{
            width: '380px',
            height: '600px',
            borderRadius: borderRadius.lg,
            background: colors.bgSecondary,
            border: `1px solid ${colors.borderSubtle}`,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between p-4 border-b"
            style={{
              background: colors.deepNavy,
              borderColor: colors.borderSubtle,
              borderTopLeftRadius: borderRadius.lg,
              borderTopRightRadius: borderRadius.lg,
            }}
          >
            <div className="flex items-center space-x-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: colors.accentPrimary, color: colors.bgPrimary }}
              >
                <MessageSquare size={20} />
              </div>
              <div>
                <div className="font-semibold" style={{ color: colors.textPrimary }}>
                  AI Assistant
                </div>
                <div className="text-xs flex items-center space-x-1">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: colors.accentGreen }}
                  />
                  <span style={{ color: colors.textMuted }}>Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{ color: colors.textMuted }}
              className="hover:opacity-70 transition-opacity"
            >
              <X size={24} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className="max-w-[80%] px-4 py-3 rounded-2xl"
                  style={{
                    background:
                      message.sender === 'user'
                        ? colors.accentPrimary
                        : colors.bgTertiary,
                    color:
                      message.sender === 'user'
                        ? colors.bgPrimary
                        : colors.textPrimary,
                  }}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {/* Quick Actions */}
            {messages.length === 1 && (
              <div className="space-y-2 mt-4">
                <p className="text-sm" style={{ color: colors.textMuted }}>
                  Quick actions:
                </p>
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickAction(action)}
                    className="block w-full text-left px-4 py-3 rounded-xl transition-all duration-200 text-sm"
                    style={{
                      background: colors.bgTertiary,
                      color: colors.textSecondary,
                      border: `1px solid ${colors.borderSubtle}`,
                    }}
                  >
                    {action}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div
            className="p-4 border-t"
            style={{ borderColor: colors.borderSubtle }}
          >
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 transition-all"
                style={{
                  background: colors.bgTertiary,
                  color: colors.textPrimary,
                  border: `1px solid ${colors.borderSubtle}`,
                }}
              />
              <button
                onClick={handleSendMessage}
                className="px-4 py-3 rounded-xl transition-all duration-200"
                style={{
                  background: colors.accentPrimary,
                  color: colors.bgPrimary,
                }}
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;