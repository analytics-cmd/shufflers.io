import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-white/10 last:border-0">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-4 flex items-center justify-between text-left focus:outline-none hover:text-neon-blue transition-colors group"
            >
                <span className="font-bold text-sm text-white group-hover:text-neon-blue transition-colors">{question}</span>
                {isOpen ? <ChevronUp size={16} className="text-neon-blue" /> : <ChevronDown size={16} className="text-gray-500 group-hover:text-neon-blue transition-colors" />}
            </button>
            {isOpen && (
                <div className="pb-4 text-gray-400 text-sm leading-relaxed">
                    {answer}
                </div>
            )}
        </div>
    );
};