import React, { useState } from 'react';
import { PromoCode } from '../types';
import { Copy, Check, ExternalLink } from 'lucide-react';
import { NeonButton } from '../components/NeonButton';

const AFFILIATE_LINK = "https://www.shufflers.io/en/link/9cb114c2241119143011/";

const promos: PromoCode[] = [
  { id: '1', code: 'VERSE100', description: '100% Deposit Match up to $1000', bonus: '$1000', expiry: 'Permanent', type: 'Welcome' },
  { id: '2', code: 'SHUFFLEVIP', description: 'Instant VIP Bronze Status Access', bonus: 'VIP ACCESS', expiry: '2025-12-31', type: 'VIP' },
  { id: '3', code: 'FREESPIN50', description: '50 Free Spins on Wanted Dead or a Wild', bonus: '50 SPINS', expiry: 'Monthly', type: 'Reload' },
  { id: '4', code: 'CRYPTOBOOST', description: '10% Extra on first BTC Deposit', bonus: '10% BOOST', expiry: 'Limited', type: 'Welcome' },
];

export const Promos: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">ACTIVE <span className="text-neon-purple">CODES</span></h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Exclusive promo codes for the Shufflers.io community. Updated daily.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {promos.map((promo) => (
          <div key={promo.id} className="group relative bg-neon-card border border-white/10 rounded-xl p-6 hover:border-neon-purple/50 transition-all duration-300">
            <div className="absolute top-4 right-4">
              <span className={`text-xs font-bold px-2 py-1 rounded ${
                promo.type === 'Welcome' ? 'bg-neon-blue/20 text-neon-blue' :
                promo.type === 'VIP' ? 'bg-neon-purple/20 text-neon-purple' :
                'bg-neon-green/20 text-neon-green'
              }`}>
                {promo.type}
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">{promo.bonus}</h3>
              <p className="text-gray-400 text-sm">{promo.description}</p>
            </div>

            <div className="bg-black/50 p-4 rounded-lg flex items-center justify-between border border-white/5 group-hover:border-white/20 transition-colors">
              <code className="text-xl font-mono tracking-widest text-neon-blue">{promo.code}</code>
              <button 
                onClick={() => handleCopy(promo.id, promo.code)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-300 hover:text-white"
              >
                {copiedId === promo.id ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
              </button>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-gray-500 font-mono">Expires: {promo.expiry}</span>
              <a 
                 href={`#promo-details/${promo.id}`} // Simulating individual page link within hash router
                 className="flex items-center gap-1 text-sm text-neon-purple hover:text-white transition-colors"
              >
                DETAILS <ArrowRightIcon />
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <NeonButton onClick={() => window.open(AFFILIATE_LINK, '_blank')}>
            USE CODES ON SHUFFLERS.IO <ExternalLink size={16} className="ml-2"/>
        </NeonButton>
      </div>
    </div>
  );
};

const ArrowRightIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
)