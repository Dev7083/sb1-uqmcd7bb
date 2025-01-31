"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useDragControls } from "framer-motion";
import {
  X,
  Send,
  MessageCircle,
  Paperclip,
  GripHorizontal,
  Loader2,
} from "lucide-react";

interface ChatDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatDialog({ isOpen, onClose }: ChatDialogProps) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
    []
  );
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const constraintsRef = useRef(null);
  const dragControls = useDragControls();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages((prev) => [...prev, { text: message, isUser: true }]);
      setMessage("");
      setIsThinking(true);
      // Add the static response after a delay
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "Coming soon", isUser: false },
        ]);
        setIsThinking(false);
      }, 1500);
    }
  };

  const handleAttachFile = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        setMessages((prev) => [
          ...prev,
          { text: `File attached: ${file.name}`, isUser: true },
        ]);
      }
    };
    input.click();
  };

  useEffect(() => {
    if (!isOpen) {
      setPosition({ x: 0, y: 0 });
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          ref={constraintsRef}
          className='fixed inset-0 z-50 pointer-events-none'
        >
          <motion.div
            drag
            dragControls={dragControls}
            dragMomentum={false}
            dragConstraints={constraintsRef}
            onDragEnd={() => setIsDragging(false)}
            initial={{ opacity: 0, y: 50, x: 0 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 50, x: 0 }}
            className='absolute bottom-24 right-8 w-80 bg-white rounded-lg shadow-2xl overflow-hidden pointer-events-auto cursor-default z-20'
          >
            <div
              className={`bg-gradient-to-r from-purple-600 to-indigo-600 p-4 flex justify-between items-center ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
              onPointerDown={(e) => {
                dragControls.start(e);
                setIsDragging(true);
              }}
            >
              <div className='flex items-center text-white'>
                <MessageCircle
                  size={20}
                  className='mr-2'
                />
                <h2 className='font-semibold'>Live Chat</h2>
              </div>
              <div className='flex items-center'>
                <GripHorizontal
                  size={20}
                  className='text-white mr-2'
                />
                <button
                  onClick={onClose}
                  className='text-white hover:bg-white/20 rounded-full p-1 transition-colors'
                  aria-label='Close chat'
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className='h-64 p-4 overflow-y-auto bg-muted'>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-2 ${msg.isUser ? "text-right" : "text-left"}`}
                >
                  <span
                    className={`inline-block p-2 rounded-lg ${msg.isUser ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-800"}`}
                  >
                    {msg.text}
                  </span>
                </div>
              ))}
              {isThinking && (
                <div className='flex items-center text-gray-500'>
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                  <span>Thinking...</span>
                </div>
              )}
            </div>
            <form
              onSubmit={handleSubmit}
              className='p-4 bg-background'
            >
              <div className='flex items-center space-x-2'>
                <div className='flex-grow flex items-center border rounded-lg overflow-hidden'>
                  <input
                    ref={inputRef}
                    type='text'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder='Type your message...'
                    className='flex-grow min-w-0 px-3 py-2 focus:outline-none focus:ring-3 focus:ring-purple-600'
                  />
                  <div className='flex-shrink-0 flex'>
                    <button
                      type='button'
                      className='p-2 text-gray-500 hover:text-gray-700 transition-colors'
                      aria-label='Attach file'
                      onClick={handleAttachFile}
                    >
                      <Paperclip size={20} />
                    </button>
                  </div>
                </div>
                <button
                  type='submit'
                  className='flex-shrink-0 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-2 rounded-full hover:from-purple-700 hover:to-indigo-700 transition-colors'
                  aria-label='Send message'
                >
                  <Send size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
