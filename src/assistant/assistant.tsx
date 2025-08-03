import { useState, useRef, useEffect } from 'react';
import './assistant.css';

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
      id: '1',
      text: "Hi! I'm Kylie's portfolio assistant. I can help you learn more about her skills, projects, and experience. What would you like to know?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
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

    setMessages(prev => [...prev, userMessage]);
    const currentInput = input.trim();
    setInput('');
    setIsLoading(true);

    try {
      // Check if API key exists
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('API key not found');
      }

      console.log('Making API request...'); // Debug log

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `You are an AI assistant for Kylie Roenigk's portfolio website. 

🎓 ABOUT KYLIE ROENIGK

📚 EDUCATION
• Bachelor of Science in Computer Science
• Ohio University (Expected Graduation: May 2027)
• GPA: 4.0/4.0

💼 PROFESSIONAL EXPERIENCE
• Current: Software Engineering Intern at Ohio University Office of Information Technology
• Previous: Technology Intern at Woodridge Local Schools (May 2021 – June 2023)
• Upcoming: Computer Science Student Ambassador for Ohio University (2025–2026)

💻 TECHNICAL SKILLS
Programming Languages:
• TypeScript, JavaScript, Python, C++, C#, Java, SQL

Frameworks & Technologies:
• Frontend: React, Angular, HTML5, CSS3
• Backend: Node.js, Hapi.js, RESTful APIs
• Database: SQLite, SQL Server, PostgreSQL
• Development Tools: Unity (VR), GitHub Actions, Docker, Jest
• Specialties: Full-stack development, VR development, API design

🚀 NOTABLE PROJECTS
• Workload Estimator: Typescript application using Vite for academic planning and workload analysis
• Alchemy Artisans: Immersive VR crafting game built with Unity3D and Oculus SDK, featuring hand gesture recognition
• Portfolio Showcase: Personal website built with Vite, TypeScript, and React, showcasing professional work and achievements
• Enterprise Web Applications: Professional full-stack applications developed during internship

🏆 ACHIEVEMENTS & RECOGNITION
• Arnold Engineering Scholarship recipient
• Valedictorian, Class of 2023
• Maintained 4.0 GPA throughout university studies
• Computer Science Student Ambassador for Russ College of Engineering and Technology

🎯 CAREER ASPIRATIONS
Graduate School Plans:
• Master's degree in Data Science and Machine Learning in Germany
• Focus on ethical AI applications across multiple disciplines
• Preference for hands-on, research-based programs with internship opportunities

Professional Interests:
• Full-stack web development
• Machine learning and data science applications
• Virtual and augmented reality technologies
• Ethical AI and responsible technology development

🌍 PERSONAL VALUES & GOALS
Core Values:
• Continuous learning and self-improvement
• Work-life balance and cross-cultural exploration
• Supporting peers and helping others succeed
• Ethical technology development

Long-term Vision:
• Work internationally in technology sector
• Contribute to cutting-edge research in ML/AI
• Design impactful tools with global relevance
• Bridge technology and ethical applications

🗣️ LANGUAGES & BACKGROUND
• Native English speaker
• United States citizenship
• Strong interest in international collaboration

---

Please provide helpful, conversational responses about Kylie's background, skills, and projects. Keep responses concise (2-3 sentences) and engaging. If asked about topics outside her portfolio, politely redirect to her documented experience and achievements.

User Question: ${currentInput}`,
                  },
                ],
              },
            ],
            generationConfig: {
              temperature: 0.7,
              topK: 40,
              topP: 0.95,
              maxOutputTokens: 1024,
            },
            safetySettings: [
              {
                category: 'HARM_CATEGORY_HARASSMENT',
                threshold: 'BLOCK_MEDIUM_AND_ABOVE',
              },
              {
                category: 'HARM_CATEGORY_HATE_SPEECH',
                threshold: 'BLOCK_MEDIUM_AND_ABOVE',
              },
              {
                category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
                threshold: 'BLOCK_MEDIUM_AND_ABOVE',
              },
              {
                category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
                threshold: 'BLOCK_MEDIUM_AND_ABOVE',
              },
            ],
          }),
        }
      );

      console.log('Response status:', response.status); // Debug log

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error Response:', errorText);
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorText}`
        );
      }

      const data = await response.json();
      console.log('API Response:', data); // Debug log

      let botResponse = "I'm sorry, I couldn't generate a response.";

      if (data.candidates && data.candidates.length > 0) {
        const candidate = data.candidates[0];
        if (
          candidate.content &&
          candidate.content.parts &&
          candidate.content.parts.length > 0
        ) {
          botResponse = candidate.content.parts[0].text;
        }
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Detailed error:', error);

      let errorText =
        "I'm having trouble connecting right now. Please try again!";

      if (error instanceof Error) {
        if (error.message.includes('API key not found')) {
          errorText = 'API configuration issue. Please check the setup.';
        } else if (error.message.includes('403')) {
          errorText =
            'API access denied. Please check your API key permissions.';
        } else if (error.message.includes('429')) {
          errorText = 'Too many requests. Please wait a moment and try again.';
        } else if (error.message.includes('400')) {
          errorText = 'Invalid request. Please try rephrasing your question.';
        }
      }

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: errorText,
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: '1',
        text: "Hi! I'm Kylie's portfolio assistant. I can help you learn more about her skills, projects, and experience. What would you like to know?",
        isBot: true,
        timestamp: new Date(),
      },
    ]);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        className={`chat-toggle ${isOpen ? 'open' : ''}`}
        onClick={onToggle}
        aria-label={isOpen ? 'Close chat' : 'Open chat assistant'}
      >
        {isOpen ? '✕' : '💬'}
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
            {messages.map(message => (
              <div
                key={message.id}
                className={`message ${message.isBot ? 'bot' : 'user'}`}
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
              onChange={e => setInput(e.target.value)}
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
              {isLoading ? '⏳' : '📤'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Assistant;
