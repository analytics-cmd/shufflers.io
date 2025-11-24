import React, { useState, useEffect } from 'react';
import { NeonButton } from '../components/NeonButton';
import { Ticket, Timer, Trophy, HelpCircle, DollarSign, History } from 'lucide-react';

const AFFILIATE_LINK = "https://www.shufflers.io/en/link/9cb114c2241119143011/";

export const Lottery: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 14, minutes: 22, seconds: 5 });
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative rounded-3xl overflow-hidden border border-white/10 bg-neon-card p-8 md:p-12 text-center">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/20 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-6 bg-white/5 px-4 py-1 rounded-full border border-white/10">
                <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                <span className="text-xs font-bold tracking-widest uppercase text-gray-300">Weekly Draw #482 Live</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter text-white mb-2 drop-shadow-[0_0_15px_rgba(188,19,254,0.5)]">
              $100,000
            </h1>
            <p className="text-xl text-neon-blue font-mono mb-12">ESTIMATED JACKPOT</p>

            {/* Countdown */}
            <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
                {[
                    { val: timeLeft.days, label: 'DAYS' },
                    { val: timeLeft.hours, label: 'HOURS' },
                    { val: timeLeft.minutes, label: 'MINS' },
                    { val: timeLeft.seconds, label: 'SECS' }
                ].map((t, i) => (
                    <div key={i} className="bg-black/50 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
                        <div className="text-3xl md:text-5xl font-bold text-white font-mono">
                            {String(t.val).padStart(2, '0')}
                        </div>
                        <div className="text-xs text-gray-500 font-bold mt-2">{t.label}</div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                 <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                    <NeonButton variant="purple" className="px-12 py-4 text-lg min-w-[250px]">
                        BUY TICKETS ($5)
                    </NeonButton>
                 </a>
                 <p className="text-gray-500 text-sm">Ticket sales close 15m before draw</p>
            </div>
        </div>
      </section>

      {/* How It Works */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
            { icon: Ticket, title: "1. Buy Tickets", desc: "Purchase tickets for $5. Select numbers or use quick pick." },
            { icon: Timer, title: "2. Wait for Draw", desc: "Draws happen every Sunday at 00:00 UTC provably fair." },
            { icon: Trophy, title: "3. Win Prizes", desc: "Match 3 or more numbers to win a share of the prize pool." }
        ].map((step, i) => (
            <div key={i} className="bg-neon-card border border-white/10 p-6 rounded-xl flex flex-col items-center text-center hover:border-neon-blue/30 transition-colors">
                <div className="bg-white/5 p-4 rounded-full text-neon-blue mb-4">
                    <step.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
            </div>
        ))}
      </div>

      {/* Past Winners */}
      <section className="bg-neon-card border border-white/10 rounded-xl overflow-hidden">
          <div className="p-6 border-b border-white/10 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <History className="text-neon-green" /> RECENT WINNERS
              </h2>
              <button className="text-sm text-neon-blue hover:text-white transition-colors">View All History</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead className="bg-black/40 text-xs uppercase text-gray-500 font-mono">
                    <tr>
                        <th className="p-4">Draw ID</th>
                        <th className="p-4">Date</th>
                        <th className="p-4">Winner</th>
                        <th className="p-4">Matched</th>
                        <th className="p-4 text-right">Prize</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-mono text-sm">
                    {[
                        { id: '#481', date: '2024-03-10', user: 'Hidden...x92', match: '5/5', prize: '$92,450.00' },
                        { id: '#480', date: '2024-03-03', user: 'Whale...777', match: '5/5', prize: '$88,100.00' },
                        { id: '#479', date: '2024-02-25', user: 'Lucky...abc', match: '4/5', prize: '$2,500.00' },
                        { id: '#478', date: '2024-02-18', user: 'Anon...user', match: '5/5', prize: '$105,200.00' },
                    ].map((row, i) => (
                        <tr key={i} className="hover:bg-white/5 transition-colors">
                            <td className="p-4 text-gray-300">{row.id}</td>
                            <td className="p-4 text-gray-400">{row.date}</td>
                            <td className="p-4 text-neon-blue">{row.user}</td>
                            <td className="p-4 text-white font-bold">{row.match}</td>
                            <td className="p-4 text-right text-neon-green font-bold">{row.prize}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
          </div>
      </section>
    </div>
  );
};