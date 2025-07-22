import { useState, useRef, useEffect } from "react";
import "./assistant.css";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface AssistantProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Assistant: React.FC<AssistantProps> = ({ isOpen, onToggle }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Kylie's portfolio assistant. I can help you learn more about her skills, projects, and experience. What would you like to know?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input.trim(),
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input.trim(); // Store input before clearing
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `You are an AI assistant for Kylie Roenigk's portfolio website. Kylie is a Computer Science student at Ohio University with Project Management certification. She's currently working as a Software Engineering Intern at Ohio University's Office of Information Technology.

Key information about Kylie:
- Skills: TypeScript/JavaScript, Python, C++/C#, Java, React, Angular, Node.js, SQL databases, VR development with Unity, Hapi.js, Jest
- Current Projects: 
  * Workload Estimator (Angular/SQLite) - A dynamic tool for calculating academic workload
  * Alchemy Artisans VR Game (Unity/C#) - VR crafting game with Oculus integration and hand gesture recognition
  * Full-stack web applications at internship - Professional web apps with backend API development and database design
  * Developer Showcase - This portfolio site built with React, TypeScript, and Vite
- Experience: Software Engineering Intern at OU OIT (API development with Hapi.js, database design, frontend development with Angular/React, unit testing with Jest)
- Education: Computer Science major at Ohio University, expected graduation May 2027, 4.0 GPA
- Achievements: Arnold Engineering Scholarship, Valedictorian Class of 2023

Please provide helpful, conversational responses about Kylie's background, skills, and projects. Keep responses concise but informative (2-3 sentences max). If asked about something not in her portfolio, politely redirect to what you do know about her.

User question: ${currentInput}`
                  }
                ]
              }
            ]
          })
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const botResponse =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "I'm sorry, I couldn't process that request. Please try asking something else about Kylie's portfolio.";

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment, or feel free to explore Kylie's portfolio directly!",
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: "1",
        text: "Hi! I'm Kylie's portfolio assistant. I can help you learn more about her skills, projects, and experience. What would you like to know?",
        isBot: true,
        timestamp: new Date(),
      },
    ]);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        className={`chat-toggle ${isOpen ? "open" : ""}`}
        onClick={onToggle}
        aria-label={isOpen ? "Close chat" : "Open chat assistant"}
      >
        {isOpen ? "✕" : "💬"}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-title">
              <span className="chat-icon">🤖</span>
              <span>Portfolio Assistant</span>
            </div>
            <div className="chat-controls">
              <button
                className="chat-control-btn"
                onClick={clearChat}
                title="Clear chat"
              >
                🗑️
              </button>
              <button
                className="chat-control-btn"
                onClick={onToggle}
                title="Close chat"
              >
                ✕
              </button>
            </div>
          </div>

          <div className="chat-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.isBot ? "bot" : "user"}`}
              >
                <div className="message-content">
                  <div className="message-text">{message.text}</div>
                  <div className="message-time">
                    {formatTime(message.timestamp)}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="message bot">
                <div className="message-content">
                  <div className="message-text">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about Kylie's skills, projects, or experience..."
              disabled={isLoading}
              maxLength={500}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="send-button"
              aria-label="Send message"
            >
              {isLoading ? "⏳" : "📤"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Assistant;
