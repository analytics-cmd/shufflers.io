import React, { useState, useEffect } from 'react';
import { NeonButton } from '../components/NeonButton';
import { generateGamblingTip } from '../services/geminiService';
import { Activity, Zap, Trophy, Shield, Cpu, Dice5, Tv, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const AFFILIATE_LINK = "https://www.shufflers.io/en/link/9cb114c2241119143011/";

const MiniGame = () => {
  const [result, setResult] = useState<string>('PRESS START');
  const [rolling, setRolling] = useState(false);
  const [balance, setBalance] = useState(1000);

  const play = () => {
    if (rolling) return;
    setRolling(true);
    setResult('ROLLING...');
    
    setTimeout(() => {
      const outcome = Math.random();
      const win = outcome > 0.5;
      const multiplier = (Math.random() * 2 + 1).toFixed(2);
      
      if (win) {
        setResult(`WIN ${multiplier}x`);
        setBalance(prev => Math.floor(prev + (100 * parseFloat(multiplier))));
      } else {
        setResult('BUST');
        setBalance(prev => prev - 100);
      }
      setRolling(false);
    }, 1000);
  };

  return (
    <div className="bg-neon-card border border-white/10 rounded-xl p-6 relative overflow-hidden h-full">
      <div className="absolute top-0 right-0 p-4 text-xs font-mono text-gray-400">DEMO MODE</div>
      <h3 className="text-xl font-bold text-neon-green mb-4 flex items-center gap-2">
        <Zap className="animate-pulse" /> INSTANT PLAY
      </h3>
      <div className="bg-black/50 rounded-lg p-8 text-center border border-white/5 mb-6">
        <div className={`text-4xl font-mono font-bold ${result.includes('WIN') ? 'text-neon-blue' : result.includes('BUST') ? 'text-red-500' : 'text-white'}`}>
          {result}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="font-mono text-gray-400">CREDITS: <span className="text-white">{balance}</span></div>
        <NeonButton onClick={play} variant="green" className={rolling ? 'opacity-50' : ''}>
          {rolling ? '...' : 'ROLL (100)'}
        </NeonButton>
      </div>
    </div>
  );
};

const AITipBox = () => {
  const [tip, setTip] = useState("Initializing AI Neural Link...");

  useEffect(() => {
    generateGamblingTip().then(setTip);
  }, []);

  return (
    <div className="mt-8 p-4 border-l-2 border-neon-purple bg-gradient-to-r from-neon-purple/10 to-transparent rounded-r-lg">
      <h4 className="text-neon-purple font-mono text-sm mb-1 flex items-center gap-2">
        <Cpu size={16} /> AI STRATEGY NODE
      </h4>
      <p className="text-gray-300 italic text-sm">"{tip}"</p>
    </div>
  );
};

const LatestBets = () => {
  const [bets, setBets] = useState([
    { game: 'Plinko', user: 'Hidden...', amount: '0.045 BTC', multiplier: '24x', payout: '1.08 BTC' },
    { game: 'Mines', user: 'CryptoK...', amount: '1.2 ETH', multiplier: '2.5x', payout: '3.0 ETH' },
    { game: 'Wanted', user: 'AnonUser', amount: '500 USDT', multiplier: '150x', payout: '75,000 USDT' },
    { game: 'Limbo', user: 'Whale99', amount: '2500 XRP', multiplier: '1.1x', payout: '2,750 XRP' },
  ]);

  return (
    <div className="bg-neon-card border border-white/10 rounded-xl p-6 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <DollarSign className="text-neon-green" /> LATEST BETS
        </h3>
        <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs text-gray-400 font-mono">LIVE FEED</span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-500 uppercase font-mono border-b border-white/10">
            <tr>
              <th className="py-3 px-4">Game</th>
              <th className="py-3 px-4">User</th>
              <th className="py-3 px-4">Bet Amount</th>
              <th className="py-3 px-4 text-right">Multiplier</th>
              <th className="py-3 px-4 text-right">Payout</th>
            </tr>
          </thead>
          <tbody className="font-mono">
            {bets.map((bet, i) => (
              <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-3 px-4 text-white">{bet.game}</td>
                <td className="py-3 px-4 text-gray-400">{bet.user}</td>
                <td className="py-3 px-4 text-gray-300">{bet.amount}</td>
                <td className="py-3 px-4 text-right text-neon-blue font-bold">{bet.multiplier}</td>
                <td className="py-3 px-4 text-right text-neon-green font-bold">{bet.payout}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(188,19,254,0.15)] group">
        {/* Background Image with Parallax-like feel */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 group-hover:scale-105"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop")',
            backgroundPosition: 'center center' 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-6">
             <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase backdrop-blur-md flex items-center gap-2">
                <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                Official Community Portal
             </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-6 leading-[0.9] text-white drop-shadow-2xl">
            JOIN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">SHUFFLERS.IO</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-10 leading-relaxed drop-shadow-lg max-w-lg font-light">
            Access the #1 Crypto Betting Community.
            Exclusive rakeback, instant withdrawals, and provably fair gaming.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
              <NeonButton variant="blue" className="px-8 min-w-[160px]">JOIN OFFICIAL</NeonButton>
            </a>
            <Link to="/games">
              <NeonButton variant="purple" className="px-8 min-w-[160px]">BROWSE GAMES</NeonButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Ticker */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'TOTAL WAGERED', value: '$3.2B+', change: 'Lifetime', color: 'text-white' },
          { label: 'ACTIVE PLAYERS', value: '18,402', change: 'Online', color: 'text-neon-blue' },
          { label: 'LATEST DROP', value: '$150,000', change: 'Weekly Race', color: 'text-neon-purple' },
          { label: 'RTP CERTIFIED', value: '99.2%', change: 'Originals', color: 'text-neon-green' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-neon-card/50 border border-white/5 p-4 rounded-xl backdrop-blur-sm hover:border-white/10 transition-colors">
            <div className="text-xs text-gray-500 font-mono mb-1 uppercase tracking-wider">{stat.label}</div>
            <div className="flex flex-col">
              <span className={`text-2xl font-bold ${stat.color} tracking-tight`}>{stat.value}</span>
              <span className="text-xs text-gray-400">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

       {/* Shuffle Games Section */}
      <section>
         <div className="flex items-center justify-between mb-6">
             <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                 <Dice5 className="text-neon-purple" /> SHUFFLE ORIGINALS
             </h2>
             <Link to="/games" className="text-sm text-neon-blue hover:underline">View All</Link>
         </div>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {[
                 { name: 'Plinko', img: 'https://picsum.photos/seed/plinko/300/200', rtp: '99%' },
                 { name: 'Mines', img: 'https://picsum.photos/seed/mines/300/200', rtp: '99%' },
                 { name: 'Limbo', img: 'https://picsum.photos/seed/limbo/300/200', rtp: '99%' },
                 { name: 'Dice', img: 'https://picsum.photos/seed/dice/300/200', rtp: '99%' },
             ].map((game, i) => (
                 <div key={i} className="group relative rounded-lg overflow-hidden border border-white/10 cursor-pointer">
                     <div className="aspect-video w-full">
                        <img src={game.img} alt={game.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                     </div>
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-4">
                         <span className="font-bold text-white">{game.name}</span>
                         <span className="text-xs text-neon-green">RTP {game.rtp}</span>
                     </div>
                      <a href={AFFILIATE_LINK} target="_blank" rel="noreferrer" className="absolute inset-0 z-10"></a>
                 </div>
             ))}
         </div>
      </section>

      {/* Live Casino Section */}
      <section>
         <div className="flex items-center justify-between mb-6">
             <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                 <Tv className="text-red-500" /> LIVE CASINO
             </h2>
             <Link to="/games" className="text-sm text-neon-blue hover:underline">View All</Link>
         </div>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {[
                 { name: 'Blackjack Live', img: 'https://picsum.photos/seed/bj/300/200', provider: 'Evolution' },
                 { name: 'Roulette', img: 'https://picsum.photos/seed/roulette/300/200', provider: 'Pragmatic' },
                 { name: 'Crazy Time', img: 'https://picsum.photos/seed/crazy/300/200', provider: 'Evolution' },
                 { name: 'Monopoly Big Baller', img: 'https://picsum.photos/seed/monopoly/300/200', provider: 'Evolution' },
             ].map((game, i) => (
                 <div key={i} className="group relative rounded-lg overflow-hidden border border-white/10 cursor-pointer">
                     <div className="aspect-video w-full">
                        <img src={game.img} alt={game.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                     </div>
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-4">
                         <span className="font-bold text-white">{game.name}</span>
                         <span className="text-xs text-gray-300">{game.provider}</span>
                     </div>
                     <a href={AFFILIATE_LINK} target="_blank" rel="noreferrer" className="absolute inset-0 z-10"></a>
                 </div>
             ))}
         </div>
      </section>

      {/* Latest Bets */}
      <LatestBets />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Brand Info */}
        <div className="bg-neon-card border border-white/10 p-8 rounded-xl flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Activity className="text-neon-blue" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                SHUFFLE PROTOCOL
              </span>
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Shufflers.io utilizes advanced blockchain technology for 100% provably fair games. 
              Every hash, seed, and nonce is verifiable by the user in real-time.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: Zap, text: "Instant Lightning Withdrawals" },
                { icon: Trophy, text: "Weekly $100k Races" },
                { icon: Shield, text: "ISO 27001 Certified Security" },
                { icon: Activity, text: "Linear VIP Rakeback System" }
              ].map((Item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-black/30 rounded-lg border border-white/5">
                  <Item.icon size={20} className="text-neon-purple min-w-[20px]" />
                  <span className="text-sm text-gray-200">{Item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <AITipBox />
        </div>

        {/* Mini Game */}
        <div className="h-full">
          <MiniGame />
        </div>
      </div>
    </div>
  );
};