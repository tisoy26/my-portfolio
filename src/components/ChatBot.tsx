import { useState, useRef, useEffect } from "react";
import { IconMessageCircle, IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

// Personal information database
const personalInfo: Record<string, string> = {
  fullName: "Joseph Dave Demaano",
  name: "Joseph Dave",
  firstName: "Joseph",
  lastName: "Demaano",
  age: "23",
  location: "Philippines",
  address: "Purok bayanihan, Bo. 2 St. Niño, Koronadal City, South Cotabato",
  email: "tisoydemaano13@gmail.com",
  github: "https://github.com/tisoy26",
  linkedin: "https://linkedin.com/in/yourprofile",
  facebook: "https://facebook.com/yourprofile",
  role: "Web Developer",
  profession: "Web Developer",
  experience: "1+ years",
  skills: "React, TypeScript, Tailwind CSS, Laravel, Mysql and other modern web technologies",
  education: "BSIT Graduate",
};

// Simple keyword-based response system
const getResponse = (question: string): string => {
  const lowerQuestion = question.toLowerCase();

  // Greetings
  if (lowerQuestion.match(/^(hi|hello|hey|good morning|good afternoon|good evening)/)) {
    return "Hello!  I'm Joseph Dave's AI assistant. Feel free to ask me anything about Joseph's background, skills, or contact information!";
  }

  // Full name
  if (lowerQuestion.includes("full name") || lowerQuestion.includes("complete name")) {
    return `My full name is ${personalInfo.fullName}.`;
  }

  // Name
  if (lowerQuestion.includes("your name") || lowerQuestion.includes("who are you") || lowerQuestion.match(/\bname\b/)) {
    return `I'm ${personalInfo.name}, a ${personalInfo.role}.`;
  }

  // Age
  if (lowerQuestion.includes("age") || lowerQuestion.includes("old")) {
    return `I'm ${personalInfo.age} years old.`;
  }

  // Location/Address
  if (lowerQuestion.includes("location") || lowerQuestion.includes("address") || lowerQuestion.includes("where") || lowerQuestion.includes("live")) {
    return `I'm based in ${personalInfo.location}.`;
  }

  // Email
  if (lowerQuestion.includes("email") || lowerQuestion.includes("contact") || lowerQuestion.includes("reach")) {
    return `You can reach me at ${personalInfo.email}. You can also use the contact form on this website!`;
  }

  // Social Media
  if (lowerQuestion.includes("github")) {
    return `You can find my GitHub profile at ${personalInfo.github}`;
  }
  if (lowerQuestion.includes("linkedin")) {
    return `Connect with me on LinkedIn: ${personalInfo.linkedin}`;
  }
  if (lowerQuestion.includes("facebook")) {
    return `Find me on Facebook: ${personalInfo.facebook}`;
  }
  if (lowerQuestion.includes("social media") || lowerQuestion.includes("social")) {
    return `You can find me on:\n- GitHub: ${personalInfo.github}\n- LinkedIn: ${personalInfo.linkedin}\n- Facebook: ${personalInfo.facebook}`;
  }

  // Role/Profession
  if (lowerQuestion.includes("do") || lowerQuestion.includes("role") || lowerQuestion.includes("job") || lowerQuestion.includes("profession")) {
    return `I'm a ${personalInfo.role} with ${personalInfo.experience} of experience.`;
  }

  // Skills
  if (lowerQuestion.includes("skill") || lowerQuestion.includes("technology") || lowerQuestion.includes("tech stack")) {
    return `My skills include ${personalInfo.skills}.`;
  }

  // Experience
  if (lowerQuestion.includes("experience") || lowerQuestion.includes("worked")) {
    return `I have ${personalInfo.experience} of professional experience in web development.`;
  }

  // Education
  if (lowerQuestion.includes("education") || lowerQuestion.includes("study") || lowerQuestion.includes("degree")) {
    return `I'm a ${personalInfo.education}.`;
  }

  // Projects
  if (lowerQuestion.includes("project")) {
    return "You can view my projects in the Projects section above! I've worked on various web applications using modern technologies.";
  }

  // Help
  if (lowerQuestion.includes("help") || lowerQuestion === "?") {
    return "You can ask me about:\n- My name, age, and location\n- Contact information (email, social media)\n- Skills and experience\n- Education and projects\n- How to reach me\n\nFeel free to ask anything!";
  }

  // Default response
  return "I'm not sure about that. You can ask me about my name, age, location, contact information, skills, experience, or education. Type 'help' to see what I can answer!";
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hi! I'm Joseph Dave's virtual assistant. Ask me anything about Joseph's background, skills, or how to contact him!",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Show hint on page load and when idle
  useEffect(() => {
    let idleTimeout: ReturnType<typeof setTimeout>;
    let hintTimeout: ReturnType<typeof setTimeout>;
    let initialHintProtection = false;

    // Show hint on page load after 2 seconds
    const initialTimeout = setTimeout(() => {
      if (!isOpen) {
        setShowHint(true);
        initialHintProtection = true;

        // Prevent hiding for first 3 seconds
        setTimeout(() => {
          initialHintProtection = false;
        }, 3000);

        // Hide after 5 seconds total
        hintTimeout = setTimeout(() => {
          setShowHint(false);
        }, 5000);
      }
    }, 2000);

    // Show hint when idle (no mouse movement, scroll, or keyboard activity for 5 seconds)
    const resetIdleTimer = () => {
      // Don't reset if we're in the initial hint protection period
      if (initialHintProtection) {
        return;
      }

      clearTimeout(idleTimeout);
      setShowHint(false);
      
      idleTimeout = setTimeout(() => {
        if (!isOpen) {
          setShowHint(true);
          // Hide after 5 seconds
          hintTimeout = setTimeout(() => {
            setShowHint(false);
          }, 5000);
        }
      }, 5000);
    };

    window.addEventListener("mousemove", resetIdleTimer);
    window.addEventListener("scroll", resetIdleTimer);
    window.addEventListener("keypress", resetIdleTimer);
    window.addEventListener("click", resetIdleTimer);

    // Start idle timer
    resetIdleTimer();

    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(idleTimeout);
      clearTimeout(hintTimeout);
      window.removeEventListener("mousemove", resetIdleTimer);
      window.removeEventListener("scroll", resetIdleTimer);
      window.removeEventListener("keypress", resetIdleTimer);
      window.removeEventListener("click", resetIdleTimer);
    };
  }, [isOpen]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Get bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(inputValue),
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);

    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Hint Tooltip */}
      <AnimatePresence>
        {showHint && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed bottom-8 right-24 z-50 bg-white dark:bg-zinc-800 text-neutral-800 dark:text-white px-4 py-2 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700"
          >
            <p className="text-sm font-medium whitespace-nowrap">You can ask me anything! 👋</p>
            <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white dark:border-l-zinc-800"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowHint(false);
        }}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300",
          isOpen && "scale-0"
        )}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={showHint ? { scale: [1, 1.1, 1] } : {}}
        transition={{ repeat: showHint ? Infinity : 0, duration: 1.5 }}
      >
        <IconMessageCircle className="h-6 w-6" />
      </motion.button>

      {/* Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]"
          >
            <div className="shadow-input flex flex-col rounded-2xl bg-white border border-neutral-200 dark:bg-zinc-900 dark:border-neutral-800 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                    <IconMessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Joseph Dave</h3>
                    <p className="text-xs text-blue-100">AI Assistant</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                >
                  <IconX className="h-5 w-5" />
                </button>
              </div>

              {/* Messages */}
              <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-black">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex",
                      message.isUser ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[80%] rounded-2xl px-4 py-2 whitespace-pre-wrap",
                        message.isUser
                          ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-br-none"
                          : "bg-white dark:bg-zinc-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 rounded-bl-none"
                      )}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-zinc-900 p-4">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything..."
                    className="flex-1 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-zinc-800 px-4 py-2 text-sm text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={handleSend}
                    disabled={!inputValue.trim()}
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#2563eb',
                      color: 'white',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: 'none',
                      cursor: inputValue.trim() ? 'pointer' : 'not-allowed',
                      opacity: inputValue.trim() ? 1 : 0.5,
                    }}
                  >
                    ➤
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
