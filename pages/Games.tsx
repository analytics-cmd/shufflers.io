import React, { useState } from 'react';
import { Game } from '../types';
import { Play, Info, AlertTriangle } from 'lucide-react';
import { NeonButton } from '../components/NeonButton';
import { analyzeGameStrategy } from '../services/geminiService';

const AFFILIATE_LINK = "https://www.shufflers.io/en/link/9cb114c2241119143011/";

// Mock Data
const games: Game[] = [
  { id: '1', title: 'Plinko', provider: 'Shuffle Originals', category: 'Originals', rtp: 99.00, volatility: 'Low', image: 'https://picsum.photos/400/300?random=1' },
  { id: '2', title: 'Wanted Dead or a Wild', provider: 'Hacksaw', category: 'Slots', rtp: 96.38, volatility: 'High', image: 'https://picsum.photos/400/300?random=2' },
  { id: '3', title: 'Crazy Time', provider: 'Evolution', category: 'Live', rtp: 96.08, volatility: 'Medium', image: 'https://picsum.photos/400/300?random=3' },
  { id: '4', title: 'Sweet Bonanza', provider: 'Pragmatic Play', category: 'Slots', rtp: 96.48, volatility: 'Medium', image: 'https://picsum.photos/400/300?random=4' },
  { id: '5', title: 'Mines', provider: 'Shuffle Originals', category: 'Originals', rtp: 99.00, volatility: 'Medium', image: 'https://picsum.photos/400/300?random=5' },
  { id: '6', title: 'Blackjack', provider: 'Evolution', category: 'Table', rtp: 99.28, volatility: 'Low', image: 'https://picsum.photos/400/300?random=6' },
];

export const Games: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [aiAnalysis, setAiAnalysis] = useState<string>('');
  const [loadingAi, setLoadingAi] = useState(false);

  const handleGameClick = async (game: Game) => {
    setSelectedGame(game);
    setLoadingAi(true);
    setAiAnalysis('');
    const analysis = await analyzeGameStrategy(game.title);
    setAiAnalysis(analysis);
    setLoadingAi(false);
  };

  const handleRedirect = () => {
    window.open(AFFILIATE_LINK, '_blank');
  };

  return (
    <div>
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">GAME <span className="text-neon-blue">LIBRARY</span></h1>
          <p className="text-gray-400">Top rated volatility indices and RTP configurations.</p>
        </div>
        <div className="hidden md:flex gap-2">
            {['ALL', 'SLOTS', 'LIVE', 'ORIGINALS'].map(cat => (
                <button key={cat} className="px-4 py-2 border border-white/10 rounded-full text-xs font-bold hover:bg-white/10 transition-colors">
                    {cat}
                </button>
            ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <div 
            key={game.id} 
            className="group relative rounded-xl overflow-hidden cursor-pointer border border-transparent hover:border-neon-blue/50 transition-all duration-300"
            onClick={() => handleGameClick(game)}
          >
            <div className="aspect-[4/3] w-full relative">
                <img src={game.image} alt={game.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                    <Play className="text-white fill-white" size={32} />
                    <span className="text-xs font-bold tracking-widest text-white">CLICK TO VIEW</span>
                </div>
            </div>
            
            <div className="bg-neon-card p-4">
                <h3 className="font-bold text-white truncate">{game.title}</h3>
                <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-gray-500">{game.provider}</span>
                    <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${
                        game.volatility === 'High' ? 'bg-red-500/20 text-red-500' : 
                        game.volatility === 'Medium' ? 'bg-yellow-500/20 text-yellow-500' : 
                        'bg-green-500/20 text-green-500'
                    }`}>
                        {game.volatility}
                    </span>
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* Game Detail Modal */}
      {selectedGame && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedGame(null)}>
          <div className="bg-neon-card border border-white/20 w-full max-w-2xl rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]" onClick={e => e.stopPropagation()}>
            <div className="h-48 relative">
                <img src={selectedGame.image} className="w-full h-full object-cover" alt="header"/>
                <div className="absolute inset-0 bg-gradient-to-t from-neon-card to-transparent" />
                <div className="absolute bottom-4 left-6">
                    <h2 className="text-3xl font-bold text-white">{selectedGame.title}</h2>
                    <p className="text-neon-blue font-mono">{selectedGame.provider}</p>
                </div>
            </div>

            <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div className="bg-black/30 p-3 rounded-lg">
                        <div className="text-xs text-gray-500">RTP</div>
                        <div className="font-bold text-white">{selectedGame.rtp}%</div>
                    </div>
                    <div className="bg-black/30 p-3 rounded-lg">
                        <div className="text-xs text-gray-500">VOLATILITY</div>
                        <div className="font-bold text-white">{selectedGame.volatility}</div>
                    </div>
                    <div className="bg-black/30 p-3 rounded-lg">
                        <div className="text-xs text-gray-500">CATEGORY</div>
                        <div className="font-bold text-white">{selectedGame.category}</div>
                    </div>
                </div>

                <div className="mb-6 bg-neon-purple/5 border border-neon-purple/20 p-4 rounded-lg">
                    <h4 className="text-neon-purple text-xs font-bold mb-2 flex items-center gap-2">
                        <Info size={14}/> AI STRATEGIC ANALYSIS
                    </h4>
                    <p className="text-sm text-gray-300 italic min-h-[40px]">
                        {loadingAi ? <span className="animate-pulse">Analyzing blockchain seed data...</span> : aiAnalysis}
                    </p>
                </div>

                <div className="flex gap-4">
                    <NeonButton fullWidth variant="green" onClick={handleRedirect}>
                        PLAY FOR REAL MONEY
                    </NeonButton>
                    <button 
                        onClick={() => setSelectedGame(null)}
                        className="px-6 py-3 rounded border border-white/10 hover:bg-white/5 transition-colors text-gray-400"
                    >
                        CLOSE
                    </button>
                </div>
                
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
                    <AlertTriangle size={12} />
                    <span>Gambling involves risk. Please play responsibly. 18+</span>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};